import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
