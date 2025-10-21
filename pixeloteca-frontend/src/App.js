import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from './pages/inicioPage.js'
import Register from './pages/registerPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <>
          <Route path="/" element={<Inicio />}/>
          <Route path="/register" element={<Register/>}/>
        </>
      </Routes>
    </Router>
  );
}

export default App;
