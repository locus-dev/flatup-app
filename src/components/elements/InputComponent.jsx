import Form from 'react-bootstrap/Form';

const InputComponent = (props) => {
  return (
    <>
      <Form.Label htmlFor={props.inputId}>{props.inputName}</Form.Label>
      <Form.Control
          type={props.inputType}
          id={props.inputId}
          aria-describedby={props.inputDesc}
          placeholder={props.placeholder} 
          onChange={props.change}
      />
      <Form.Text id={props.inputDesc} muted>
        {props.inputTip}
      </Form.Text>
    </>
  );
}

export default InputComponent;