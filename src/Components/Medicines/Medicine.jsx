import React, { useEffect } from 'react';
import medicinesData from '/Users/sundaramdwivedi/Desktop/React/reactroute/src/medicine.json';

function Medicine() {
  const [medicines, setMedicines] = React.useState([]);

  useEffect(() => {
    setMedicines(medicinesData);
  }, []);

  return (
    
    <div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-1 gap-5'>
    {medicines.map((medicine) => (
      <div className=" bg-white rounded-md overflow-hidden shadow-md" key={medicine.name}>
        
        <div className="bg-gray-300 h-40 flex items-center justify-center">
          <img src={medicine.img} alt="" />
        </div>
  
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{medicine.name}</h2>
          <p className="text-gray-700 mb-2">{medicine.formula}</p>
          <p className="text-green-700 font-bold">{medicine.price.toFixed(2)}</p>
            
          <div className="mt-4">
            <span className="inline-block px-2 py-1 text-sm font-semibold bg-green-200 text-green-800 rounded-full">
              {medicine.availability ? 'Available' : 'Not Available'}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
}

export default Medicine;
