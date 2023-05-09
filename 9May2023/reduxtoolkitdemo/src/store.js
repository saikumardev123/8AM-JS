import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './ProductSlice';
console.log("ProductSlice", ProductSlice);
const store = configureStore(
    {
        reducer: {
            products: ProductSlice
        }
    }
)
export default store;
