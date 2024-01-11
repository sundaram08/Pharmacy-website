import React from "react";

const MedicineDetails = ({ medicine, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white w-full max-w-md p-4 rounded-md">
      <span className="text-gray-700 cursor-pointer text-xl" onClick={onClose}>
            &times;
    </span>


        <h2 className="text-2xl font-semibold mb-4">{medicine.name}</h2>
        <p className="text-gray-700 mb-2">Formula: {medicine.formula}</p>
        <p className="text-gray-700 mb-2">Price: {medicine.price.toFixed(2)}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default MedicineDetails;

