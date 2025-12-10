import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Signin} from "../components/Signin"
import {Home} from "../components/Home"

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />}/> 
        <Route path="/home" element={<Home/>}/> 
      </Routes>
    </BrowserRouter>
  )
}