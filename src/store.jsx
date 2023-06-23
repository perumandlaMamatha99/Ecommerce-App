import { configureStore } from '@reduxjs/toolkit';
import cartData, { getTotals } from './redux/cart';
import cartCount from './redux/cartcount';
import authReducer from "./redux/authSlice";


const store = configureStore({
    reducer: {
        user: authReducer.reducer,
        cartData: cartData,
        cartCount: cartCount
    }
})
store.dispatch(getTotals);
export default store;