import { Router } from 'express';
// import { PrismaClient } from '../generated/prisma';
import { PrismaClient } from '@prisma/client';
import { trimAndToLowerCase } from '../helpers/helper';
import {
    Coordinates,
    GeneralCoordinates,
    GeneralLocation,
    Location,
    Note,
    GeneralLocationIDs,
    LocationFetchNoteData,
} from '../models/noteInterfaces';
import {
    createGeneralLocation,
    getGeneralCoordinates,
    getGeneralLocationIDs,
    getGooglePlaceId,
} from '../helpers/noteHelper';

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
        if (!locationData || !locationData.generalLocation) throw Error('Invalid post data.');

        // Find out if general coordinates already exists
        const generalLocationExists = await getGeneralLocationIDs(locationData.generalLocation);

        // Create new general locations if there was no existing location
        const generalLocationIDs: GeneralLocationIDs | null = generalLocationExists
            ? generalLocationExists
            : await createGeneralLocation(
                  cityTown,
                  stateProvince,
                  country,
                  locationData.generalCoordinates,
                  locationData.generalLocation
              );

        if (!generalLocationIDs) throw Error('Failed to create a new general location');

        const result = await prisma.note.create({
            data: {
                text: text,
                latitude,
                longitude,
                cityTown: trimAndToLowerCase(cityTown),
                stateProvince: trimAndToLowerCase(stateProvince),
                country: trimAndToLowerCase(country),
                cityTownId: generalLocationIDs.cityTownId,
                stateProvinceId: generalLocationIDs.stateProvinceId,
                countryId: generalLocationIDs.countryId,
                cityTownGooglePlaceId: locationData.generalLocation.cityTown.placeId,
                stateProvinceGooglePlaceId: locationData.generalLocation.stateProvince.placeId,
                countryGooglePlaceId: locationData.generalLocation.country.placeId,
            },
        });

        if (!result) {
            response.json({ error: 'Failed to create the note.' });
            return;
        }

        response.json({ message: 'Note successfully created.', noteId: result.id });
    } catch (e) {
        response.status(400).json({ error: `Failed to create note: ${e}` });
    }
});

router.post('/location', async (request, response) => {
    const data = request.body;
    const payload = data as LocationFetchNoteData;

    try {
        if (!payload) throw Error('Invalid post data.');

        let results = null;

        if (payload.locationType === 'cityTown') {
            results = await prisma.cityTown.findUnique({
                where: { googlePlaceId: payload.placeId },
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
        } else if (payload.locationType === 'stateProvince') {
            results = await prisma.stateProvince.findUnique({
                where: { googlePlaceId: payload.placeId },
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
        } else if (payload.locationType === 'country')
            results = await prisma.country.findUnique({
                where: { googlePlaceId: payload.placeId },
                include: {
                    notes: {
                        select: {
                            id: true,
                            createdAt: true,
                            text: true,
                            cityTown: true,
                            stateProvince: true,
                            country: true,
                            cityTownId: true,
                            stateProvinceId: true,
                            countryId: true,
                            latitude: true,
                            longitude: true,
                        },
                    },
                },
            });

        if (!results) {
            response.json({ error: "Note doesn't exist or placeId doesn't exist." });
            return;
        }

        const notes: Note[] = await Promise.all(
            results.notes.map(async (note: any) => {
                const coordinates: Coordinates = {
                    latitude: note.latitude,
                    longitude: note.longitude,
                };

                const genCoordinates: GeneralCoordinates | null = await getGeneralCoordinates(
                    note.cityTownId,
                    note.stateProvinceId,
                    note.countryId
                );

                const location: Location = {
                    id: note.id,
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
        response.status(400).json({ error: `Failed to get notes: ${e}` });
    }
});

export default router;
