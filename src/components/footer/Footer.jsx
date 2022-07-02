import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="fLists">
            <ul className="fList">
                <li className="fListItem">Regiões</li>
                <li className="fListItem">Estados</li>
                <li className="fListItem">Cidades</li>
                <li className="fListItem">Pontos turísticos</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Lugares mais visitados da cidade</li>
                <li className="fListItem">No centro da vida noturna</li>
                <li className="fListItem">Viagens de fim de semana</li>
                <li className="fListItem">O melhor para o meu perfil</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Pacotes de viagem</li>
                <li className="fListItem">Passeios</li>
                <li className="fListItem">Parceiros</li>
                <li className="fListItem">Fidelização</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Aluguel de carros</li>
                <li className="fListItem">Pesquisa de voos</li>
                <li className="fListItem">Reservas em restaurantes</li>
                <li className="fListItem">Seguro de viagem</li>
            </ul>
        </div>
        <div className="fText">© Locus · Feito com 💖 no IFPE</div>
    </div>
  )
}

export default Footer