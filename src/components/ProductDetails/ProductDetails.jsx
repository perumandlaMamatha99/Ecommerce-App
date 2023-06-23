import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, userinfo } from '../../redux/authSlice'
function ProductDetails() {
  const user = useSelector(userinfo);
  const dispatch = useDispatch();
  const logoutEvent = (e) => {
    dispatch(logout());
  }
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div>
        <h3> Login Sucess Full {user.name}</h3>
      </div>
    </div>
  )
}
export default ProductDetails;
