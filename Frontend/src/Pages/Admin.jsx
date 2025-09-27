import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admin(){
  const navigate=useNavigate();
  const [admin,setAdmin]=useState(null);
  const [data,setData]=useState([]);
  const [user,setUser]=useState({name: "",gender: "",phoneNumber: "",email: "",relation: "",birthdayDate: "",});
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const sessionres = await axios.get("http://localhost:8080/Birthday/admin",{ withCredentials: true });
        if(!sessionres.data){
            navigate("/Birthday/AdminLogin");
            return;
        }
        setAdmin(sessionres.data);
        setAdmin(sessionres.data.admin);
        const birthday=await axios.get("http://localhost:8080/Birthday/admin/user",{withCredentials: true});
        setData(birthday.data);
      }catch(err){
        console.error("Error fetching data", err);
        navigate("/Birthday/AdminLogin");
      }
    };
    fetchData();
    },[navigate]);
    const addUser=async()=>{
        try{
            await axios.post(
                "http://localhost:8080/Birthday/admin/adduser",
                {...user },
                {withCredentials:true}
            );
            alert("🎉 New User Added");
            setUser({name: "",gender: "",phoneNumber: "",email: "",relation: "",birthdayDate: ""});
        }catch(err){
            console.error("User Not Added", err);
        }
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-white p-6">
            <div className="max-w-6xl mx-auto space-y-8">
                <header className="flex justify-between items-center bg-white shadow-lg p-6 rounded-2xl">
                <h1 className="text-2xl font-bold text-gray-800">👑 Admin Dashboard</h1>
                {admin && <span className="text-gray-600">Welcome, {admin}</span>}
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl shadow-xl">
                        <h2 className="text-xl font-semibold mb-4">🎂 Today's Birthdays</h2>
                        {data.length === 0 ? (
                            <p className="text-gray-500">No birthdays today.</p>
                        ):(
                            <ul className="space-y-3">
                                {data.map((x) => (
                                <li key={x._id} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl shadow-sm">
                                    <span className="font-medium">{x.name}</span>
                                    <span className="text-gray-400 text-sm">{x.relation}</span>
                                </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-xl">
                        <h2 className="text-xl font-semibold mb-4">➕ Add User</h2>
                        <div className="flex flex-col gap-4">
                            <input type="text" placeholder="Name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500"/>
                            <input type="text" placeholder="Gender" value={user.gender} onChange={(e) => setUser({ ...user, gender: e.target.value })} className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500"/>
                            <input type="text" placeholder="Phone Number" value={user.phoneNumber} onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })} className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500"/>
                            <input type="email" placeholder="Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500"/>
                            <input type="text" placeholder="Relation" value={user.relation} onChange={(e) => setUser({ ...user, relation: e.target.value })} className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500"/>
                            <input type="date" value={user.birthdayDate} onChange={(e) => setUser({ ...user, birthdayDate: e.target.value })} className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500"/>
                            <button onClick={addUser} className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">Add User</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
