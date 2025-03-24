"use client";

import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

interface FormData {
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  senha: string;
  confirmacaoSenha: string;
}

const schema = Yup.object().shape({
  nome: Yup.string().required('Nome é obrigatório'),
  sobrenome: Yup.string().required('Sobrenome é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  telefone: Yup.string().required('Telefone é obrigatório'),
  senha: Yup.string().min(3, 'Senha deve ter no mínimo 3 caracteres').required('Senha é obrigatória'),
  confirmacaoSenha: Yup.string()
    .oneOf([Yup.ref('senha')], 'As senhas devem ser iguais')
    .required('Confirmação de senha é obrigatória'),
});

const FormularioCadastro = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post('http://localhost:5000/usuarios', data);
      console.log('Dados enviados com sucesso:', response.data);
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      alert('Ocorreu um erro ao cadastrar o usuário.');
    }
  };
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Cadastro de Usuário</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <input
            {...register('nome')}
            placeholder="Nome"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
        </div>

        <div>
          <input
            {...register('sobrenome')}
            placeholder="Sobrenome"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.sobrenome && <p className="text-red-500 text-sm">{errors.sobrenome.message}</p>}
        </div>


        <div>
          <input
            {...register('email')}
            placeholder="E-mail"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>


        <div>
          <input
            {...register('telefone')}
            placeholder="Telefone"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.telefone && <p className="text-red-500 text-sm">{errors.telefone.message}</p>}
        </div>


        <div>
          <input
            {...register('senha')}
            type="password"
            placeholder="Senha"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.senha && <p className="text-red-500 text-sm">{errors.senha.message}</p>}
        </div>


        <div>
          <input
            {...register('confirmacaoSenha')}
            type="password"
            placeholder="Confirmar Senha"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirmacaoSenha && <p className="text-red-500 text-sm">{errors.confirmacaoSenha.message}</p>}
        </div>


        <div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioCadastro;
