import axios from "axios";
import {useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
function Home(){
    const navigate=useNavigate();
    const [user,setUser]=useState({});
    const [color,setColor]=useState(false);
    useEffect(()=>{
        const getData=async()=>{
        try{
            let x=await axios.get("http://localhost:8080/Birthday/wishing",{withCredentials:true});
            setUser(x.data);
            if(x.data.gender=="male"){
                setColor(true);
            }
        }catch(err){
            console.error(err);
        }
        };
        getData();
    },[]);
    const AdminLogin=()=>{
        alert("This is Admins Login and If you are user then Go Back Please... Thank You");
        navigate("/Birthday/AdminLogin");
    }
    const bgGradient=color?"bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300":"bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300";
    return(
        <div className={`${bgGradient}`}>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-6 py-3 mt-4 ms-4 rounded-full shadow-md transition-all duration-300 transform hover:scale-105" onClick={AdminLogin}>Admin</button>
            <div className={`flex flex-col min-h-screen items-center justify-between py-6`}>
                <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center max-w-md w-full">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-4 animate-bounce">🎉 Happy Birthday 🎉</h2>
                    {user.photo?(
                    <img src={user.photo} alt={user.name} className="w-36 h-36 rounded-full border-4 border-pink-400 shadow-lg mb-4"/>):(
                    <div className="w-36 h-36 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                        <span className="text-gray-400">No Photo</span>
                    </div>
                    )}
                    <h2 className="text-2xl font-semibold text-gray-700">{user.name || "Dear Friend"}</h2>
                    <h3 className="text-pink-500 font-medium mt-2 mb-4">❤ Wishing You Joy ❤</h3>
                    <p className="text-center text-gray-600 leading-relaxed mb-6">
                    Hope your special day brings you all the happiness your heart can hold. May this year be filled with love, laughter, and memorable moments!
                    </p>
                    <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105">
                    Share
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Home;