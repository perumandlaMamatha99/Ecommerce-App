import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import './Cart.css';
import { addToCart, clearCart, decreaseCartQuantity, getTotals, removeFromCart} from '../../redux/cart';

function Cart() {
  const cart = useSelector(state => state.cartData);
  const dispatch=useDispatch();
   const removeCartItem=(cartItem)=>{
    dispatch(removeFromCart(cartItem))
   }
    const decreaseQuantity=(cartItem)=>{
      dispatch(decreaseCartQuantity(cartItem));
    }
    const increaseQuantity=(cartItem)=>{
      dispatch(addToCart(cartItem))
    }
    const clearCartItems=()=>{
      dispatch(clearCart())
    }
    useEffect(() => {
      dispatch(getTotals());
    }, [cart, dispatch]);
  
  return (
    <div className='cart-container'>
      <h2> ShoppingCart</h2>
      {cart.cartItems.length === 0 ? (<div className='cart-empty'>
        <p>your cart is currently Empty</p>
        <div className='shopping-cart'>
          <Link to="/">Start Shopping </Link>
        </div>
      </div>

      ) : (<div>
        <div className='titles'>
          <h3 className='product-title'>ProductTitle</h3>
          <h3 className='price'>Price</h3>
          <h3 className='quantity'>Quantity</h3>
          <h3 className='total'>Total</h3>
        </div>
        <div className='cart-items'>
          {cart.cartItems?.map(((cartItem, index) => (
            <div className='cart-item' key={cartItem.id}>
              <div className='cart-product'>
                <img src={cartItem.img} />
                <div>
                  <h3>{cartItem.name}</h3>
                  <p>{cartItem.text}</p>
                  <Button onClick={()=>removeCartItem(cartItem)}>Remove</Button>
                </div>
              </div>
              <div className='cart-product-price'>
                ${cartItem.price}
              </div>
              <div className='cart-product-quantity'>
                <button onClick={()=>decreaseQuantity(cartItem)}>-</button>
                <div className='count'>{cartItem.cartQuatinty}</div>
                <button onClick={()=>increaseQuantity(cartItem)}>+</button>
              </div>
              <div className='cart-product-total-price'>
                {cartItem.price * cartItem.cartQuatinty}
              </div>
            </div>
          )))}
        </div>
        <div className='cart-summary'>
          <button className='clear-btn' onClick={()=>clearCartItems()}>Clear cart</button>
          <div className='cart-checkout'>
            <div className='subtotal'>
              <span>Sub Total</span>
              <span className='amount'>{cart.cartTotalAmount}</span>
            </div>
            <p>Taxes are calculated at checkout</p>
            <button>Check out</button>
          </div>
        </div>
      </div>)}
    </div>
  )
}
export default Cart;
