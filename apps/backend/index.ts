import express from 'express';
import { TrainModel,GenerateImage,GenerateImagesFromPack } from 'common';

const PORT = process.env.PORT || 8080

const app = express();

app.post('/',(req,res) => {

});

app.listen(PORT,() => {
    console.log(`app is running on port:${PORT}`)
})