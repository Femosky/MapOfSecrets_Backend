import { Router } from 'express';
import { PrismaClient } from '../generated/prisma';
import { trimAndToLowerCase } from '../helpers/helper';
import {
    Coordinates,
    GeneralCoordinates,
    GeneralLocation,
    Location,
    Note,
    GeneralLocationIDs,
} from '../models/noteInterfaces';
import { getGeneralLocationIDs, createGeneralLocation, getGeneralCoordinates } from '../helpers/noteHelper';

const router = Router();
const prisma = new PrismaClient();

router.post('/', async (request, response) => {
    const { text, location } = request.body;

    const locationData = location as Location;
    const latitude = locationData.coordinates.latitude;
    const longitude = locationData.coordinates.longitude;
    const cityTown = locationData.cityTown;
    const stateProvince = locationData.stateProvince;
    const country = locationData.country;

    // Create and store note
    try {
        // Validate post data
        if (!locationData) throw Error('Invalid post data.');

        // Find out if general coordinates already exists
        const generalLocationExists = await getGeneralLocationIDs(cityTown, stateProvince, country);

        // Create new general locations if there was no existing location
        const generalLocationIDs: GeneralLocationIDs | null = generalLocationExists
            ? generalLocationExists
            : await createGeneralLocation(cityTown, stateProvince, country, locationData.generalCoordinates);

        if (!generalLocationIDs) throw Error('Failed to create a new general location');

        const result = await prisma.note.create({
            data: {
                text: trimAndToLowerCase(text),
                latitude,
                longitude,
                cityTown: trimAndToLowerCase(cityTown),
                stateProvince: trimAndToLowerCase(stateProvince),
                country: trimAndToLowerCase(country),
                cityTownId: generalLocationIDs.cityTownId,
                stateProvinceId: generalLocationIDs.stateProvinceId,
                countryId: generalLocationIDs.countryId,
            },
        });

        response.json(result);
    } catch (e) {
        response.status(400).json({ error: `Failed to create note: ${e}` });
    }
});

router.post('/city', async (request, response) => {
    const data = request.body;
    const generalLocation = data as GeneralLocation;

    try {
        const generalCoordinates = await getGeneralLocationIDs(
            generalLocation.cityTown,
            generalLocation.stateProvince,
            generalLocation.country
        );

        if (!generalCoordinates) {
            // throw Error('Location not found in database.');
            response.json({ error: 'Location not found in database.' });
            return;
        }

        const results = await prisma.cityTown.findUnique({
            where: { id: generalCoordinates.cityTownId },
            include: {
                notes: {
                    select: {
                        id: true,
                        createdAt: true,
                        text: true,
                        cityTown: true,
                        stateProvince: true,
                        country: true,
                        latitude: true,
                        longitude: true,
                    },
                },
            },
        });

        if (!results) {
            // throw Error("Note doesn't exist");
            response.json({ error: "Note doesn't exist" });
            return;
        }

        const notes: Note[] = await Promise.all(
            results.notes.map(async (note) => {
                const coordinates: Coordinates = {
                    latitude: note.latitude,
                    longitude: note.longitude,
                };

                const genCoordinates: GeneralCoordinates | null = await getGeneralCoordinates(
                    generalCoordinates.cityTownId,
                    generalCoordinates.stateProvinceId,
                    generalCoordinates.countryId
                );

                const location: Location = {
                    id: generalCoordinates.cityTownId,
                    coordinates,
                    generalCoordinates: genCoordinates || {
                        cityTown: { latitude: 0, longitude: 0 },
                        stateProvince: { latitude: 0, longitude: 0 },
                        country: { latitude: 0, longitude: 0 },
                    },
                    cityTown: note.cityTown,
                    stateProvince: note.stateProvince,
                    country: note.country,
                };

                const preparedNote: Note = {
                    id: note.id,
                    timestamp: note.createdAt,
                    location,
                    text: note.text,
                };

                return preparedNote;
            })
        );

        response.json({ notes });
    } catch (e) {
        response.status(400).json({ error: `Failed to create note: ${e}` });
    }
    response.json({ generalLocation });
});

export default router;
