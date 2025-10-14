import { PrismaClient } from "../generated/prisma/index.js"

const prisma = new PrismaClient({log: ['info','query','error']});

async function main() {
  // ... you will write your Prisma Client queries here
  const users = await prisma.user.findMany({});
  console.log(users);

  const user = await prisma.user.findUnique({
    where: {
        id: 1
    },
    include: {
        posts: true
    }
  })
  console.log(user);
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