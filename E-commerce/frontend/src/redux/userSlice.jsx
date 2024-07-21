import { createSlice } from "@reduxjs/toolkit";

const initState = {
  user: {},
  token:""
};

const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    storeUser: (state, action) => {
      state.user = action.payload.user;
      state.token=action.payload.token;
    }
  }
});

export const { storeUser } = userSlice.actions;
export default userSlice.reducer;
