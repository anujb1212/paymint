import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user);
            });
    }, [filter]);

    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-900 shadow-md rounded-xl border border-gray-700 mt-8 text-white">
            <h2 className="font-semibold text-2xl mb-4 text-center">Users</h2>
            <input 
                onChange={(e) => setFilter(e.target.value)} 
                type="text" 
                placeholder="Search users..." 
                className="w-full px-4 py-2 border border-gray-600 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-white text-base mb-4"
            />
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-700 text-left">
                    <thead>
                        <tr className="bg-gray-800">
                            <th className="p-3 border border-gray-700">Name</th>
                            <th className="p-3 border border-gray-700">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id} className="border border-gray-700 hover:bg-gray-800">
                                <td className="p-3">{user.firstName} {user.lastName}</td>
                                <td className="p-3">
                                    <Button 
                                        onClick={() => navigate("/send?id=" + user._id + "&name=" + user.firstName)} 
                                        label="Send Money" 
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
