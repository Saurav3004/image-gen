import express from 'express';
import { TrainModel,GenerateImage,GenerateImagesFromPack } from 'common';
import { prismaClient } from "db"

const PORT = process.env.PORT || 8080

const app = express();
app.use(express.json())

app.post('/ai/training', async (req,res) => {
    const {data,success} = TrainModel.safeParse(req.body)

    if(!success){
        return res.status(411).json({
            message:"Incorrect Input"
        })
    }

    await prismaClient.model.create({
        data:{
            name: data.name,
            type: data.type,
            age: data.age,
            ethnicity: data.ethnicity,
            eyeColor: data.eyeColor,
            bald: data.bald

        }
    })
});

app.listen(PORT,() => {
    console.log(`app is running on port:${PORT}`)
})