import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from './pages/inicioPage.js'
import Login from './pages/loginPage.js';
import Register from './pages/registerPage.js';
import RecuperarClave from './pages/recuperarclavePage.js';
import NuevaClave from './pages/nuevaclavePage.js';
import Perfil from './pages/perfilPage.js';
import AgregarTitulo from './pages/agregartituloPage.js';
function App() {
  return (
    <Router>
      <Routes>
        <>
          <Route path="/" element={<Inicio />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/recuperar_clave" element={<RecuperarClave />}/>
          <Route path="/nueva_clave" element={<NuevaClave />}/>
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/agregar_titulo" element={<AgregarTitulo />} />
        </>
      </Routes>
    </Router>
  );
}

export default App;
