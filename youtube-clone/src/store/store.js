import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from '../Slices/sidebarSlice'
import videoSlice from '../Slices/videoSlice'
import searchSlice from '../Slices/searchSlice'

export const store = configureStore({
  reducer: {
    sideBar:sidebarSlice,
    videos:videoSlice,
    searchSlice:searchSlice
  },
})