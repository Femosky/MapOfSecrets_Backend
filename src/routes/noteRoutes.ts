import { Router } from 'express';
import { PrismaClient } from '../generated/prisma';

const router = Router();
const prisma = new PrismaClient();

interface Coordinates {
    latitude: number;
    longitude: number;
}

interface GeneralCoordinates {
    cityTown: Coordinates;
    stateProvince: Coordinates;
    country: Coordinates;
}

interface Location {
    id: number;
    coordinates: Coordinates;
    generalCoordinates: GeneralCoordinates;
    cityTown: string;
    stateProvince: string;
    country: string;
}

// interface Note {
//     id: number;
//     timestamp: Date;
//     location: Location;
//     text: string;
// }

interface GeneralLocationIDs {
    cityTownId: number;
    stateProvinceId: number;
    countryId: number;
}

async function getGeneralLocationIDs(
    cityTown: string,
    stateProvince: string,
    country: string
): Promise<GeneralLocationIDs | null> {
    try {
        const countryData = await prisma.country.findUnique({
            where: { name: country },
        });

        if (!countryData) throw Error('Country does not exist');

        const stateProvinceData = await prisma.stateProvince.findUnique({
            where: {
                name_countryId: {
                    name: stateProvince,
                    countryId: countryData.id,
                },
            },
        });

        if (!stateProvinceData) throw Error('StateProvince does not exist');

        const cityTownExists = await prisma.cityTown.findUnique({
            where: {
                name_stateProvinceId_countryId: {
                    name: cityTown,
                    stateProvinceId: stateProvinceData.id,
                    countryId: countryData.id,
                },
            },
        });

        if (!cityTownExists) throw Error('CityTown does not exist');

        const result: GeneralLocationIDs = {
            cityTownId: cityTownExists.id,
            stateProvinceId: stateProvinceData.id,
            countryId: countryData.id,
        };

        return result;
    } catch (e) {
        console.log(e);
        return null;
    }
}

async function createGeneralLocation(
    cityTown: string,
    stateProvince: string,
    country: string,
    coordinates: Coordinates
): Promise<GeneralLocationIDs | null> {
    try {
        let countryData = await prisma.country.findUnique({
            where: { name: country },
        });

        if (!countryData) {
            countryData = await prisma.country.create({
                data: {
                    name: country,
                    latitude: coordinates.latitude,
                    longitude: coordinates.longitude,
                },
            });
        }

        let stateProvinceData = await prisma.stateProvince.findUnique({
            where: {
                name_countryId: {
                    name: stateProvince,
                    countryId: countryData.id,
                },
            },
        });

        if (!stateProvinceData) {
            stateProvinceData = await prisma.stateProvince.create({
                data: {
                    name: stateProvince,
                    countryId: countryData.id,
                    latitude: coordinates.latitude,
                    longitude: coordinates.longitude,
                },
            });
        }

        const cityTownData = await prisma.cityTown.create({
            data: {
                name: cityTown,
                stateProvinceId: stateProvinceData.id,
                countryId: countryData.id,
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
            },
        });

        const result: GeneralLocationIDs = {
            cityTownId: cityTownData.id,
            stateProvinceId: stateProvinceData.id,
            countryId: countryData.id,
        };

        return result;
    } catch (e) {
        console.log(e);
        return null;
    }
}

router.get('/', (request, response) => {
    response.json({ response: 'Hiya' });
});

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
            : await createGeneralLocation(cityTown, stateProvince, country, locationData.coordinates);

        if (!generalLocationIDs) throw Error('Failed to create a new general location');

        const result = await prisma.note.create({
            data: {
                text,
                latitude,
                longitude,
                cityTown,
                stateProvince,
                country,
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

export default router;
