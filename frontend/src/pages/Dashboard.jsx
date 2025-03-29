import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export const Dashboard = () => {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Appbar />
            <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-800 shadow-lg rounded-2xl border border-gray-700">
                <Balance value={"10,000"} />
                <div className="mt-6">
                    <Users />
                </div>
            </div>
        </div>
    );
}
