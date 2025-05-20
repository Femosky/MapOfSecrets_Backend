"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const noteRoutes_1 = __importDefault(require("./routes/noteRoutes"));
const locationRoutes_1 = __importDefault(require("./routes/locationRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/notes', noteRoutes_1.default);
app.use('/locations', locationRoutes_1.default);
app.get('/', (request, response) => {
    response.send("You've accessed the root get api for the MapOfSecrets weebsite.");
});
app.listen(3001, () => {
    console.log('Server ready at http://locahost:3001');
});
