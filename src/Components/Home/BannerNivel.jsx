import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export const BannerNivel = () => {
  return (
    <Container className="mb-5">
        <Row>
            <Col xs={12} className='banner-nivel px-4'>
                <p className="banner-nivel__titulo">Suscríbete al nivel 6</p>
                <div className="d-flex flex-column">
                    <p className="banner-nivel__antes">$ 14.100</p>
                    <div className="d-flex">
                        <p className="banner-nivel__despues">$ 4.990</p>
                        <p className="banner-nivel__despues"><span>/mes</span></p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}
