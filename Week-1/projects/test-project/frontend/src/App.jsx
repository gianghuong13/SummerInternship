import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Buoi1Ping from './pages/Buoi1Ping';
import Buoi2Layout from './pages/Buoi2Layout'; 
import './App.css'

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/buoi1" element={<Buoi1Ping/>} />
          <Route path="/buoi2" element={<Buoi2Layout/>} />
        </Routes>
      </BrowserRouter>
    );
}

export default App
