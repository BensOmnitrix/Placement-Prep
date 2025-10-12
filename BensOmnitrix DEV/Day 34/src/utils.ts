import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();
const { Pool, Client } = pkg;

// Connection pool (recommended for production)
export const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// On-demand client (for custom cases)
export async function getClient() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
  });
  await client.connect();
  return client;
}
