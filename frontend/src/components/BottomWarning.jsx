import { Link } from "react-router-dom";

export function BottomWarning({ label, buttonText, to }) {
    return (
        <div className="py-3 text-sm flex justify-center items-center bg-gray-900 rounded-md shadow-md border border-gray-700 w-full max-w-sm">
            <span className="text-gray-300">{label}</span>
            <Link className="text-blue-400 font-semibold pl-1 hover:underline" to={to}>
                {buttonText}
            </Link>
        </div>
    );
}
