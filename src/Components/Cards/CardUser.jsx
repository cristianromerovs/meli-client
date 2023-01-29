import { useState, useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

//Servicio para obtener data desde GetUser
import { getUserInfo, getUserRestrictions } from "../../Services/getUser";

export const CardUser = () => {
  //Estados de: carga info, info usuario y info restricciones
  const [load, setLoad] = useState(false);
  const [user, setUser] = useState([]);
  const [userRestrictions, setUserRestrictions] = useState([]);

  useEffect(() => {
    getUserInfo();
    getUserRestrictions();

    Promise.all([getUserInfo(), getUserRestrictions(), setUser()])
      .then((data) => {
        setUser(data[0]);
        setUserRestrictions(data[1]);
        setLoad(true);
      })
      .catch((error) => console.log(error));
  }, []);

  //Conditional rendering a la espera de cambio de estado de 'load'
  return ( !load ? (
    <Container className="card-user p-3">
      <Row>
        <Col xs={3} md={2} className="d-flex flex-column align-items-center">
          <div className="img-placeholder"></div>
        </Col>
        <Col xs={9} md={10} className='d-flex align-items-center'>
          <p className="card-user__nombre">Cargando información de usuario...</p>
        </Col>
      </Row>
    </Container>
  ) : (
    <Container className="card-user p-3">
      <Row>
        <Col xs={3} md={2} className="d-flex flex-column align-items-center">
          <img
            src={user.imagen}
            className="img-user"
            alt={`imagen de perfil usuario ${user.nombre}`} 
          />
          <p className="card-user__nick mt-2">{user.nombre}</p>
        </Col>
        <Col
          xs={9}
          md={10}
          className="d-flex flex-column justify-content-between"
        >
          <p className="card-user__nombre">{`${user.nombre} ${user.apellido}`}</p>
          <p className="card-user__nivel">{`Nivel ${user.nivel} - Mercado Puntos`}</p>
          {userRestrictions.tipo === "warning" ? (
            <p className="card-user__restricciones">
              {userRestrictions.mensaje}
            </p>
          ) : (
            <p className="card-user__restricciones">Sin restricciones</p>
          )}
        </Col>
      </Row>
    </Container>
  ))
};
