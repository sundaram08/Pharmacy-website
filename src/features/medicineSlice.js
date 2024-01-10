// medicineSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  medicines: [],
  filteredMedicines: [],
  selectedCategory: 'all', // Added selectedCategory state
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
  },
});

export const { setMedicines, filterMedicines } = medicineSlice.actions;
export default medicineSlice.reducer;
