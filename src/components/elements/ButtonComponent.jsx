import Button from 'react-bootstrap/Button';

const ButtonComponent = (props) => {
    return (
        <>
            <Button
                id={props.idButton}
                variant={props.theme}
                type="button"
                onClick={props.func}
            >{props.buttonName}</Button>
        </>
    )
}

export default ButtonComponent;