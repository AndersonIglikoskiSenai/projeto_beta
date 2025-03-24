import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastrousuario";
import ListaUsuarios from "./pages/ListaUsuarios";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/usuarios" element={<ListaUsuarios />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
