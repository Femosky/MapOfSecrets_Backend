import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
    response.json({ response: 'Hiya' });
});

router.post('/', (request, response) => {
    const payload = request.body;
    response.json({ response: payload });
});

export default router;
