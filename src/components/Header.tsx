import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sistema de Cadastro CahsBlu</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-200">Início</Link>
          <Link to="/cadastro" className="hover:text-gray-200">Cadastro</Link>
          <Link to="/usuarios" className="hover:text-gray-200">Lista de Usuários</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;