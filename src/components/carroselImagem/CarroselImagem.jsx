import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-carousel-minimal';
import { useLocation } from 'react-router-dom';
import DATA from '../../DATAFILL';

const CarroselImagem = ({props}) =>{

  const location = useLocation()

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
            interval={8000}
            data={DATA.imoveis[location.state.id-1].imagens}
            time={8000}
            width="100vw"
            height="450px"
            captionStyle={captionStyle}
            radius="20px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
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