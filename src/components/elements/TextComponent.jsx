
const TextComponent = (props) => {
    return (
        <div className={props.divClassname}>
            <label>
                {props.label}
            </label>
            <p>
                {props.content}
            </p>
        </div>
    )
}

export default TextComponent;