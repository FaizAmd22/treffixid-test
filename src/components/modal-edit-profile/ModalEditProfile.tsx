import React, { useEffect, useState } from "react";

interface ModalEditProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalEditProfile: React.FC<ModalEditProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
      const storedData = localStorage.getItem("userDetails");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setName(parsedData.name);
        setEmail(parsedData.email);
        setPhoneNumber(parsedData.phoneNumber);
      }
    }
  }, [isOpen]);

  const handleSave = () => {
    const storedData = localStorage.getItem("userDetails");
    let currentData = storedData ? JSON.parse(storedData) : {};

    const updatedData = {
      ...currentData,
      name,
      email,
      phoneNumber,
    };

    localStorage.setItem("userDetails", JSON.stringify(updatedData));

    onClose();
    window.location.reload();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      style={{ zIndex: 9999 }}
    >
      <div className="bg-white w-[90%] max-w-lg p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Driver</h2>

        {/* Input Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Phone Number
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEditProfile;
