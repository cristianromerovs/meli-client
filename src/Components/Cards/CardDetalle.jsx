import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { getProductData } from "../../Services/getProductData";

import { dateFormatter } from "../../Services/dateFormatter";
import { capitalizeFirstLetter } from "../../Services/capitalizeFistLetter"
import Col from "react-bootstrap/esm/Col";

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
    <h1>Cargando informacion</h1>
  ) : (
    <Col xs={12} md={8}>
      <div className="card-detalle p-3">
        <div className="d-flex d-flex justify-content-between">
          <div className="d-flex flex-column">
            {shipment.estado === "cancelado" ? <p className="card-detalle__estado-envio mb-3 shipment-red">{capitalizeFirstLetter(shipment.estado)}</p> : <p className="card-detalle__estado-envio mb-3">{capitalizeFirstLetter(shipment.estado)}</p>}
            
            <p className="card-detalle__titulo-item mb-2">
              {product.titulo}
            </p>
            <p className="card-detalle__fecha mb-2">
              {dateFormatter(product.fecha)}
            </p>
            <p className="card-detalle__cantidad-item mb-2">
              Cantidad: {product.cantidad}
            </p>
          </div>
          <div className="img-placeholder"></div>
        </div>
        <hr />
        <div className="card-detalle__vendedor d-flex align-items-center">
          <div className="img-placeholder"></div>
          <div className="d-flex flex-column ms-3">
            <p className="card-detalle__vendedor-name">{product.vendedor.nickname}</p>
            <Link className="btn-mensajes" to={"/"}>
              Ver mensajes
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};
