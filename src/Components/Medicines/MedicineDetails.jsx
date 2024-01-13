import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCartItems } from "../../features/medicineSlice";
import { useNavigate } from "react-router-dom";


const MedicineDetails = ({ medicine, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Add to Cart");
  const handleClick = (medicine) => {
    dispatch(setCartItems(medicine));
    setButtonText("Go to Cart");
  };
  const handleGoToCart = () => {
    navigate("/cart");
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white w-full max-w-md p-6 rounded-md shadow-lg">
        <div className="flex justify-end">
          <span
            className="text-gray-700 cursor-pointer text-2xl"
            onClick={onClose}
          >
            &times;
          </span>
        </div>
        <div className="flex justify-center mb-4">
          <img
            src={medicine.img}
            alt={medicine.name}
            className="max-h-48 object-contain"
          />
        </div>
        <h2 className="text-3xl font-semibold mb-2">{medicine.name}</h2>
        <p className="text-gray-700 mb-4">Formula: {medicine.formula}</p>
        <p className="text-gray-700 mb-4">Price: ${medicine.price.toFixed(2)}</p>
        <button onClick={() => {
            if (buttonText === "Add to Cart") {
              handleClick(medicine);
            } else {
              handleGoToCart();
            }
          }}className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default MedicineDetails;

