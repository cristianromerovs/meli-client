import { useState, useEffect } from "react";

import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Placeholder from 'react-bootstrap/Placeholder';

import { getUserInfo } from "../../Services/getUser";

export const CardUser = () => {
  //Estados de: carga info, info usuario y info restricciones
  const [load, setLoad] = useState(false);
  const [user, setUser] = useState([]);
  const [userRestrictions, setUserRestrictions] = useState([]);

  useEffect(() => {
    getUserInfo();
    Promise.all([getUserInfo()])
      .then((data) => {
        const [userData, envioData] = data[0];
        setUser(userData);
        setUserRestrictions(envioData);
        setLoad(true);
      })
      .catch((error) => console.log(error));
  }, []);

  //Conditional rendering a la espera de cambio de estado de 'load'
  return ( !load ? (
    <Container className="card-user p-3">
      <Row>
        <Placeholder as="p" animation="glow">
          <Placeholder xs={4} />
        </Placeholder>
        <Placeholder as="p" animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as="p" animation="glow">
          <Placeholder xs={8} />
        </Placeholder>
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
