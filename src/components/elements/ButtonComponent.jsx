
const Button = (props) => {
    return (
        <>
            <button
                id={props.idButton}
                className={props.className}
                type="button"
                onClick={props.func}
            >{props.buttonName}</button>
        </>
    )
}

export default Button;