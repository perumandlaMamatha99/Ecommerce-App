import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0

}
const cartSlice = createSlice({
    name: "cart1",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuatinty += 1;
                toast.info(`increased  ${state.cartItems[itemIndex].name} quantity`, {
                    position: "bottom-left"
                })
            }
            else {
                const tempProduct = { ...action.payload, cartQuatinty: 1 }
                console.log(tempProduct);
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.name}  added to cart`, {
                    position: "bottom-left"
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

        },
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error(`${action.payload.name}  removed from  cart`, {
                position: "bottom-left"
            })
        },
        decreaseCartQuantity(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (state.cartItems[itemIndex].cartQuatinty > 1) {
                state.cartItems[itemIndex].cartQuatinty -= 1;
                toast.info(`${action.payload.name}  quantity  reduced `, {
                    position: "bottom-left"
                })
            }
            else if (state.cartItems[itemIndex].cartQuatinty == 1) {
                const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
                state.cartItems = nextCartItems;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

        },
        clearCart(state, action) {
            state.cartItems = [];
            toast.info(`Cart Cleared`, {
                position: "bottom-left"
            })
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
              (cartTotal, cartItem) => {
                const { price, cartQuatinty } = cartItem;
                const itemTotal = price * cartQuatinty;
      
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuatinty;
      
                return cartTotal;
              },
              {
                total: 0,
                quantity: 0,
              }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
          },
    }
})
export const { addToCart, removeFromCart, decreaseCartQuantity,clearCart, getTotals } = cartSlice.actions;
export default cartSlice.reducer;