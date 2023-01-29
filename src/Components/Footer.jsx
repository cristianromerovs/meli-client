import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='footer-ml d-flex align-items-center'>
        <Container>
            <Row className='justify-content-center'>
                <Col xs={12} md={10} xl={8}>
                    <div className="d-flex flex-column">
                        <div className="d-flex flex-column flex-md-row mb-2">
                            <Link className='footer__top-item' to={'/'}>Trabaja con nosotros</Link>
                            <Link className='footer__top-item' to={'/'}>Términos y condiciones</Link>
                            <Link className='footer__top-item' to={'/'}>Cómo cuidamos tu privacidad</Link>
                            <Link className='footer__top-item' to={'/'}>Accesibilidad</Link>
                            <Link className='footer__top-item' to={'/'}>Ayuda</Link>
                        </div>
                        <p className='footer__bottom-item'>Copyright © 1999-2023 MercadoLibre Chile Ltda.</p>
                        <p className='footer__bottom-item'>Av. Apoquindo 4800, Torre 2, piso 21, Las Condes, Santiago - Chile.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
