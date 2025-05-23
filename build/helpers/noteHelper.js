"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGeneralLocationIDs = getGeneralLocationIDs;
exports.getGooglePlaceId = getGooglePlaceId;
exports.createGeneralLocation = createGeneralLocation;
exports.getGeneralCoordinates = getGeneralCoordinates;
// import { PrismaClient } from '../generated/prisma';
const client_1 = require("@prisma/client");
const helper_1 = require("./helper");
const prisma = new client_1.PrismaClient();
function getGeneralLocationIDs(generalLocation) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const countryData = yield prisma.country.findUnique({
                where: { googlePlaceId: generalLocation.country.placeId },
            });
            if (!countryData)
                throw Error('Country does not exist');
            const stateProvinceData = yield prisma.stateProvince.findUnique({
                where: { googlePlaceId: generalLocation.stateProvince.placeId },
            });
            if (!stateProvinceData)
                throw Error('StateProvince does not exist');
            const cityTownExists = yield prisma.cityTown.findUnique({
                where: { googlePlaceId: generalLocation.cityTown.placeId },
            });
            if (!cityTownExists)
                throw Error('CityTown does not exist');
            const result = {
                cityTownId: cityTownExists.id,
                stateProvinceId: stateProvinceData.id,
                countryId: countryData.id,
            };
            return result;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    });
}
function getGooglePlaceId(locationFetchNoteData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let countryData = null;
            let stateProvinceData = null;
            let cityTownData = null;
            if (locationFetchNoteData.locationType === 'country') {
                countryData = yield prisma.country.findUnique({
                    where: { googlePlaceId: locationFetchNoteData.placeId },
                });
                if (!countryData)
                    throw Error('Country does not exist');
                return countryData.googlePlaceId;
            }
            else if (locationFetchNoteData.locationType === 'stateProvince') {
                stateProvinceData = yield prisma.stateProvince.findUnique({
                    where: { googlePlaceId: locationFetchNoteData.placeId },
                });
                if (!stateProvinceData)
                    throw Error('StateProvince does not exist');
                return stateProvinceData.googlePlaceId;
            }
            else if (locationFetchNoteData.locationType === 'cityTown') {
                cityTownData = yield prisma.cityTown.findUnique({
                    where: { googlePlaceId: locationFetchNoteData.placeId },
                });
                if (!cityTownData)
                    throw Error('CityTown does not exist');
                return cityTownData.googlePlaceId;
            }
            return null;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    });
}
function createGeneralLocation(cityTown, stateProvince, country, coordinates, generalLocation) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let countryData = yield prisma.country.findUnique({
                where: { googlePlaceId: generalLocation.country.placeId },
            });
            if (!countryData) {
                countryData = yield prisma.country.create({
                    data: {
                        googlePlaceId: generalLocation.country.placeId,
                        name: (0, helper_1.trimAndToLowerCase)(country),
                        latitude: coordinates.country.latitude,
                        longitude: coordinates.country.longitude,
                    },
                });
            }
            let stateProvinceData = yield prisma.stateProvince.findUnique({
                where: { googlePlaceId: generalLocation.stateProvince.placeId },
            });
            if (!stateProvinceData) {
                stateProvinceData = yield prisma.stateProvince.create({
                    data: {
                        googlePlaceId: generalLocation.stateProvince.placeId,
                        name: (0, helper_1.trimAndToLowerCase)(stateProvince),
                        countryId: countryData.id,
                        latitude: coordinates.stateProvince.latitude,
                        longitude: coordinates.stateProvince.longitude,
                    },
                });
            }
            const cityTownData = yield prisma.cityTown.create({
                data: {
                    googlePlaceId: generalLocation.cityTown.placeId,
                    name: (0, helper_1.trimAndToLowerCase)(cityTown),
                    stateProvinceId: stateProvinceData.id,
                    countryId: countryData.id,
                    latitude: coordinates.cityTown.latitude,
                    longitude: coordinates.cityTown.longitude,
                },
            });
            const result = {
                cityTownId: cityTownData.id,
                stateProvinceId: stateProvinceData.id,
                countryId: countryData.id,
            };
            return result;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    });
}
function getGeneralCoordinates(cityTownId, stateProvinceId, countryId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const countryData = yield prisma.country.findUnique({
                where: { id: countryId },
            });
            if (!countryData)
                throw Error("Couldn't find country id.");
            const stateProvinceData = yield prisma.stateProvince.findUnique({
                where: { id: stateProvinceId },
            });
            if (!stateProvinceData)
                throw Error("Couldn't find stateProvince id.");
            const cityTownData = yield prisma.cityTown.findUnique({
                where: { id: cityTownId },
            });
            if (!cityTownData)
                throw Error("Couldn't find cityTown id.");
            const countryCoordinates = { latitude: countryData.latitude, longitude: countryData.longitude };
            const stateProvinceCoordinates = {
                latitude: stateProvinceData.latitude,
                longitude: stateProvinceData.longitude,
            };
            const cityTownCoordinates = { latitude: cityTownData.latitude, longitude: cityTownData.longitude };
            const generalCoordinates = {
                cityTown: cityTownCoordinates,
                stateProvince: stateProvinceCoordinates,
                country: countryCoordinates,
            };
            return generalCoordinates;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    });
}
