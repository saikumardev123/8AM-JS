import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice(
    {
        name: 'PRODUCTS',
        initialState: {
            products: []
        },
        reducers: {
            addProduct: function (state, action) {
                var products = [];
                console.log("Action", action);
                action.payload = products;
                console.log("addProduct called")
                // Axios
                // Make API Call to get the products and update them to the state.
                products.push({
                    pid: 101,
                    name: "product 1",
                    price: 200
                });
                state.products = products;
                return state;
            }
        }
    }
)
export const { addProduct } = ProductSlice.actions
export default ProductSlice.reducer;















