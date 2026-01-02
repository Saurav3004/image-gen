import { z } from 'zod'

export const TrainModel = z.object({
    name: z.string(),
    type: z.enum(["Man","Woman","Other"]),
    age: z.number(),
    ethnicity: z.enum(["White",
        "Black",
        "East Asian",
        "Asian American",
        "South East Asian",
        "South Asian",
        "Middle Eastern",
        "Pacific",
        "Hispanic"
    ]),
    eyeColor: z.enum(["Brown", "Blue", "Hazle", "Green"]),
    bald: z.boolean(),
    image: z.array(z.string())
})

export const GenerateImage = z.object({
    prompt: z.string(),
    modelId: z.string(),
    num: z.number()
})

export const GenerateImagesFromPack = z.object({
    modelId: z.string(),
    packId: z.string()
})