import React from 'react';
import { useSelector } from 'react-redux';

function NonEmptyCart() {
  const medicines = useSelector((state) => state.medicine.cartItems);

  return (
    <div className="mt-8">
      {medicines.map((medicine) => (
        <div key={medicine.id} className="flex items-center border-b-2 py-4">
          <img
            src={medicine.img} // Replace with the actual property that holds the image URL
            alt={medicine.name}
            className="w-16 h-16 object-cover rounded mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">{medicine.name}</h3>
            <p className="text-gray-600">{medicine.description}</p>
            <p className="text-blue-500">{medicine.price}</p>
            {/* Add more details or styling based on your requirements */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NonEmptyCart;

