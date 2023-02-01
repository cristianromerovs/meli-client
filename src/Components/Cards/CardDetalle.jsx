import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Col from "react-bootstrap/esm/Col";
import Placeholder from "react-bootstrap/Placeholder";

import { getProductData } from "../../Services/getProductData";
import { dateFormatter } from "../../Utils/dateFormatter";
import { capitalizeFirstLetter } from "../../Utils/capitalizeFistLetter";

export const CardDetalle = () => {
  /* TODO: 
    -Intentar extraer data si viene desde Perfil, para usar caché
    -Handle de error para que con fetch erroneo no se caiga la app 
    -Intentar usar axios para mejorar performance
  */

  const [load, setLoad] = useState(false);
  const [product, setProduct] = useState([]);
  const [shipment, setShipment] = useState([]);

  const { id } = useParams();
  const idToNumber = Number(id);

  useEffect(() => {
    getProductData(idToNumber);

    Promise.all([getProductData(idToNumber)])
      .then((data) => {
        //Destructuring de data
        const [producto, envio] = data[0];
        setProduct(producto);
        setShipment(envio);
        setLoad(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return !load ? (
    <Col xs={12} md={8} className='mb-md-5'>
      <div className="card-detalle p-3">
        <Placeholder as="p" animation="glow">
          <Placeholder xs={12} />
        </Placeholder>
        <Placeholder as="p" animation="glow">
          <Placeholder xs={10} />
        </Placeholder>
        <Placeholder as="p" animation="glow">
          <Placeholder xs={10} />
        </Placeholder>
        <hr />
        <Placeholder as="p" animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as="p" animation="glow">
          <Placeholder xs={4} />
        </Placeholder>
        <Placeholder as="p" animation="glow">
          <Placeholder xs={2} />
        </Placeholder>
      </div>
    </Col>
  ) : (
      <Col xs={12} md={8} className='mb-md-5'>
        <div className="card-detalle p-3">
          <div className="d-flex d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              {shipment.estado === "cancelado" ? (
                <p className="card-detalle__estado-envio mb-3 shipment-red">
                  {capitalizeFirstLetter(shipment.estado)}
                </p>
              ) : (
                <p className="card-detalle__estado-envio mb-3">
                  {capitalizeFirstLetter(shipment.estado)}
                </p>
              )}

              <p className="card-detalle__titulo-item mb-2">{product.titulo}</p>
              <p className="card-detalle__fecha mb-2">
                {dateFormatter(product.fecha)}
              </p>
              <p className="card-detalle__cantidad-item mb-2">
                Cantidad: {product.cantidad}
              </p>
            </div>
            <div className="img-producto">
              <img src={product.imagen} alt={`imagen de ${product.titulo}`} />
            </div>
          </div>
          <hr />
          <div className="card-detalle__vendedor d-flex align-items-center">
            <div className="img-placeholder"></div>
            <div className="d-flex flex-column ms-3">
              <p className="card-detalle__vendedor-name">
                {product.vendedor.nickname}
              </p>
              <Link className="btn-mensajes" to={"/"}>
                Ver mensajes
              </Link>
            </div>
          </div>
        </div>
      </Col>
  );
};
