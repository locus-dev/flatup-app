import Button from 'react-bootstrap/Button';

const ButtonComponent = (props) => {
    console.log(props)
    return (
        <><br/>
            <Button
                // className='btn btn-azul-padrao'
                id={props.idButton}
                variant={props.theme}
                type="button"
                onClick={props.func}
            >{props.buttonName}</Button>
        </>
    )
}

export default ButtonComponent;