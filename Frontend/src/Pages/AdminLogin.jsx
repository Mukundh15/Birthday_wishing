import {useState} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
function AdminLogin(){
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const HandleSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/Birthday/AdminLogin",{email,password},{withCredentials: true})
        .then(()=>{
            navigate("/Birthday/Admin");
        }).catch((err)=>{
            console.log(err);
        })
    }
    return(
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200">
            <div className="flex flex-col gap-6 bg-white shadow-2xl p-12 rounded-2xl w-96">
                <h1 className="text-3xl font-extrabold text-gray-800 text-center animate-pulse mb-4">Admin Login</h1>
                <input id="email" placeholder="Enter your Name" onChange={(x)=>setEmail(x.target.value)} className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 shadow-sm transition-all duration-300"/>
                <input id="password" placeholder="Enter Password" type="password" onChange={(x)=>setPassword(x.target.value)} className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 shadow-sm transition-all duration-300"/>
                <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-4 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={HandleSubmit}>Enter</button>
                <p className="text-gray-500 text-center text-sm mt-2">
                © 2025 Admin Panel
                </p>
            </div>
        </div>
    )
}
export default AdminLogin;