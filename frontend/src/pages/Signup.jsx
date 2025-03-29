import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
            <div className="max-w-md w-full bg-gray-900 text-white shadow-2xl rounded-2xl overflow-hidden p-8 border border-gray-700">
                <Heading label={"Sign up"} />
                <div className="mt-2 mb-4 text-center" >
                    <SubHeading label={"Create an account"}  />
                </div>
                
                <div className="space-y-5">
                    <InputBox onChange={(e) => setFirstName(e.target.value)} placeholder="Eg: John" label={"First Name"} />
                    <InputBox onChange={(e) => setLastName(e.target.value)} placeholder="Eg: Doe" label={"Last Name"} />
                    <InputBox onChange={(e) => setUsername(e.target.value)} placeholder="Eg: harkirat@gmail.com" label={"Email"} />
                    <InputBox onChange={(e) => setPassword(e.target.value)} placeholder="Eg: 123456" label={"Password"} />
                </div>
                
                <div className="pt-6">
                    <Button 
                        onClick={async () => {
                            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                                username,
                                firstName,
                                lastName,
                                password
                            }, {
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            });
                            localStorage.setItem("token", response.data.token);
                            navigate("/dashboard");
                        }} 
                        label={"Sign up"} 
                    />
                </div>
                <div className="mt-6">
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
                </div>
            </div>
        </div>
    );
};
