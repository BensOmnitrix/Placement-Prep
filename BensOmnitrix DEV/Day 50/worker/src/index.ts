import { createClient } from "redis";

const client = createClient();

async function processSubmission(submissionString: string) {
  const data: {
    problem: string;
    userId: string;
    code: string;
    language: string;
  } = JSON.parse(submissionString);
  console.log(`Problem Name: ${data.problem}
        Language: ${data.language}
        Code: ${data.code}
        userId: ${data.userId}`);
  //Do the logic to process the logic and then append the status of the problem in the database and also return the same to the pubsubs
  await new Promise(r => setTimeout(r, 2000));
  console.log(`Problem is processed`);
  await client.publish(`userId:${data.userId}`, JSON.stringify({problem: data.problem,status: "TLE"}));
}

async function startServer() {
  try {
    await client.connect();
    console.log("Worker successfully connected to Redis");

    while (true) {
      try {
        const submission = await client.brPop("queue:submissions", 0);
        console.log(submission);
        await processSubmission(submission.element);
      } catch (e) {
        console.error(e);
      }
    }
  } catch (e) {
    console.error(e);
  }
}

startServer();
