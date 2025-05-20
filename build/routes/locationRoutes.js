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
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
router.get('/cities', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cities = yield prisma.cityTown.findMany({
            select: {
                id: true,
                name: true,
                latitude: true,
                longitude: true,
                _count: {
                    select: { notes: true },
                },
            },
        });
        const payload = cities.map((city) => {
            const cityPayload = {
                id: city.id,
                name: city.name,
                latitude: city.latitude,
                longitude: city.longitude,
                count: city._count.notes,
            };
            return cityPayload;
        });
        response.json(payload);
    }
    catch (e) { }
}));
router.get('/states', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const states = yield prisma.stateProvince.findMany({
            select: {
                id: true,
                name: true,
                latitude: true,
                longitude: true,
                _count: {
                    select: { notes: true },
                },
            },
        });
        const payload = states.map((state) => {
            const statePayload = {
                id: state.id,
                name: state.name,
                latitude: state.latitude,
                longitude: state.longitude,
                count: state._count.notes,
            };
            return statePayload;
        });
        response.json(payload);
    }
    catch (e) { }
}));
router.get('/countries', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const countries = yield prisma.country.findMany({
            select: {
                id: true,
                name: true,
                latitude: true,
                longitude: true,
                _count: {
                    select: { notes: true },
                },
            },
        });
        const payload = countries.map((country) => {
            const countryPayload = {
                id: country.id,
                name: country.name,
                latitude: country.latitude,
                longitude: country.longitude,
                count: country._count.notes,
            };
            return countryPayload;
        });
        response.json(payload);
    }
    catch (e) { }
}));
exports.default = router;
