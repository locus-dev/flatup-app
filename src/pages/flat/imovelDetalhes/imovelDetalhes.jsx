import React from "react";
import { useNavigate } from "react-router-dom";
import { CardBody, CardTitle, CardSubtitle, Button, CardText, Card } from "reactstrap";

const ImovelDetalhe = ({ }) => {


    const navigate = useNavigate();
    const editarImovel = (e, id) => {
        e.preventDefault();
        console.log(id)
        navigate(`/editarImovel/${id}`);
    };




    return (

        <main className="d-flex justify-content-between mb-5">
            <div>
                aaa
            </div>

            <div className="text-dark">
                <Card
                    color="light"
                    style={{
                        width: '18rem'
                    }}
                >
                    <CardBody>
                        <CardTitle tag="h3 mb-3">
                            R$ 33.000,00
                        </CardTitle>
                        
                        <CardText>
                            3 dias para o final de semana<br/>
                            25% de desconto
                            R$33.000 - 25%
                            R$
                        </CardText>
                        <Button className="w-100 success">
                            Reservar
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </main>
        // <tr >

        //     <td className="text-left px-6 py-4 whitespace-nowrap">
        //         <div className="text-sm text-gray-500">Fernando Marçon</div>
        //     </td>
        //     <td className="text-left px-6 py-4 whitespace-nowrap">
        //         <div className="text-sm text-gray-500">Climatizacao de rua</div>
        //     </td>

        //     <td className="text-left px-6 py-4 whitespace-nowrap">
        //         <div className="text-sm text-gray-500">45</div>
        //     </td>

        //     <td className="text-left px-6 py-4 whitespace-nowrap">
        //         <div className="text-sm text-gray-500">Desocupado</div>
        //     </td>



        // </tr>
    )
}

export default ImovelDetalhe;