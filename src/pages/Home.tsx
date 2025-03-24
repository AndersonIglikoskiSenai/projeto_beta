import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">CashBlu - Seja Bem Vindo</h1>
      <p className="text-lg text-gray-700 mb-6">Gerencie usuários com facilidade.</p>
      
      <div className="flex space-x-4">
        <Link to="/cadastro" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition">
          Cadastrar Usuário
        </Link>

        <Link to="/usuarios"className="bg-gray-500 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-600 transition">
          Lista de Usuários
        </Link>
      </div>
    </div>
  );
};

export default Home;
