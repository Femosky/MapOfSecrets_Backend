import { Router } from 'express';
import { PrismaClient } from '../generated/prisma';

const router = Router();
const prisma = new PrismaClient();

router.get('/cities', async (request, response) => {
    console.log('came here');
    try {
        const cities = await prisma.cityTown.findMany({
            select: {
                id: true,
                name: true,
                countryId: true,
                latitude: true,
                longitude: true,
            },
        });
        response.json(cities);
    } catch (e) {}
});

export default router;
