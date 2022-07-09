
import axios from 'axios'

const CONTRATOLOCACAO_API_BASE_URL = "http://localhost:8081/contratoLocacao";



class ContratoLocacaoService{

    salvarContratoLocacao(contratoLocacao){
        //console.log(imovel)
        return axios.post(CONTRATOLOCACAO_API_BASE_URL + "/salvar", contratoLocacao)
    }

    listarContratosLocacao(){
        return axios.get(CONTRATOLOCACAO_API_BASE_URL+ "/listar");
    }

    atualizarContratoLocacao(contratoLocacao, id){
        return axios.put(CONTRATOLOCACAO_API_BASE_URL+ "/editar/"+ id, contratoLocacao);
    }

    deleteContratoLocacao(id){
        return axios.delete(CONTRATOLOCACAO_API_BASE_URL+ "/remover/"+ id);
    }

    buscarContratoLocacaoPeloId(id){
        
        return axios.get(CONTRATOLOCACAO_API_BASE_URL+ "/buscarPorId/" + id);
    }

    gerarPDF(){
        return axios.get(CONTRATOLOCACAO_API_BASE_URL+ "/pdf");
    }
}

export default new ContratoLocacaoService();