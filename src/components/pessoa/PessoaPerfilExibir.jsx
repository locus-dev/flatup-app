import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Button from '../elements/ButtonComponent';
import TextComponent from '../elements/TextComponent';
import FlatUpContext from '../context/FlatUpContext';
import { Navigate } from "react-router-dom";

const PessoaPerfilExibir = (props) => {
    
    const [userData, setUserData] = useContext(FlatUpContext);
    let [pessoa, setPessoa] = useState({});

    useEffect(() => {
            axios.get(`${process.env.REACT_APP_API_URL}/pessoa/encontrar/${1}`, {
                headers: {
                'Authorization': `Bearer ${userData.userToken}`,
            }
        }).then((result) =>{
            console.log(result)
            console.log(userData)
            setPessoa(result.data)
        }).catch((err) =>{
                console.log(err)
                console.log("Erro ao encontrar pessoa")
                Navigate('/concluir-cadastro')
        });
    }, []);

    const alterarRedirect = () => {
        console.log("redirecionar para tela do alterar")
    }

    const data = {
        'nome':pessoa.nome,
        'cnpj':pessoa.cnpj,
        'data_nascimento':pessoa.data_nascimento,
        'telefone':pessoa.telefone,
        'email': userData.userEmail
       }

    return (
        <form>
            <TextComponent inputName="Nome" content={data.nome} />
            <br/>
            <TextComponent inputName="Data de Nascimento" content={data.data_nascimento} />
            <br/>
            <TextComponent inputName="Telefone" content={data.telefone} />
            <br/>
            <TextComponent inputName="Email" content={data.email} />
            <br/>
            
            <Button buttonName="Alterar" func={alterarRedirect} />
         </form>
    )
}

export default PessoaPerfilExibir;