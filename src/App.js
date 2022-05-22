import './App.css';
import Header from './components/shared/Header/Header';
import Home from './components/pages/Home/Home';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Blogs from './components/pages/Blogs/Blogs';
import Login from './components/pages/Logins/Login/Login';
import Register from './components/pages/Logins/Register/Register';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </Header>
  );
}

export default App;