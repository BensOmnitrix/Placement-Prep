import axios from "axios"
import { useEffect, useState } from "react"

interface UserData{
    id: number;
}

export function Home() {
    const [userData, setData] = useState<UserData>();

    useEffect(() => {
        axios.get("http://localhost:3000/user",{
            withCredentials: true
        }).then(response => {
            const data = response.data;
            setData(data);
        })
    },[]);

    return (
        <div>
            Your userId is {userData?.id}
        </div>
    )
}