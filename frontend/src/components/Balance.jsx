export const Balance = ({ value }) => {
    return (
        <div className="flex items-center justify-between bg-gray-900 shadow-md p-4 rounded-lg border border-gray-700 w-full max-w-sm">
            <div className="text-gray-300 text-lg font-medium">Your Balance</div>
            <div className="text-white text-xl font-bold">Rs {value}</div>
        </div>
    );
};
