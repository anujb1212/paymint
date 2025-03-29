export function Button({ label, onClick }) {
    return (
        <button 
            onClick={onClick} 
            type="button" 
            className="w-full text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-6 py-3 shadow-md transition-all"
        >
            {label}
        </button>
    );
}
