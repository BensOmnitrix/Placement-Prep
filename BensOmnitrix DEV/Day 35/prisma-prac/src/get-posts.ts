import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient({ log: ["info", "query", "error"] });

async function main() {
  // ... you will write your Prisma Client queries here
  const posts = await prisma.post.findMany({
    include: {
      author: {
        select: {
          email: true,
          name: true
        },
      },
    },
  });
  console.log(posts);
}

main()
  .then(async () => {
    console.log("Done with the query");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
