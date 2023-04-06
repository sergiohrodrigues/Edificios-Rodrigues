import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EdificioProvider } from "./content/Edificio";
import Cadastrar from "./paginas/Cadastrar";
import CadastrarApartamento from "./paginas/CadastrarApartamento";
import CadastrarEdificio from "./paginas/CadastrarEdificio";
import Inicio from "./paginas/Inicio";
import Login from "./paginas/Login";
import Apartamentos from "./paginas/Apartamentos";
import Formulario from "./componentes/Formulario";
import PaginaPadrao from "./paginas/PaginaPadrao";
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import NotFound from './paginas/NotFound';
import PaginaEdificios from './paginas/PaginaEdificios';

function App() {
  return (
      <BrowserRouter>
        <EdificioProvider>
          <Header />
          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path="edificios" element={<PaginaEdificios />} />
              <Route path="edificio/:id" element={<Apartamentos />} />
              <Route path="apartamento/:id" element={<Formulario />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastrar" element={<Cadastrar />} />
              <Route path="/cadastrar/edificio" element={<CadastrarEdificio />} />
              <Route path="/cadastrar/apartamento" element={<CadastrarApartamento />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </EdificioProvider>
      </BrowserRouter>
  );
}

export default App;