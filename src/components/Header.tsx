import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="hover:text-Blue-200">CahsBlu</Link>
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