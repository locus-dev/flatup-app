import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardBody, CardTitle, CardSubtitle, Button, CardText, Card } from "reactstrap";
import Mapa from "../../../components/mapa/Mapa";
import { Form } from 'react-bootstrap';
import DATA from "../../../DATAFILL";

const ImovelDetalhe = (props) => {

    // TODO: Implementar com o PUBLIC_KEY
    // const mercadopago = new MercadoPago('PUBLIC_KEY', {locale: 'pt-BR'});

    // function checkout() {
    //     mercadopago.checkout({
    //         preference: {
    //           id: 'YOUR_PREFERENCE_ID'
    //         },
    //         render: {
    //           container: '#checkout-container',
    //           label: 'Pay',
    //         }
    //       });
    // }

    const navigate = useNavigate();
    const editarImovel = (e, id) => {
        e.preventDefault();
        console.log(id)
        navigate(`/editarImovel/${id}`);
    };

    function teste(){
        // document.getElementById("card-reserva").style.display = "none"; 
        document.getElementById("modal-container").style.top = 0; 
    }

    document.onkeydown = function(e) {
        if(e.key === 'Escape') {
            document.getElementById("modal-container").style.top = -1000 + "px"
        }
      }
// console.log(props)

    return (

        <main className="d-flex justify-content-between my-5 align-items-start">
            <div className="w-100">
                <div className="localização-texto">
                    <h3>Endereço:</h3>
                    <h6>{DATA.imoveis[props.props].endereco}</h6>
                    <hr />
                    <Mapa coord={DATA.imoveis[props.props].geolocalizacao}/>
{/* {console.log(DATA.imoveis[props.props].geolocalizacao)} */}
                    <h4 className="mb-3" style={{ 
                        zIndex: 10,
                    }}>Comodidades</h4>
                    <div style={{ 
                        zIndex: 10,
                    }} id="comodidades" className="d-flex ">
                        <div className="informações-flat">
                            <div className="d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="rgb(128, 128, 128)" class="bi bi-fan" viewBox="0 0 16 16">
                                    <path d="M10 3c0 1.313-.304 2.508-.8 3.4a1.991 1.991 0 0 0-1.484-.38c-.28-.982-.91-2.04-1.838-2.969a8.368 8.368 0 0 0-.491-.454A5.976 5.976 0 0 1 8 2c.691 0 1.355.117 1.973.332.018.219.027.442.027.668Zm0 5c0 .073-.004.146-.012.217 1.018-.019 2.2-.353 3.331-1.006a8.39 8.39 0 0 0 .57-.361 6.004 6.004 0 0 0-2.53-3.823 9.02 9.02 0 0 1-.145.64c-.34 1.269-.944 2.346-1.656 3.079.277.343.442.78.442 1.254Zm-.137.728a2.007 2.007 0 0 1-1.07 1.109c.525.87 1.405 1.725 2.535 2.377.2.116.402.222.605.317a5.986 5.986 0 0 0 2.053-4.111c-.208.073-.421.14-.641.199-1.264.339-2.493.356-3.482.11ZM8 10c-.45 0-.866-.149-1.2-.4-.494.89-.796 2.082-.796 3.391 0 .23.01.457.027.678A5.99 5.99 0 0 0 8 14c.94 0 1.83-.216 2.623-.602a8.359 8.359 0 0 1-.497-.458c-.925-.926-1.555-1.981-1.836-2.96-.094.013-.191.02-.29.02ZM6 8c0-.08.005-.16.014-.239-1.02.017-2.205.351-3.34 1.007a8.366 8.366 0 0 0-.568.359 6.003 6.003 0 0 0 2.525 3.839 8.37 8.37 0 0 1 .148-.653c.34-1.267.94-2.342 1.65-3.075A1.988 1.988 0 0 1 6 8Zm-3.347-.632c1.267-.34 2.498-.355 3.488-.107.196-.494.583-.89 1.07-1.1-.524-.874-1.406-1.733-2.541-2.388a8.363 8.363 0 0 0-.594-.312 5.987 5.987 0 0 0-2.06 4.106c.206-.074.418-.14.637-.199ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z" />
                                </svg>
                                <h5>Climatizado</h5>
                            </div>
                        </div>
                        <div className="informações-flat">
                            <div className="d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="rgb(128, 128, 128)" class="bi bi-fan" viewBox="0 0 16 16">
                                    <path d="M10 3c0 1.313-.304 2.508-.8 3.4a1.991 1.991 0 0 0-1.484-.38c-.28-.982-.91-2.04-1.838-2.969a8.368 8.368 0 0 0-.491-.454A5.976 5.976 0 0 1 8 2c.691 0 1.355.117 1.973.332.018.219.027.442.027.668Zm0 5c0 .073-.004.146-.012.217 1.018-.019 2.2-.353 3.331-1.006a8.39 8.39 0 0 0 .57-.361 6.004 6.004 0 0 0-2.53-3.823 9.02 9.02 0 0 1-.145.64c-.34 1.269-.944 2.346-1.656 3.079.277.343.442.78.442 1.254Zm-.137.728a2.007 2.007 0 0 1-1.07 1.109c.525.87 1.405 1.725 2.535 2.377.2.116.402.222.605.317a5.986 5.986 0 0 0 2.053-4.111c-.208.073-.421.14-.641.199-1.264.339-2.493.356-3.482.11ZM8 10c-.45 0-.866-.149-1.2-.4-.494.89-.796 2.082-.796 3.391 0 .23.01.457.027.678A5.99 5.99 0 0 0 8 14c.94 0 1.83-.216 2.623-.602a8.359 8.359 0 0 1-.497-.458c-.925-.926-1.555-1.981-1.836-2.96-.094.013-.191.02-.29.02ZM6 8c0-.08.005-.16.014-.239-1.02.017-2.205.351-3.34 1.007a8.366 8.366 0 0 0-.568.359 6.003 6.003 0 0 0 2.525 3.839 8.37 8.37 0 0 1 .148-.653c.34-1.267.94-2.342 1.65-3.075A1.988 1.988 0 0 1 6 8Zm-3.347-.632c1.267-.34 2.498-.355 3.488-.107.196-.494.583-.89 1.07-1.1-.524-.874-1.406-1.733-2.541-2.388a8.363 8.363 0 0 0-.594-.312 5.987 5.987 0 0 0-2.06 4.106c.206-.074.418-.14.637-.199ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z" />
                                </svg>
                                <h5>Piscina</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        
        <div className="flex-column">
            <div className="text-dark" id="card-reserva">
                <Card
                    color="light"
                    style={{
                        width: '18rem'
                    }}
                >
                    <CardBody>
                        <CardTitle tag="h3">
                            <div className=" d-flex mb-2">
                                <span className="promocao-texto">R$ {DATA.imoveis[props.props].valor_diaria}/noite</span>
                                <span className="promocao-porcentagem">-25% off</span>
                            </div>
                            <span className="promocao-texto-novopreco">R$ {DATA.imoveis[props.props].valor_diaria-DATA.imoveis[props.props].valor_diaria*25/100}/noite</span>

                        </CardTitle>


                        <CardText>
                            <div className="d-flex flex-column mt-3">
                                <span>A promoção acaba em:</span>
                                <span className="promocao-contador text-danger">42:10:09</span>
                            </div>
                        </CardText>
                        <Button className="w-100 btn-azul-padrao" onClick={teste}>
                            Reservar
                        </Button>
                    </CardBody>
                </Card>
            </div>
            {/* TODO: Remover comentário abaixo */}
            {/* <div id="checkout-container"></div> */}

            <div id="modal-container">
                    <div id="modal">
                        <h3 className="text-center mb-3">Reserve esse flat</h3>
                        <div className="d-flex w-100 d-flex align-items-center">
                            <Form.Group className="data w-100">
                                    <Form.Label>Check-in</Form.Label>
                                    <Form.Control type="date" name="checkin" placeholder="Check-in" />
                            </Form.Group>
                            <Form.Group className="data w-100">
                                    <Form.Label>Check-out</Form.Label>
                                    <Form.Control type="date" name="checkout" placeholder="Check-out" />
                            </Form.Group>
                        </div>

                        <div>
                            <Form.Select aria-label="Default select example">
                            <option>Quantidade de hóspedes</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </Form.Select>
                        </div>

                        <div>
                        <Button className="w-100 btn-azul-padrao mt-3">
                            Fazer reserva
                        </Button>
                        </div>
                    </div>
            </div>
        </div>
        </main>
    )
}

export default ImovelDetalhe;