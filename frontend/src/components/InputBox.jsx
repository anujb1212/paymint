export function InputBox({ label, placeholder, onChange }) {
    return (
        <div className="w-full">
            <label className="text-sm font-medium text-gray-300 block mb-2">
                {label}
            </label>
            <input 
                onChange={onChange} 
                placeholder={placeholder} 
                className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
            />
        </div>
    );
  }