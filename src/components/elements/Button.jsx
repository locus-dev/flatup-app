
const Button = (props) => {
    return (
        <>
            <button
                id="seguir"
                className={props.className}
                type="button"
                onClick={props.func}
            ></button>
        </>
    )
}

export default Button;