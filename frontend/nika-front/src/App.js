
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Componentes/Home/Home';
import New from './Componentes/New/New';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="new" element={<New />} />
      </Routes>
    </div>
  );
}

export default App;
