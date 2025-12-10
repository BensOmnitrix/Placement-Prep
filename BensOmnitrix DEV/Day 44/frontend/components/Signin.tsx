import { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router"

export function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
        placeholder="Enter username"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="Enter password"
      />
      <button
        onClick={async () => {
          await axios.post("http://localhost:3000/signin", {
              username,
              password,
          },{
            withCredentials: true
          });
          navigate("/home")
        }}
      >
        Submit
      </button>
      <button onClick={async () => {
          await axios.post("http://localhost:3000/logout",{},{
            withCredentials: true,
          });
        }}>Logout</button>
    </div>
  );
}
