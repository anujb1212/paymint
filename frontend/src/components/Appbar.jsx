export const Appbar = () => {
    return (
        <div className="shadow-md h-16 flex justify-between items-center px-6 bg-gray-900 border-b border-gray-700">
            <div className="text-xl font-bold text-white">Payments App</div>
            <div className="flex items-center space-x-4">
                <div className="text-gray-300 text-lg font-medium">Hello! {} </div>
                <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center text-xl font-semibold text-white">
                    U
                </div>
            </div>
        </div>
    );
};
