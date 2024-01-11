import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMedicines,selectMedicine } from '../../features/medicineSlice';
import medicinesData from './medicine.json';

function Medicine() {
  const dispatch = useDispatch();
  const allMedicines = useSelector((state) => state.medicine.medicines);
  const selectedCategory = useSelector((state) => state.medicine.selectedCategory);
  const searchedText = useSelector((state) => state.medicine.searchedText);
  const handleMedicineClick = (medicine) => {
    dispatch(selectMedicine(medicine));
  };

  useEffect(() => {
    
    try {
      // medicinesData is an array of medicines from JSON file
      dispatch(setMedicines(medicinesData));
    } catch (error) {
      console.error('Error setting medicines:', error);
    }
  }, [dispatch]);

 

  // Filter medicines based on the selected category
  // const filteredMedicines = selectedCategory === 'all'
  //   ? allMedicines
  //   : allMedicines.filter(medicine => medicine.category === selectedCategory);

  const filteredMedicines = (searchedText && searchedText.trim() !== '')
  ? (selectedCategory === 'all'
    ? allMedicines.filter(medicine => 
        medicine.name.toLowerCase().includes(searchedText) ||
        medicine.formula.toLowerCase().includes(searchedText) ||
        medicine.price.toString().includes(searchedText) ||
        medicine.category.toLowerCase().includes(searchedText)
      )
    : allMedicines.filter(medicine => 
        medicine.category === selectedCategory &&
        (medicine.name.toLowerCase().includes(searchedText) ||
        medicine.formula.toLowerCase().includes(searchedText) ||
        medicine.price.toString().includes(searchedText) ||
        medicine.category.toLowerCase().includes(searchedText))
      )
  )
  : (selectedCategory === 'all' ? allMedicines : allMedicines.filter(medicine => medicine.category === selectedCategory));
// ...


  return (
    <div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-1 gap-5'>
      {filteredMedicines.map((medicine) => (
        <div className="bg-white rounded-md overflow-hidden shadow-md" key={medicine.name} onClick={() => handleMedicineClick(medicine)}>
          <div className="bg-gray-300 h-40 flex items-center justify-center">
            <img src={medicine.img} alt="" />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{medicine.name}</h2>
            <p className="text-gray-700 mb-2">{medicine.formula}</p>
            <p className="text-green-700 font-bold">{medicine.price.toFixed(2)}</p>
            <div className="mt-4">
              <span className={`inline-block px-2 py-1 text-sm font-semibold ${medicine.availability ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'} rounded-full`}>
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
