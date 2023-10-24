import './App.css';
import './assets/styles/common/default.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Utitlity from './pages/Utility';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/utility' element={<Utitlity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
