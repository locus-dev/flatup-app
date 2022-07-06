import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UsuarioService from '../../services/UsuarioService';
import '../Usuario/css/Usuario.css';
import Usuario from './Usuario';


const ListUsuario = () => {
    const navigate = useNavigate();

    const [carregando, setCarregando] = useState(true);
    const [usuarios, setUsuarios] = useState([]);

    console.log(usuarios)
    useEffect(() => {
        const fetchData = async () => {
            setCarregando(true);
            try {
                const response = await UsuarioService.listarUsuarios();
                setUsuarios(response.data);

            } catch (error) {
                console.log(error);
            }
            setCarregando(false);
        };
        fetchData();
    }, []);

    const deleteUsuario = (e, id) => {
        e.preventDefault();
        UsuarioService.deleteUsuario(id).then((res) => {
            if (usuarios) {
                setUsuarios((prevElement) => {
                    return prevElement.filter((usuario) => usuario.id !== id);
                });
            }
        });
    };

    return (
        <>
            <div className='container mx-auto my-6 listaUsuario'>
                <div className='container'>

                    <button
                        onClick={() => navigate("/addUsuario")}
                        className='ronded bg-slate-600 text-white px-6 py-2 font-semibold m-3'>
                        Adicionar Usuário
                    </button>

                    <a
                        _target="_blank"
                        href='http://localhost:8081/usuario/pdf'
                        className='ronded bg-green-500 text-white px-8 py-2 font-semibold'
                    >
                        Gerar PDF
                    </a>

                </div>

                <div className='flex shadow border-b'>
                    <table className='min-w-full'>
                        <thead className="bg-gray-50">
                            <tr>
                                <th className='text-left font-medium text-gray-500 py-3 px-6'>Email:</th>
                                <th className='text-left font-medium text-gray-500 py-3 px-6'>Senha:</th>

                                <th className='text-right font-medium text-gray-500 py-3 px-6'>Ações</th>
                            </tr>
                        </thead>
                        {!carregando && (
                            <tbody className='bg-white'>
                                {usuarios.map((usuario) => (
                                    <Usuario
                                        usuario={usuario}
                                        deleteUsuario={deleteUsuario}
                                        key={usuario.id}></Usuario>
                                ))}
                            </tbody>
                        )}
                    </table>
                </div>

            </div>
          
        </>
    )
}

export default ListUsuario;