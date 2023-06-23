import logo from './logo.svg';
import './App.css';
import "react-toastify/dist/ReactToastify.min.css";
import Main from './components/Main/Main';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';
import Profile from './components/Profile/Profile';
import Cart from './components/Cart/Cart';
import { userinfo } from './redux/authSlice';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductDetailPage from './components/ProductDetailsPAge/ProductDetailPage';
import { ToastContainer } from 'react-toastify';
function App() {
  const user=useSelector(userinfo);
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Navbar ></Navbar>
        <Routes>
         <Route path="/" element={<Main />}></Route>
         <Route path="/cart" element={<Cart />}></Route>
         <Route path="/pdp" element={<ProductDetailPage />}></Route>
         <Route path="/profile" element={<Profile />}></Route>
         <Route path="/data/:id" element={<Cart />}></Route>
         <Route
            path="/login"
            element={user ? <ProductDetails />: <Login></Login>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
