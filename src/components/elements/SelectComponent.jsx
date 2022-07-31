import { useState } from "react";

const SelectComponent = (props) => {
    
    var options = [], optionValues = props.optionValues;
    const [optionValue, setOptionValue] = useState();
    setOptionValue(optionValues[0].value);

    optionValues.forEach(option => {
        options.push(
            <option value={option.value}>
              {option.label}
            </option>      
        );
    });

  return (
    <select id={ props.idSelect }
            defaultValue={ optionValue }
            onChange={ props.optionFunction }>
      {options}
    </select>
  );

}

export default SelectComponent;