import { PrismaClient } from "../generated/prisma/index.js"

const prisma = new PrismaClient({log: ['info','query','error']})

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.post.create({
    data: {
        title: "Lakshay Batra Biopic",
        content: "A chapter in the life of the OG",
        author: {
            connect: {
                id: 1
            }
        },
    }
  })
}

main()
  .then(async () => {
    console.log("Done with the query");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })