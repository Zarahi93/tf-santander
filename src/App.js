import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
