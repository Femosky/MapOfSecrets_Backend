import express from 'express';
import noteRoutes from './routes/noteRoutes';

const app = express();
app.use(express.json());
app.use('/note', noteRoutes);

app.get('/', (request, response) => {
    response.send("You've accessed the root get api for the MapOfSecrets weebsite.");
});

app.listen(3001, () => {
    console.log('Server ready at http://locahost:3001');
});
