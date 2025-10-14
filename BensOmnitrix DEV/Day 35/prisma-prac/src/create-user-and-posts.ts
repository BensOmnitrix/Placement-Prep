import { PrismaClient } from "../generated/prisma/index.js"

const prisma = new PrismaClient({log: ['info','query','error']});

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data: {
        email: "harkirat51@gmail.com",
        name: "harkirat singh",
        posts: {
            create: [
                {
                    title: "Harkirat Title 1",
                    content: "Maja aa gya",
                },
                {
                    title: "Aur sunao",
                }
            ]
        }
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