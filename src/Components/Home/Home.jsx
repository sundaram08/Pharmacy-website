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
    <div className='p-1 mt-12'>
    {/* <Strip/> */}
      <div className="bg-gray-100 m-0">
        <div className='flex flex-wrap'>
          <section className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-1 gap-5 ">
              {/* Add featured content, such as images, promotions, etc. */}
              <div className={` p-1 mt-1 mb-1 rounded-lg shadow-md flex items-center justify-center hover:bg-blue-500
                bg-${selectedCategory === 'all' ? 'blue-500' : 'red-400'}`}
                onClick={() => handleCategoryClick('all')} 
                >
                <h2 className="text-l font-semibold mb-1">All</h2>
              </div>
              <div className={` p-1 mt-1 mb-1 rounded-lg shadow-md flex items-center justify-center hover:bg-blue-500
               bg-${selectedCategory === 'healthcare' ? 'blue-500' : 'red-400'}`}
                onClick={() => handleCategoryClick('healthcare')} >
                <h2 className="text-l font-semibold mb-2">Healthcare</h2>
              </div>
              <div className={`p-1 mt-1 mb-1 rounded-lg  shadow-md  flex items-center justify-center hover:bg-blue-500
               bg-${selectedCategory === 'diabetics' ? 'blue-500' : 'red-400'}`}
               onClick={() => handleCategoryClick('diabetics')} >
                <h2 className="text-l font-semibold mb-2">Diabetics</h2>
              </div>
              <div className={`p-1 mt-1 mb-1 rounded-lg shadow-md flex items-center justify-center hover:bg-blue-500
               bg-${selectedCategory === 'digestion' ? 'blue-500' : 'red-400'}`}
              onClick={() => handleCategoryClick('digestion')}>
                <h2 className="text-l font-semibold mb-2">Digestion</h2>
              </div>
              <div className={`p-1 mt-1 mb-1 rounded-lg shadow-md  flex items-center justify-center hover:bg-blue-500
               bg-${selectedCategory === 'covid' ? 'blue-500' : 'red-400'}`}
              onClick={() => handleCategoryClick('covid')}>
                <h2 className="text-l font-semibold mb-2">Covid</h2>
              </div>
              <div className={`p-1 mt-1 mb-1 rounded-lg shadow-md  flex items-center justify-center hover:bg-blue-500
               bg-${selectedCategory === 'ortho' ? 'blue-500' : 'red-400'}`}
              onClick={() => handleCategoryClick('ortho')}>
                <h2 className="textl font-semibold mb-2">Ortho</h2>
              </div>
              <div className={`p-1 mt-1 mb-1 rounded-lg shadow-md  flex items-center justify-center hover:bg-blue-500
               bg-${selectedCategory === 'herbals' ? 'blue-500' : 'red-400'}`}
              onClick={() => handleCategoryClick('herbals')} >
                <h2 className="text-l font-semibold mb-2">Herbals</h2>
              </div>
            </div> 
          </section>
        </div> 
        <header className="bg-white shadow-lg"  >
          <div className="container mx-auto flex items-center justify-between p-2">
            <div>
                {/* <h3 className="text-xl font-semibold text-gray-800">Welcome to your Medicine Spot</h3>
                <p className="text-gray-600 ">Experience 10% discount in all products*</p> */}
            </div>
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
