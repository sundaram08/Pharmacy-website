import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  medicines: [],
  selectedCategory: 'all',
  selectedMedicine: null,
  searchedText: null,
  cartItems: []
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
    },
    searchMedicines: (state, action) => {
      const searchText = action.payload.toLowerCase();
    
      state.searchedText = searchText;
    },
    selectMedicine:(state,action)=>{
        state.selectedMedicine= action.payload;
    },
    clearSelectedMedicine:(state)=>{
      state.selectedMedicine= null;
    },
    setCartItems: (state, action) => {
      const newMedicine = action.payload;
      state.cartItems = [...state.cartItems, newMedicine];
    },
    
  },
});

export const { setMedicines,searchMedicines, filterMedicines,selectMedicine,clearSelectedMedicine,setCartItems } = medicineSlice.actions;
export default medicineSlice.reducer;
