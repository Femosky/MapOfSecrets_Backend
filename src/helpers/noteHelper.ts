// import { PrismaClient } from '../generated/prisma';
import { PrismaClient } from '@prisma/client';

import {
    Coordinates,
    GeneralCoordinates,
    GeneralLocation,
    Location,
    Note,
    GeneralLocationIDs,
} from '../models/noteInterfaces';
import { trimAndToLowerCase } from './helper';

const prisma = new PrismaClient();

export async function getGeneralLocationIDs(generalLocation: GeneralLocation): Promise<GeneralLocationIDs | null> {
    try {
        const countryData = await prisma.country.findUnique({
            where: { googlePlaceId: generalLocation.country.placeId },
        });

        if (!countryData) throw Error('Country does not exist');

        const stateProvinceData = await prisma.stateProvince.findUnique({
            where: { googlePlaceId: generalLocation.stateProvince.placeId },
        });

        if (!stateProvinceData) throw Error('StateProvince does not exist');

        const cityTownExists = await prisma.cityTown.findUnique({
            where: { googlePlaceId: generalLocation.cityTown.placeId },
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

export async function createGeneralLocation(
    cityTown: string,
    stateProvince: string,
    country: string,
    coordinates: GeneralCoordinates,
    generalLocation: GeneralLocation
): Promise<GeneralLocationIDs | null> {
    try {
        let countryData = await prisma.country.findUnique({
            where: { googlePlaceId: generalLocation.country.placeId },
        });

        if (!countryData) {
            countryData = await prisma.country.create({
                data: {
                    googlePlaceId: generalLocation.country.placeId,
                    name: trimAndToLowerCase(country),
                    latitude: coordinates.country.latitude,
                    longitude: coordinates.country.longitude,
                },
            });
        }

        let stateProvinceData = await prisma.stateProvince.findUnique({
            where: { googlePlaceId: generalLocation.stateProvince.placeId },
        });

        if (!stateProvinceData) {
            stateProvinceData = await prisma.stateProvince.create({
                data: {
                    googlePlaceId: generalLocation.stateProvince.placeId,
                    name: trimAndToLowerCase(stateProvince),
                    countryId: countryData.id,
                    latitude: coordinates.stateProvince.latitude,
                    longitude: coordinates.stateProvince.longitude,
                },
            });
        }

        const cityTownData = await prisma.cityTown.create({
            data: {
                googlePlaceId: generalLocation.cityTown.placeId,
                name: trimAndToLowerCase(cityTown),
                stateProvinceId: stateProvinceData.id,
                countryId: countryData.id,
                latitude: coordinates.cityTown.latitude,
                longitude: coordinates.cityTown.longitude,
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

export async function getGeneralCoordinates(
    cityTownId: number,
    stateProvinceId: number,
    countryId: number
): Promise<GeneralCoordinates | null> {
    try {
        const countryData = await prisma.country.findUnique({
            where: { id: countryId },
        });

        if (!countryData) throw Error("Couldn't find country id.");

        const stateProvinceData = await prisma.stateProvince.findUnique({
            where: { id: stateProvinceId },
        });

        if (!stateProvinceData) throw Error("Couldn't find stateProvince id.");

        const cityTownData = await prisma.cityTown.findUnique({
            where: { id: cityTownId },
        });

        if (!cityTownData) throw Error("Couldn't find cityTown id.");

        const countryCoordinates: Coordinates = { latitude: countryData.latitude, longitude: countryData.longitude };
        const stateProvinceCoordinates: Coordinates = {
            latitude: stateProvinceData.latitude,
            longitude: stateProvinceData.longitude,
        };
        const cityTownCoordinates: Coordinates = { latitude: cityTownData.latitude, longitude: cityTownData.longitude };

        const generalCoordinates: GeneralCoordinates = {
            cityTown: cityTownCoordinates,
            stateProvince: stateProvinceCoordinates,
            country: countryCoordinates,
        };

        return generalCoordinates;
    } catch (e) {
        console.log(e);
        return null;
    }
}
