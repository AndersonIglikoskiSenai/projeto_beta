import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTimes, FaTrash, FaSave } from "react-icons/fa";

interface Usuario {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
}

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [usuarioEditando, setUsuarioEditando] = useState<Usuario | null>(null);

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

  const iniciarEdicao = (usuario: Usuario) => {
    setUsuarioEditando(usuario);
  };

  const salvarEdicao = async () => {
    if (usuarioEditando) {
      try {
        await axios.put(`http://localhost:5000/usuarios/${usuarioEditando.id}`, usuarioEditando);
        setUsuarios(prevUsuarios =>
          prevUsuarios.map(usuario =>
            usuario.id === usuarioEditando.id ? usuarioEditando : usuario
          )
        );
        setUsuarioEditando(null); // Fecha o formulário de edição
      } catch (error) {
        console.error('Erro ao editar usuário', error);
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lista de Usuários</h2>
      <ul className="space-y-4">
        {usuarios.map(usuario => (
          <li key={usuario.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
            <span> <p>Nome: {usuario.nome} </p> <p>Sobrenome: {usuario.sobrenome} </p> <p>E-mail {usuario.email} </p> <p>Telefone {usuario.telefone}</p></span>
            <div className="space-x-2">
              <button
                onClick={() => excluirUsuario(usuario.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >  <FaTrash className="text-red-500" />
                
              </button>
              <button
                onClick={() => iniciarEdicao(usuario)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
              <FaEdit className="text-green-500" />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {usuarioEditando && (
        <div className="mt-6 p-4 bg-gray-200 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Editar Usuário</h3>
          <div className="space-y-4">
            <input
              type="text"
              value={usuarioEditando.nome}
              onChange={(e) => setUsuarioEditando({ ...usuarioEditando, nome: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="Nome"
            />

            <input
              type="text"
              value={usuarioEditando.sobrenome}
              onChange={(e) => setUsuarioEditando({ ...usuarioEditando, nome: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="Sobrenome"
            />
            <input
              type="email"
              value={usuarioEditando.email}
              onChange={(e) => setUsuarioEditando({ ...usuarioEditando, email: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="Email"
            />

              <input
              type="text"
              value={usuarioEditando.telefone}
              onChange={(e) => setUsuarioEditando({ ...usuarioEditando, nome: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="Telefone"
            />
            
            <div className="space-x-2">
              <button
                onClick={salvarEdicao}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Salvar
              </button>
              <button
                onClick={() => setUsuarioEditando(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaUsuarios;