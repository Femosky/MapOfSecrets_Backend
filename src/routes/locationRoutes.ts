import { Router } from 'express';
// import { PrismaClient } from '../generated/prisma';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

interface CountPayload {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    count: number;
}

router.get('/cities', async (request, response) => {
    try {
        const cities = await prisma.cityTown.findMany({
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

        const payload: CountPayload[] = cities.map((city: any) => {
            const cityPayload: CountPayload = {
                id: city.id,
                name: city.name,
                latitude: city.latitude,
                longitude: city.longitude,
                count: city._count.notes,
            };
            return cityPayload;
        });

        response.json(payload);
    } catch (e) {}
});

router.get('/states', async (request, response) => {
    try {
        const states = await prisma.stateProvince.findMany({
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

        const payload: CountPayload[] = states.map((state: any) => {
            const statePayload: CountPayload = {
                id: state.id,
                name: state.name,
                latitude: state.latitude,
                longitude: state.longitude,
                count: state._count.notes,
            };
            return statePayload;
        });

        response.json(payload);
    } catch (e) {}
});

router.get('/countries', async (request, response) => {
    try {
        const countries = await prisma.country.findMany({
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

        const payload: CountPayload[] = countries.map((country: any) => {
            const countryPayload: CountPayload = {
                id: country.id,
                name: country.name,
                latitude: country.latitude,
                longitude: country.longitude,
                count: country._count.notes,
            };
            return countryPayload;
        });

        response.json(payload);
    } catch (e) {}
});

export default router;
