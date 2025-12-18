import dist = require("redis");

const client = dist.createClient();

async function processSubmission(submission: string){
    const data = JSON.parse(submission);
    const problem = data.problem;
    const code = data.code;
    const userId = data.userId;
    const language = data.language;

    console.log(problem,code,userId,language);

    await new Promise(r => setTimeout(r,2000));

    console.log(`Problem for the ${userId} has been processed`);
}

async function startWorker(){
    try{
        await client.connect();
        console.log("Worker connected to Redis");

        while(true){
            try{
                const response = await client.brPop("submission",0);
                console.log(response);
                //actually run the code which come from the response and run it in the docker itself
                await processSubmission(response.element);
            }
            catch(err){
                //Put the same string back in the queue as it is not processed
            }
        }
    }catch(err){
        console.error(err);
    }
}

startWorker();