
const Imagem = (props) => {
    return (
        <>
        <img src={props.source} alt={props.alt} className={props.className} />
        </>
    )
}

export default Imagem;