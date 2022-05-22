import './App.css';
import Header from './components/shared/Header/Header';
import Home from './components/pages/Home/Home';
import Dashboard from './components/pages/Dashboard/Dashboard';
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
          </RequireAuth>}></Route>
        <Route path='/purchase' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>}></Route>
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