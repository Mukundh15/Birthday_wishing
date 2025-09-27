import {useState} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
function Start(){
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const HandleSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/Birthday/Start",{name})
        .then(()=>{
            navigate("/Birthday/wish");
        }).catch((err)=>{
            alert("Something went wrong. Please try again later.");
            console.log(err);
        })
    }
    const AdminLogin=()=>{
        alert("This is Admins Login and If you are user then Go Back Please... Thank You");
        navigate("/Birthday/AdminLogin");
    }
    return(
        <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-white flex flex-col items-center justify-center px-4 relative">
            <button onClick={AdminLogin} className="absolute top-6 right-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105">Admin</button>
            <div className="flex flex-col items-center gap-8 w-full max-w-md">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 animate-pulse text-center">Welcome User!</h1>
                <div className="flex flex-col gap-6 bg-white shadow-2xl p-8 rounded-3xl w-full">
                    <input id="Name" placeholder="Enter your Name" onChange={(x) => setName(x.target.value)} className="border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 shadow-sm transition-all duration-300"/>
                    <button onClick={HandleSubmit} className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">Enter</button>
                </div>
            </div>
        </div>
    )
}
export default Start;