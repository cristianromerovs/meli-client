import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from 'react-bootstrap/Card';
import { parcelCalculator } from "../../Utils/parcelCalculator";

export const ProductosDestacados = () => {
    const productList = [
      {
        titulo: "Ficus Lyrata Artificial Grande",
        precio: "56.990",
        img: "https://http2.mlstatic.com/D_Q_NP_2X_893401-MLC48537097763_122021-AB.webp",
      },
      {
        titulo: "Planta Decorativa Bambú 122 Cm",
        precio: "39.990",
        img: "https://http2.mlstatic.com/D_Q_NP_2X_867258-MLC48854098359_012022-AB.webp",
      },
      {
        titulo: "Fuente De Agua Bebedero",
        precio: "14.490",
        img: "https://http2.mlstatic.com/D_Q_NP_2X_699647-MLC49721483339_042022-AB.webp",
      },
      {
        titulo: "Cama Iglú Para Mascotas",
        precio: "20.990",
        img: "https://http2.mlstatic.com/D_Q_NP_2X_622017-MLC51976664684_102022-AB.webp",
      }
    ];


  return (
    <Container>
        <Row>
            {productList.map(item => (
                <Col xs={12} md={3}>
                <Card className="card-destacados align-items-center my-3 my-md-5 mx-3 mx-md-4">
                    <div className="card-destacados__img">
                        <Card.Img src={item.img} />
                    </div>
                    <Card.Body>
                        <p className="card-destacados__precio">$ {item.precio}</p>
                        <p className="card-destacados__cuotas">12x $ {parcelCalculator(item.precio, 12)} sin interés</p>
                        <p className="card-destacados__titulo">{item.titulo}</p>
                    </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
  )
}
