import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { useQuery } from "react-query";
import { getProductData } from "../../Services/getProductData";

export const Test = () => {
  const [load, setLoad] = useState(false);
  const [product, setProduct] = useState([]);
  const [shipment, setShipment] = useState([]);

  // const { id } = useParams();
  const id = 300200

  useEffect(() => {
    getProductData(id);

    Promise.all([getProductData(id)])
      .then((data) => {
        setProduct(data[0]);
        setShipment(data[1]);
        setLoad(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return ( !load ? (
    <h1>Cargando informacion</h1>
  ) : (
    <div>
      {product.map(elem => (
        <p>{elem.titulo}</p>
      ))}
    </div>
  ))
};
