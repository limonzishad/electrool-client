import './App.css';
import Header from './components/shared/Header/Header';
import Home from './components/pages/Home/Home';
import Blogs from './components/pages/Blogs/Blogs';
import Login from './components/pages/Logins/Login/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </Header>
  );
}

export default App;