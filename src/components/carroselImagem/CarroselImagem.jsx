import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-carousel-minimal';
import DATA from '../../DATAFILL';

const CarroselImagem = (props) =>{
 const data = [
    {
      image: "https://a0.muscache.com/im/pictures/3e37a3ee-6471-4356-b7ca-6856ab59b104.jpg?im_w=1200",
    },
    {
      image: "https://a0.muscache.com/im/pictures/6eb5a54f-5453-468f-aa3f-dc4ca1b56281.jpg?im_w=1440",
    },
    {
      image: "https://a0.muscache.com/im/pictures/352f9642-7529-4709-8e42-56b53ba35c59.jpg?im_w=1440",
    },
    {
      image: "https://a0.muscache.com/im/pictures/a34cb323-982d-423c-b8af-eb945f5d0b94.jpg?im_w=1440",
    },
    {
      image: "https://a0.muscache.com/im/pictures/eecb330a-2f70-4546-8cc1-e11195409f6b.jpg?im_w=1440",
    },
    {
      image: "https://a0.muscache.com/im/pictures/ccec5463-c9fc-4b2d-850b-d9b15eccf468.jpg?im_w=1440",
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          margin: "20px auto"
        }}>
          <Carousel  
            slideBackgroundColor={"none"}
            interval={60000}
            data={DATA.imoveis[props.props].imagens}
            time={60000}
            width="100vw"
            height="450px"
            captionStyle={captionStyle}
            radius="20px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxHeight: "500px",
              marginTop: "5px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CarroselImagem;