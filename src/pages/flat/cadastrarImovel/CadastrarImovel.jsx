import FeaturedProperties from "../../../components/featuredProperties/FeaturedProperties";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import MailList from "../../../components/mailList/MailList";
import Navbar from "../../../components/navbar/Navbar";
import CadastroEndereco from "../../../components/cadastroEndereco/CadastroEndereco";
import "./CadastrarImovel.css"

const CadastrarImovel = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer"> 
          <form>
            <div>
              <CadastroEndereco />
              <button onClick={() => {/* Exibir próxima tela do formulário */}}>Seguir</button>
            </div>
            <div className="pt-2" hidden>
              <button type="submit">Enviar</button>
            </div>
          </form>
          <MailList />
          <Footer />
      </div>
    </div>
  )
}

export default CadastrarImovel