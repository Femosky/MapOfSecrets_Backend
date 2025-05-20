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
exports.createGeneralLocation = createGeneralLocation;
exports.getGeneralCoordinates = getGeneralCoordinates;
// import { PrismaClient } from '../generated/prisma';
const client_1 = require("@prisma/client");
const helper_1 = require("./helper");
const prisma = new client_1.PrismaClient();
function getGeneralLocationIDs(cityTown, stateProvince, country) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const countryData = yield prisma.country.findUnique({
                where: { name: country },
            });
            if (!countryData)
                throw Error('Country does not exist');
            console.log('stateee', stateProvince);
            const stateProvinceData = yield prisma.stateProvince.findUnique({
                where: {
                    name_countryId: {
                        name: stateProvince,
                        countryId: countryData.id,
                    },
                },
            });
            if (!stateProvinceData)
                throw Error('StateProvince does not exist');
            const cityTownExists = yield prisma.cityTown.findUnique({
                where: {
                    name_stateProvinceId_countryId: {
                        name: cityTown,
                        stateProvinceId: stateProvinceData.id,
                        countryId: countryData.id,
                    },
                },
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
function createGeneralLocation(cityTown, stateProvince, country, coordinates) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let countryData = yield prisma.country.findUnique({
                where: { name: country },
            });
            if (!countryData) {
                countryData = yield prisma.country.create({
                    data: {
                        name: (0, helper_1.trimAndToLowerCase)(country),
                        latitude: coordinates.country.latitude,
                        longitude: coordinates.country.longitude,
                    },
                });
            }
            let stateProvinceData = yield prisma.stateProvince.findUnique({
                where: {
                    name_countryId: {
                        name: stateProvince,
                        countryId: countryData.id,
                    },
                },
            });
            if (!stateProvinceData) {
                stateProvinceData = yield prisma.stateProvince.create({
                    data: {
                        name: (0, helper_1.trimAndToLowerCase)(stateProvince),
                        countryId: countryData.id,
                        latitude: coordinates.stateProvince.latitude,
                        longitude: coordinates.stateProvince.longitude,
                    },
                });
            }
            const cityTownData = yield prisma.cityTown.create({
                data: {
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
