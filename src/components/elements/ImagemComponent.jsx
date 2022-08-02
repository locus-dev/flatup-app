
import Image from 'react-bootstrap/Image';

const Imagem = (props) => {
    return (
        <>
        <Image 
            src={props.source} 
            alt={props.alt} 
            className={props.className}
            fluid={props.fluid}
            rounded={props.rounded}/>
        </>
    )
}

export default Imagem;