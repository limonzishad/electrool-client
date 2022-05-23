import './App.css';
import Header from './components/shared/Header/Header';
import Home from './components/pages/Home/Home';
import Dashboard from './components/pages/Dashboard/Dashboard';
import AllProducts from './components/pages/Products/AllProducts';
import AddProduct from './components/pages/Dashboard/AddProduct';
import AddReview from './components/pages/Dashboard/AddReview';
import ManageOrders from './components/pages/Dashboard/ManageOrders';
import ManageProducts from './components/pages/Dashboard/ManageProducts';
import MyOrders from './components/pages/Dashboard/MyOrders';
import MyProfile from './components/pages/Dashboard/MyProfile';
import Purchase from './components/pages/Purchase/Purchase';
import Blogs from './components/pages/Blogs/Blogs';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import UnknownRoute from './components/pages/UnknownRoute/UnknownRoute';
import RequireAuth from './components/pages/RequireAuth/RequireAuth';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>}>
          <Route index element={<MyOrders />}></Route>
          <Route path='addreview' element={<AddReview />}></Route>
          <Route path='addproducts' element={<AddProduct />}></Route>
          <Route path='manageorders' element={<ManageOrders />}></Route>
          <Route path='manageproducts' element={<ManageProducts />}></Route>
          <Route path='myorders' element={<MyOrders />}></Route>
          <Route path='myprofile' element={<MyProfile />}></Route>
        </Route>

        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>}>
        </Route>

        <Route path='/products' element={<AllProducts />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<UnknownRoute />}></Route>
      </Routes>
    </Header>
  );
};

export default App;