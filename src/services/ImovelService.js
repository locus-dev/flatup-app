
import axios from 'axios'

const IMOVEL_API_BASE_URL = "http://localhost:8081/imovel";



class ImovelService{

    salvarImovel(imovel){
        //console.log(imovel)
        return axios.post(IMOVEL_API_BASE_URL + "/salvar", imovel)
    }

    listarImoveis(){
        return axios.get(IMOVEL_API_BASE_URL+ "/listar");
    }

    atualizarImovel(imovel, id){
        return axios.put(IMOVEL_API_BASE_URL+ "/editar/"+ id, imovel);
    }

    deleteImovel(id){
        return axios.delete(IMOVEL_API_BASE_URL+ "/remover/"+ id);
    }

    buscarImovelPeloId(id){
        return axios.get(IMOVEL_API_BASE_URL+ "/buscarPorId/" + id);
    }

    gerarPDF(){
        return axios.get(IMOVEL_API_BASE_URL+ "/pdf");
    }
}

export default new ImovelService();