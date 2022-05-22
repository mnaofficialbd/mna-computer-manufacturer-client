import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';
import MyPortfolio from './Pages/About/MyPortfolio';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/purchase' element={<Purchase />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/myPortfolio' element={<MyPortfolio />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blogs' element={<Blogs />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;