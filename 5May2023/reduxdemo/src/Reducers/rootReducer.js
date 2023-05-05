import { combineReducers } from 'redux';
import ProductsReducer from './products'
const rootReducer = combineReducers(
    {
        products: ProductsReducer

    }
)
export default rootReducer;