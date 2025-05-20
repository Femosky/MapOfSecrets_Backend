import { Router } from 'express';
import { PrismaClient } from '../generated/prisma';

const router = Router();
const prisma = new PrismaClient();

router.get('/cities', async (request, response) => {
    try {
        const cities = await prisma.cityTown.findMany({
            select: {
                id: true,
                name: true,
                latitude: true,
                longitude: true,
            },
        });
        response.json(cities);
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
            },
        });
        response.json(states);
    } catch (e) {}
});

router.get('/countries', async (request, response) => {
    try {
        const states = await prisma.country.findMany({
            select: {
                id: true,
                name: true,
                latitude: true,
                longitude: true,
            },
        });
        response.json(states);
    } catch (e) {}
});

export default router;
