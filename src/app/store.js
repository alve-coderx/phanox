import { configureStore } from '@reduxjs/toolkit';
import adminSlice from '../features/admin/adminSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import {customReducer} from '../features/admin/customReducer';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})


export const store = configureStore({
  reducer: {
    product: adminSlice,
    customProduct : customReducer
  },
  middleware: customizedMiddleware
});
