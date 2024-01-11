// medicineSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  medicines: [],
  filteredMedicines: [],
  selectedCategory: 'all', // Added selectedCategory state
  selectedMedicine: null,
  // searchedText: null
};

export const medicineSlice = createSlice({
  name: 'medicine',
  initialState,
  reducers: {
    setMedicines: (state, action) => {
      state.medicines = action.payload;
    },
    filterMedicines: (state, action) => {
      const category = action.payload;
      state.selectedCategory = category;
      state.filteredMedicines = state.medicines.filter(
        (medicine) => medicine.category === category
      );
    },
    searchMedicines: (state, action) => {
      const searchText = action.payload.toLowerCase(); // Convert search text to lowercase for case-insensitive comparison
    
      state.searchedText = searchText;
    
      state.filteredMedicines = state.medicines.filter((medicine) => {
        const nameMatch = medicine.name.toLowerCase().includes(searchText);
        const formulaMatch = medicine.formula.toLowerCase().includes(searchText);
        const priceMatch = medicine.price.toString().includes(searchText);
        const categoryMatch = medicine.category.toLowerCase().includes(searchText);
    
        // Return true if any of the fields match the search text
        return nameMatch || formulaMatch || priceMatch || categoryMatch;
      });
    },
    selectMedicine:(state,action)=>{
        state.selectedMedicine= action.payload;
    },
    clearSelectedMedicine:(state)=>{
      state.selectedMedicine= null;
    },
  },
});

export const { setMedicines,searchMedicines, filterMedicines,selectMedicine,clearSelectedMedicine } = medicineSlice.actions;
export default medicineSlice.reducer;
