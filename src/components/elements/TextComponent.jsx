import Form from 'react-bootstrap/Form';

const TextComponent = (props) => {
    return (
        <>
            <Form.Label htmlFor={props.inputId}>{props.inputName}</Form.Label>
            <Form.Text id={props.inputDesc} muted>
                {props.content }
            </Form.Text>
        </>
    )
}

export default TextComponent;