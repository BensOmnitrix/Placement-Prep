import AppBar from "@/components/AppBar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";

export default async function UserPage() {
  const session = await getServerSession(NEXT_AUTH);
  
  return (
    <div>
      <AppBar />
      {JSON.stringify(session)}
    </div>
  );
}
