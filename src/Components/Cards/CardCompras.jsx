import { useQuery } from "react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Placeholder from "react-bootstrap/Placeholder";

import { moneyFormatter } from "../../Utils/moneyFormatter";
import { dateFormatter } from "../../Utils/dateFormatter";

export const CardCompras = () => {
  const [page, setPage] = useState(0);
  const API_ROUTE = process.env.REACT_APP_API_ROUTE;
  const productPlaceholder = 5;

  const getProducts = async ({ queryKey }) => {
    /* QueryKey en la posicion [1] nos trae 'page', esto se utiliza
	para no usarlo en el refresh del estado y poder dejarlo en cache */
    const response = await fetch(
      `${API_ROUTE}/user/1/purchases?limit=5&offset=${queryKey[1]}`
    );
    if (!response.ok) {
      throw new Error("error");
    } else {
      return response.json();
    }
  };
  //Esperar res y status + Asignacion nombre clave y page
  const { data, status } = useQuery(["products", page], getProducts);

  if (status === "loading") {
    return Array.apply(null, { length: productPlaceholder }).map((e, i) => (
      <Container key={i} className="card-compras my-3">
        <Row className="card-compras__fecha p-3">
          <Placeholder as="p" animation="glow">
            <Placeholder xs={3} />
          </Placeholder>
          <Placeholder as="p" animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} />
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </Row>
      </Container>
    ));
  }
  if (status === "error") {
    return <p>Error</p>;
  }

  //Accedemos a el resultado del data
  const productItems = data.data.data;
  //Calcular cantidad de paginas
  const cantPaginas = data.data.total / data.data.limit;
  //Creamos array dinamico con las paginas calculadas
  let arrayPaginas = Array.from({ length: cantPaginas }, (_, i) => i + 1);

  return (
    <div>
      {productItems.map((element, index) => (
        <Container key={index} className="card-compras my-3">
          <Row className="card-compras__fecha p-3">
            <Col xs={12}>
              <p>{dateFormatter(element.fecha)}</p>
            </Col>
          </Row>
          <Row className="p-3">
            <Col xs={12} md={6}>
              <p className="card-compras__id">
                <b>ID del producto:</b> {element.id_compra}
              </p>
              <p className="card-compras__nombre">
                <b>Nombre producto:</b> {element.titulo}
              </p>
            </Col>
            <Col xs={12} md={3}>
              <p className="card-compras__precio">
                Precio producto: {moneyFormatter(element.precio.total, "ARS")}
              </p>
              <p className="card-compras__cantidad">
                Cantidad: {element.cantidad}
              </p>
            </Col>
            <Col
              xs={12}
              md={3}
              className="d-flex justify-content-md-center align-items-center"
            >
              <Link
                to={"/compras/" + element.id_compra}
                className="btn btn__ver-compra mt-3 mt-md-0"
              >
                Ir a detalle
              </Link>
            </Col>
          </Row>
        </Container>
      ))}
      <div className="paginador my-3 my-md-5">
        {arrayPaginas.map((element, index) => (
          <button
            className="btn btn-paginador"
            type="button"
            key={element}
            data-bs-toggle="button"
            onClick={() => setPage(index * 5)}
          >
            {element}
          </button>
        ))}
      </div>
    </div>
  );
};
