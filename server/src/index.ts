import express from 'express';

export default function createApp() {
    const app = express();

    // tmp routes
    app.get('/', (req, res) => {
        res.send('Hello friend!! You have reached the api for stark cms');
    });

    return app;
}
