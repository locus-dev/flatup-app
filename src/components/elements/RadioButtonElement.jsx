import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const RadioButtonComponent = (props) => {
  return (
    <>
      <InputGroup>
        <Form.Control aria-label={props.radioName} />
        <InputGroup.Radio aria-label="Radio button" />
      </InputGroup>
    </>
  );
}

export default RadioButtonComponent;