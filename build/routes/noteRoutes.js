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
const express_1 = require("express");
// import { PrismaClient } from '../generated/prisma';
const client_1 = require("@prisma/client");
const helper_1 = require("../helpers/helper");
const noteHelper_1 = require("../helpers/noteHelper");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
router.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { text, location } = request.body;
    const locationData = location;
    const latitude = locationData.coordinates.latitude;
    const longitude = locationData.coordinates.longitude;
    const cityTown = locationData.cityTown;
    const stateProvince = locationData.stateProvince;
    const country = locationData.country;
    // Create and store note
    try {
        // Validate post data
        if (!locationData || !locationData.generalLocation)
            throw Error('Invalid post data.');
        // Find out if general coordinates already exists
        const generalLocationExists = yield (0, noteHelper_1.getGeneralLocationIDs)(locationData.generalLocation);
        // Create new general locations if there was no existing location
        const generalLocationIDs = generalLocationExists
            ? generalLocationExists
            : yield (0, noteHelper_1.createGeneralLocation)(cityTown, stateProvince, country, locationData.generalCoordinates, locationData.generalLocation);
        if (!generalLocationIDs)
            throw Error('Failed to create a new general location');
        const result = yield prisma.note.create({
            data: {
                text: text,
                latitude,
                longitude,
                cityTown: (0, helper_1.trimAndToLowerCase)(cityTown),
                stateProvince: (0, helper_1.trimAndToLowerCase)(stateProvince),
                country: (0, helper_1.trimAndToLowerCase)(country),
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
    }
    catch (e) {
        response.status(400).json({ error: `Failed to create note: ${e}` });
    }
}));
router.post('/location', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const data = request.body;
    const payload = data;
    try {
        if (!payload)
            throw Error('Invalid post data.');
        let results = null;
        if (payload.locationType === 'cityTown') {
            results = yield prisma.cityTown.findUnique({
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
        }
        else if (payload.locationType === 'stateProvince') {
            results = yield prisma.stateProvince.findUnique({
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
        }
        else if (payload.locationType === 'country')
            results = yield prisma.country.findUnique({
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
        const notes = yield Promise.all(results.notes.map((note) => __awaiter(void 0, void 0, void 0, function* () {
            const coordinates = {
                latitude: note.latitude,
                longitude: note.longitude,
            };
            const genCoordinates = yield (0, noteHelper_1.getGeneralCoordinates)(note.cityTownId, note.stateProvinceId, note.countryId);
            const location = {
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
            const preparedNote = {
                id: note.id,
                timestamp: note.createdAt,
                location,
                text: note.text,
            };
            return preparedNote;
        })));
        response.json({ notes });
    }
    catch (e) {
        response.status(400).json({ error: `Failed to get notes: ${e}` });
    }
}));
exports.default = router;
