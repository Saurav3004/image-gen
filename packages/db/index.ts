import { PrismaClient } from "./generated/prisma/client";

export const prismaClient = new PrismaClient({
    accelerateUrl:process.env.DATABASE_URL!
})
