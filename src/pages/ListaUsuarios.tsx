import { useEffect, useState } from 'react';
import axios from 'axios';

interface Usuario {
  id: number;
  nome: string;
  email: string;
}

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    axios.get<Usuario[]>('http://localhost:5000/usuarios')
      .then(response => setUsuarios(response.data))
      .catch(error => console.error('Erro ao buscar usuários', error));
  }, []);

  const excluirUsuario = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/usuarios/${id}`);
      setUsuarios(prevUsuarios => prevUsuarios.filter(usuario => usuario.id !== id));
    } catch (error) {
      console.error('Erro ao excluir usuário', error);
    }
  };

  const editarUsuario = (id: number) => {
    console.log(`Editar usuário ${id}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lista de Usuários</h2>
      <ul className="space-y-4">
        {usuarios.map(usuario => (
          <li key={usuario.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
            <span>{usuario.nome} - {usuario.email}</span>
            <div className="space-x-2">
              <button
                onClick={() => excluirUsuario(usuario.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Excluir
              </button>
              <button
                onClick={() => editarUsuario(usuario.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Editar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaUsuarios;
