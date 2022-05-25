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
import AllUsers from './components/pages/Dashboard/AllUsers';

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
          <Route path='add-review' element={<AddReview />}></Route>
          <Route path='add-products' element={<AddProduct />}></Route>
          <Route path='manage-orders' element={<ManageOrders />}></Route>
          <Route path='manage-products' element={<ManageProducts />}></Route>
          <Route path='my-orders' element={<MyOrders />}></Route>
          <Route path='my-profile' element={<MyProfile />}></Route>
          <Route path='all-users' element={<AllUsers />}></Route>
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