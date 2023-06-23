import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { logout, userinfo } from "../../redux/authSlice";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
function Navbar() {
  const user = useSelector(userinfo);
  const { cartTotalQuantity } = useSelector((state) => state.cartData);
  console.log(cartTotalQuantity);
  console.log(user);
  const dispatch = useDispatch();
  const logoutEvent = (e) => {
    dispatch(logout());
  }
  return (
    <div className="navbar">
      <Link to="/" title='Home'><div>
        < StorefrontOutlinedIcon style={{ fontSize: "40" }} />
      </div></Link>
      <div className='login-cart'>
        <Link to="/cart" title="Cart"><div className='cart'> <ShoppingCartOutlinedIcon style={{ fontSize: "40", marginTop: "12" }} />{cartTotalQuantity}</div></Link>

        <Tooltip title="logout">
          <IconButton>
            <Link to="/login"><div className='cart'> <PersonIcon style={{ fontSize: "40" }} />{user.logedIn ? (<button onClick={logoutEvent}>Logout</button>) : ("")}</div></Link>
          </IconButton>
        </Tooltip>
      </div>
    </div>
  )
}
export default Navbar;
