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
    <div>
      <div className="bg-gray-100">
        <header className="bg-white shadow-lg">
          <div className="container mx-auto flex items-center justify-between p-4">
            <div>
                <h1 className="text-4xl font-semibold text-gray-800">Welcome to your Medicine Spot</h1>
                <p className="text-gray-600 mt-2">Experience 10% discount in all products*</p>
            </div>
            <div className="flex items-center flex-grow">
              <Search />
            </div>
          </div>
        </header>

      <section className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add featured content, such as images, promotions, etc. */}
          <div className="bg-white p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Healthcare Products</h2>
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add featured content, such as images, promotions, etc. */}
          <div className="bg-white p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Diabetic</h2>
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add featured content, such as images, promotions, etc. */}
          <div className="bg-white p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Digestion</h2>
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add featured content, such as images, promotions, etc. */}
          <div className="bg-white p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Covid Essentials</h2>
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add featured content, such as images, promotions, etc. */}
          <div className="bg-white p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Orthopaedics</h2>
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add featured content, such as images, promotions, etc. */}
          <div className="bg-white p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Herbals & Ayurvedics</h2>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Home
