import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import Medicine from '../Medicines/Medicine'
const sampleMedicine = {
  name: 'Sample Medicine',
  image: 'https://example.com/sample-image.png',
  price: {
    final_price: 90.0,
  },
};
function Home() {
  return (
    <div className='mt-24'>
      <div className="bg-gray-100 m-0">
        <header className="bg-white shadow-lg"  >
          <div className="container mx-auto flex items-center justify-between p-2">
            <div>
                <h3 className="text-xl font-semibold text-gray-800">Welcome to your Medicine Spot</h3>
                <p className="text-gray-600 ">Experience 10% discount in all products*</p>
            </div>
            <div className="flex items-center flex-grow">
              <Search />
            </div>
          </div>
        </header>
        <div className='flex flex-wrap'>
          <section className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-1 gap-5 ">
              {/* Add featured content, such as images, promotions, etc. */}
              <div className="bg-red-400 p-2 shadow-md hover:bg-blue-500">
                <h2 className="text-l font-semibold mb-2">Healthcare</h2>
              </div>
              <div className="bg-red-400 p-2 shadow-md  hover:bg-blue-500 ">
                <h2 className="text-l font-semibold mb-2">Diabetics</h2>
              </div>
              <div className="bg-red-400 p-2 shadow-md  hover:bg-blue-500">
                <h2 className="text-l font-semibold mb-2">Digestion</h2>
              </div>
              <div className="bg-red-400 p-2 shadow-md  hover:bg-blue-500">
                <h2 className="text-l font-semibold mb-2">Covid</h2>
              </div>
              <div className="bg-red-400 p-2 shadow-md  hover:bg-blue-500">
                <h2 className="textl font-semibold mb-2">Orthopaedics</h2>
              </div>
              <div className="bg-red-400 p-2 shadow-md  hover:bg-blue-500">
                <h2 className="text-l font-semibold mb-2">Herbals</h2>
              </div>
            </div> 
          </section>
        </div> 
      </div>
    </div>
  )
}

export default Home
