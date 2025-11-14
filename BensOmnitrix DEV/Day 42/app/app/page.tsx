import axios from "axios";

export async function getUserDetails(){
  await new Promise((r) => setTimeout(r,5000));
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data
}

//async component - Means at the top of componenet we could do async calls => Only in sever components  
export default async function Home(){
  const userDetails = await getUserDetails();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 rounded-md">
        <div className="p-4">Name: {userDetails.name}</div>
        <div className="p-4">Email: {userDetails.email}</div>
      </div>
    </div>
  )
}