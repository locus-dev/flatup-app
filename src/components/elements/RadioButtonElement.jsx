
const RadioButtonComponent = (props) => {
    return (
        <div className={props.divClassname}>
            <label>
                <input 
                    type="radio" 
                    className={props.className}
                    value={props.radioValue}
                    checked={props.radioValue === props.optionSelected}
                    onChange={props.onChangeRadio}/>
            </label>
        </div>
    )
}

export default RadioButtonComponent;