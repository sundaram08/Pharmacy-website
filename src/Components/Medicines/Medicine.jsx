import React from 'react'

function Medicine() {
  return (
    <div>
      <div className=" w-4/4  bg-white rounded-md overflow-hidden shadow-md">
      
        <div class="bg-gray-300 h-40 flex items-center justify-center">
          <img src="https://drbest.in/wp-content/uploads/2019/06/Ceknac-plus.jpg" alt="" />
        </div>

        <div class="p-4">
          <h2 class="text-xl font-semibold text-gray-800 mb-2">Paracetamol</h2>
          <p class="text-gray-700 mb-2">Formula: </p>
          <p class="text-green-700 font-bold">Price: $5.99</p>
          
        
          <div class="mt-4">
            <span class="inline-block px-2 py-1 text-sm font-semibold bg-green-200 text-green-800 rounded-full">
              Available
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Medicine
