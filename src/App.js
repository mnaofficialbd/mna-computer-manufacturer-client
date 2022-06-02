import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';
import MyPortfolio from './Pages/About/MyPortfolio';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Blogs from './Pages/Blogs/Blogs';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddAReview from './Pages/Dashboard/AddAReview';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AddAProduct from './Pages/Dashboard/AddAProduct';
import RequireAuth from './Pages/Login/RequireAuth';
import MakeAdminPanel from './Pages/Dashboard/MakeAdminPanel';

function App() {
  return (
    <div className='text-xl'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='purchase' element={<RequireAuth><Purchase /></RequireAuth>} />

          <Route path='dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} >
            <Route index element={<MyProfile/>} />
            <Route path='myOrders' element={<MyOrders/>} />
            <Route path='addReview' element={<AddAReview/>} />
            <Route path='manageAllOrders' element={<ManageAllOrders/>} />
            <Route path='addProduct' element={<AddAProduct/>} />
            <Route path='makeAdminPanel' element={<MakeAdminPanel/>} />
            <Route path='manageProducts' element={<ManageProducts/>} />
          </Route>
          <Route path='myPortfolio' element={<MyPortfolio />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='blogs' element={<Blogs />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
        <ToastContainer />
    </div>
  );
}

export default App;