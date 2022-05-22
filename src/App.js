import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
     <h2 className='text-red-700'>MNA Computer Manufacturer</h2>
     <Routes>
       <Route path='/' element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
