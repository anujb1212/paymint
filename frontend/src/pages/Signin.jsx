import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signin = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-900">
            <div className="w-96 bg-gray-800 shadow-2xl rounded-2xl p-8 border border-gray-700 text-white">
                <Heading label={"Sign in"} />
                <div className="text-center">
                    <SubHeading label={"Enter your credentials"} />
                </div>
                <div className="mt-6 space-y-6">
                    <InputBox placeholder="Eg: harkirat@gmail.com" label={"Email"} />
                    <InputBox placeholder="Eg: 123456" label={"Password"} />
                </div>
                <div className="pt-6">
                    <Button label={"Sign in"} />
                </div>
                <div className="mt-6">
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                </div>
            </div>
        </div>
    );
};
