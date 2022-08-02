import Card from 'react-bootstrap/Card';
import Button from './ButtonComponent';

const CardCompoent = (props) => {
  return (
    <Card style={{ width: props.widthCard }}>
      <Card.Img variant="top" src={props.imgSource} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {props.content}
        </Card.Text>
        <Button 
            variant="primary"
            func={props.func}
            buttonName={props.buttonName} />
      </Card.Body>
    </Card>
  );
}

export default CardCompoent;