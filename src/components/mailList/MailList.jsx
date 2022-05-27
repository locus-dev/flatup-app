import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h2 className="mailTitle">Cadastre-se em nosso newsletter</h2>
        <span className="mailDesc">Insira seu email pra saber</span>
        <div className="mailInputContainer">
            <input type="text" placeholder=" Seu e-mail..." />
            <button>Inscreva-se</button>
        </div>
    </div>
  )
}

export default MailList