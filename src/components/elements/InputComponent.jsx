
const InputComponent = (props) => {
    return (
        <div className={props.divClassname}>
            <label>{props.label}</label>
            <input 
                type={props.type} 
                className={props.className}
                placeholder={props.placeholder} 
                onChange={props.change}/>
        </div>
    )
}

export default InputComponent;