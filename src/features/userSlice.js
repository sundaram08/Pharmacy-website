import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status : false,
    userData: null
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
});

export const {login,logout} = userSlice.actions;
export default userSlice.reducer;