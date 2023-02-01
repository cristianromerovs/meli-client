import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Placeholder from 'react-bootstrap/Placeholder';

import { getProductData } from "../../Services/getProductData";
import { dateFormatter } from "../../Utils/dateFormatter";
import { moneyFormatter } from "../../Utils/moneyFormatter";
import { capitalizeFirstLetter } from "../../Utils/capitalizeFistLetter";

export const AsideDetalle = () => {
  const [load, setLoad] = useState(false);
  const [product, setProduct] = useState([]);
  const [payment, setPayment] = useState([]);

  const { id } = useParams();
  const idToNumber = Number(id);

  useEffect(() => {
    getProductData(idToNumber);

    Promise.all([getProductData(idToNumber)])
      .then((data) => {
        //Destructuring de data
        const [producto, envio] = data[0];
        setProduct(producto);
        setPayment(envio);
        setLoad(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return !load ? (
    <Col xs={12} md={4}>
      <div className="aside-detalle mb-3 mb-md-0">
        <div className="p-3">
          <Placeholder as="p" animation="glow">
            <Placeholder xs={12} />
          </Placeholder>
          <hr />
          <Placeholder as="p" animation="glow">
            <Placeholder xs={10} />
          </Placeholder>
          <Placeholder as="p" animation="glow">
            <Placeholder xs={8} />
          </Placeholder>
        </div>
      </div>
    </Col>
  ) : (
    <Col xs={12} md={4}>
      <div className="aside-detalle mb-3 mb-md-0">
        <div className="p-3">
          <p className="aside-detalle__title">Detalle de la compra</p>
          <div className="d-flex">
            <p className="aside-detalle__fechaid">
              {dateFormatter(product.fecha)}
            </p>
            <p className="aside-detalle__fechaid mx-2">|</p>
            <p className="aside-detalle__fechaid"># {product.id_compra}</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p className="aside-detalle__detalle">Valor producto:</p>
            <p className="aside-detalle__detalle">
              {moneyFormatter(product.precio.total, product.precio.moneda)}
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="aside-detalle__detalle">Estado de pago:</p>
            <p className="aside-detalle__detalle">
              {capitalizeFirstLetter(payment.estado)}
            </p>
          </div>
        </div>
      </div>
    </Col>
  );
};
