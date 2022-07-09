import React ,{useEffect, useState} from 'react'
import '../Home/css/Home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Home ()  {

    const navigate = useNavigate();

    const[json, setJson] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8081/usuario/quantidade");
                setJson(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const navegarParaImovel = () => {
        navigate("/ListarImoveis")
    }
    const navegarParaUsuario = () => {
        navigate("/ListarUsuarios")
    }
    return (
        <div className='Home'>
            
            
            <div className="flex justify-center" id="cards">
                <div className="rounded-lg shadow-lg bg-white max-w-sm m-2 hover:shadow-blue-500 " id="cardPersonagem">
                    {/* <a href="#!">
                        <img className="rounded-t-lg" src="https://th.bing.com/th/id/OIP.ocP2uvz-I12ALwGTXMXItAHaEK?w=329&h=185&c=7&r=0&o=5&pid=1.7" alt="" />
                    </a> */}
                    <div className="p-6" onClick={navegarParaImovel}>
                        
                        <h5 className="text-gray-900  font-medium mb-2 text-3xl">Imóveis</h5>
                        <p className="text-gray-700 text-9xl mb-4">
                        {json[0]}
                        </p>

                    </div>
                </div>
                <div className="rounded-lg shadow-lg bg-white max-w-sm m-2 hover:shadow-blue-500" id="cardFilme">
                    {/* <a href="#!">
                        <img className="rounded-t-lg" src="https://th.bing.com/th/id/OIP.5nSdNOKMXD4x7qd_fG6TlQHaFD?w=260&h=180&c=7&r=0&o=5&pid=1.7" />
                    </a> */}
                    <div className="p-6" onClick={navegarParaUsuario}>
                        <h5 className="text-gray-900  font-medium mb-2 text-4xl">Usuários</h5>
                        <p className="text-gray-700 text-9xl mb-4">
                        {json[1]}
                        </p>

                    </div>
                </div>
                <div className="rounded-lg shadow-lg bg-white max-w-sm m-2 hover:shadow-blue-500" id="cardCatalogo">
                    {/* <a href="#!">
                        <img className="rounded-t-lg" src="https://th.bing.com/th/id/R.0815ae0e4a01849a3548bb904ca5cd95?rik=e0oB99YrRtz2xA&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                    </a> */}
                    <div className="p-6">
                        <h5 className="text-gray-900  font-medium mb-2 text-4xl">Contratos</h5>
                        <p className="text-gray-700  mb-4 text-9xl">
                        {json[2]}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home