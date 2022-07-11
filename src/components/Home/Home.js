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

    const navegarParaContratoLocacao = () => {
        navigate("/ListarContratosLocacao")
    }
    return (
        <div className='Home'>
            
            
            <div className="flex justify-center" id="cards">
                
                <div className="rounded-lg shadow-lg bg-white max-w-sm   m-2 w-40 hover:shadow-blue-500 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 " id="cardPersonagem">
                    <a href="#!">
                        <img className="rounded-t-lg" src="https://th.bing.com/th/id/OIP.TlByp_PMYU34qZG81SMQ6gHaEr?w=284&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                    </a>
                    <div className="p-6" onClick={navegarParaImovel}>
                        
                        <h5 className="text-gray-900  font-medium mb-2 text-3xl">Imóveis</h5>
                        <p className="text-gray-700 text-5xl mb-5 ">
                        {json[0]}
                        </p>

                    </div>
                </div>
                <div className="rounded-lg shadow-lg bg-white max-w-sm  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-40 m-2 hover:shadow-blue-500" id="cardFilme">
                    <a href="#!">
                        <img className="rounded-t-lg" src="https://th.bing.com/th/id/OIP.weWR_6fF7CUoI8ZWpqGBsAHaEO?w=291&h=180&c=7&r=0&o=5&pid=1.7" />
                    </a>
                    <div className="p-6" onClick={navegarParaUsuario}>
                        <h5 className="text-gray-900  font-medium mb-2 text-3xl">Usuários</h5>
                        <p className="text-gray-700 text-5xl mb-4">
                        {json[1]}
                        </p>

                    </div>
                </div>
                <div className="rounded-lg shadow-lg bg-white w-40 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300   max-w-sm m-2 hover:shadow-blue-500" id="cardCatalogo">
                    <a href="#!">
                        <img className="rounded-t-lg" src="https://th.bing.com/th/id/OIP.i0YK_eytBN9d3gS5fhPPKgHaE8?w=204&h=136&c=7&r=0&o=5&pid=1.7" alt="" />
                    </a>
                    <div className="p-6" onClick={navegarParaContratoLocacao}>
                        <h5 className="text-gray-900  font-medium mb-2 text-3xl">Contratos</h5>
                        <p className="text-gray-700  mb-4 text-5xl">
                        {json[2]}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home