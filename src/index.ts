import express from 'express';
import noteRoutes from './routes/noteRoutes';
import locationRoutes from './routes/locationRoutes';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/notes', noteRoutes);
app.use('/locations', locationRoutes);

app.get('/', (request, response) => {
    response.send("You've accessed the root get api for the MapOfSecrets weebsite.");
});

app.listen(3001, () => {
    console.log('Server ready at http://locahost:3001');
});
