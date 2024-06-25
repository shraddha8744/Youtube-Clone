import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isMenuOpen: false,
    isWatchpageOpen: false,
  },
  reducers: {
    changeSideBar: (state) => {
      state.isMenuOpen = !state.isMenuOpen; // Toggle the sideBar state
    },
    changeWatchpage: (state, action) => {
      state.isWatchpageOpen = action.payload;
    },
  },
});

export const { changeSideBar, changeWatchpage } = SidebarSlice.actions;
export default SidebarSlice.reducer;
