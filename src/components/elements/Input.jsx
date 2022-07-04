
const Input = (props) => {
    return (
        <div className={props.divClassname}>
            <label>props.label</label>
            <input type={props.typw} className={props.className} placeholder={props.placeholder}/>
        </div>
    )
}