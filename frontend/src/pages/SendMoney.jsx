import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState("");
  
  const handleTransfer = async () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/account/transfer",
        { to: id, amount: Number(amount) },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Transfer Successful");
    } catch (error) {
      alert("Transfer Failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="max-w-md w-full bg-gray-800 shadow-2xl rounded-2xl overflow-hidden text-white">
        <div className="p-6 text-center">
          <h2 className="text-3xl font-bold">Send Money</h2>
        </div>
        <div className="px-6 pb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-3xl text-white font-bold shadow-lg">
              {name ? name[0].toUpperCase() : "?"}
            </div>
            <h3 className="text-2xl font-semibold">{name}</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 font-medium mb-2" htmlFor="amount">
                Amount (in Rs)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white"
                id="amount"
                placeholder="Enter amount"
                min="1"
              />
            </div>
            <button
              onClick={handleTransfer}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
