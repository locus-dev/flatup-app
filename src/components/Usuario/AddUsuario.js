import React, { useState } from 'react';
import UsuarioService from '../../services/UsuarioService';
import { useNavigate } from 'react-router-dom';

const AddUsuario = () => {
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        email: '',
        senha: ''
    })
    

    const handleChange = (e) => {
        const value = e.target.value;
        setUsuario({ ...usuario, [e.target.name]: value });
    }

    const salvarUsuario = (e) => {
        e.preventDefault();
        /* const usuarioMontado = {
            email: usuario.email,
            senha: usuario.senha
        } */

       
        UsuarioService.salvarUsuario(usuario).then((response) => {
            navigate('/ListarUsuarios')
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className='flex max-w-5xl mx-auto shadow border-b addUsuario'>
            <div className='px-10 py-10 columns-1'>
                <div className='font-thin text-2xl tracking-wider'>
                    <h1>Adicionar usuário </h1>
                </div>
                <div className='items-center justify-center h-20 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Email:</label>
                    <input
                        type="text"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        name='email'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>
                <div className='items-center justify-center h-20 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Senha:</label>
                    <input
                        type="password"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        name='senha'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>

                <div className='items-center justify-center h-14 w-full my-5 space-x-2 pt-6'>
                    <button onClick={salvarUsuario} className='rounded text-white font-semibold bg-green-400 hover:bg-green-600 py-2 px-2'>Salvar</button>
                    <button onClick={() => navigate("/ListarUsuarios")} data-bs-dismiss="modal" className='rounded text-white font-semibold bg-red-400 hover:bg-red-600 py-2 px-2'>Cancelar</button>
                </div>
            </div>
        </div>
    );

}

export default AddUsuario;