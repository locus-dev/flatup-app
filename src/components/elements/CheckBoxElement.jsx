import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const CheckBoxComponent = (props) => {
  return (
    <>
      <InputGroup className={props.checkboxClass}>
        <Form.Control aria-label={props.checkBoxName} />
        <InputGroup.Checkbox aria-label="Checkbox" />
      </InputGroup>
    </>
  );
}

export default CheckBoxComponent;