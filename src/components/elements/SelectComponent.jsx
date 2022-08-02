import { useState } from "react";
import Form from 'react-bootstrap/Form';

const SelectComponent = () => {

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
    <Form.Select aria-label={ props.idSelect }
        defaultValue={ optionValue }
        onChange={ props.optionFunction }>
      {options}
    </Form.Select>
  );
}

export default SelectComponent;