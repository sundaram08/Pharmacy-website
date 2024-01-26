import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { filterMedicines,clearSelectedMedicine } from '../../features/medicineSlice'
import Search from '../Search/Search'
import Medicine from '../Medicines/Medicine'
import  MedicineDetails  from '../Medicines/MedicineDetails'
function Home() {
  const dispatch = useDispatch();
  const selectedMedicine = useSelector((state) => state.medicine.selectedMedicine);
  const selectedCategory = useSelector((state) => state.medicine.selectedCategory);

  const handleCloseDetails = () => {
    dispatch(clearSelectedMedicine());
  };

  const handleCategoryClick = (category) => {
    dispatch(filterMedicines(category));
    dispatch(clearSelectedMedicine());
  };

  return (
    <>
    <div className='p-1 mt-10'>
    {/* <Strip/> */}
      <div className="bg-gray-100 m-0">
        <div className='flex flex-wrap'>
          <section className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-1 gap-5 ">
              {/* Add featured content, such as images, promotions, etc. */}
              <div className={` p-1 mt-1 mb-1  border rounded-lg shadow-md flex items-center justify-center hover:bg-blue-500	
                border-${selectedCategory === 'all' ? 'blue-500' : 'red-400'}`}
                onClick={() => handleCategoryClick('all')} 
                >
                <h2 className="text-xs font-semibold mb-2">All</h2>
              </div>
              <div className={` p-1 mt-1 mb-1 border rounded-lg shadow-md flex items-center justify-center hover:bg-blue-500
               ${selectedCategory === 'healthcare' ? 'border-blue-500' : 'border-red-400'}`}
                onClick={() => handleCategoryClick('healthcare')} >
                <h2 className="text-xs font-semibold mb-2">Healthcare</h2>
              </div>
              <div className={`p-1 mt-1 mb-1 border rounded-lg  shadow-md  flex items-center justify-center hover:bg-blue-500
               border-${selectedCategory === 'diabetics' ? 'blue-500' : 'red-400'}`}
               onClick={() => handleCategoryClick('diabetics')} >
                <h2 className="text-xs font-semibold mb-2">Diabetics</h2>
              </div>
              <div className={`p-1 mt-1 mb-1 border rounded-lg shadow-md flex items-center justify-center hover:bg-blue-500
               border-${selectedCategory === 'digestion' ? 'blue-500' : 'red-400'}`}
              onClick={() => handleCategoryClick('digestion')}>
                <h2 className="text-xs font-semibold mb-2">Digestion</h2>
              </div>
              <div className={`p-1 mt-1 mb-1 border rounded-lg shadow-md  flex items-center justify-center hover:bg-blue-500
               border-${selectedCategory === 'covid' ? 'blue-500' : 'red-400'}`}
              onClick={() => handleCategoryClick('covid')}>
                <h2 className="text-xs font-semibold mb-2">Covid</h2>
              </div>
              <div className={`p-1 mt-1 mb-1 border rounded-lg shadow-md  flex items-center justify-center hover:bg-blue-500
               border-${selectedCategory === 'ortho' ? 'blue-500' : 'red-400'}`}
              onClick={() => handleCategoryClick('ortho')}>
                <h2 className="text-xs font-semibold mb-2">Ortho</h2>
              </div>
              <div className={`p-1 mt-1 mb-1 border rounded-lg shadow-md  flex items-center justify-center hover:bg-blue-500
               border-${selectedCategory === 'herbals' ? 'blue-500' : 'red-400'}`}
              onClick={() => handleCategoryClick('herbals')} >
                <h2 className="text-xs font-semibold mb-2">Herbals</h2>
              </div>
            </div> 
          </section>
        </div> 
        <header className="bg-white shadow-lg"  >
          <div className="container mx-auto flex items-center justify-between p-1">
            <div className="flex items-center flex-grow">
              <Search />
            </div>
          </div>
        </header>
        <div >
        <Medicine/>
        </div>
        {selectedMedicine && (
        <MedicineDetails medicine={selectedMedicine}  onClose={handleCloseDetails} />
      )}
      </div>
    </div>
    </>
  )
}

export default Home
