import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import Col from "react-bootstrap/esm/Col";

import { dateFormatter } from "../../Services/dateFormatter";

export const CardDetalle = () => {
  /* TODO: 
    -Intentar extraer data si viene desde Perfil, para usar caché
    -Handle de error para que con fetch erroneo no se caiga la app 
  */

  const API_ROUTE = process.env.REACT_APP_API_ROUTE;
  const { id } = useParams();

  const getProductData = async () => {
    const res = await fetch(`${API_ROUTE}user/1/purchases?limit=10&offset=0`);
    return res.json();
  };

  const { data, error, isLoading } = useQuery("productsDetail", getProductData);

  //Error and Loading states
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  const productItems = data.data.data;

  const productFiltered = productItems.filter((p) => p.id_compra == id)[0];
  if (!productFiltered) {
    console.log("Producto no encontrado");
  } else {
    console.log("Producto encontrado: " + productFiltered.titulo);
  }

  return (
    <Col xs={12} md={8}>
      <div className="card-detalle p-3">
        <div className="d-flex d-flex justify-content-between">
          <div className="d-flex flex-column">
            <p className="card-detalle__estado-envio mb-3">Estado del envio</p>
            <p className="card-detalle__titulo-item mb-2">
              {productFiltered.titulo}
            </p>
            <p className="card-detalle__fecha mb-2">{dateFormatter(productFiltered.fecha)}</p>
            <p className="card-detalle__cantidad-item mb-2">Cantidad: {productFiltered.cantidad}</p>
          </div>
          <div className="img-placeholder"></div>
        </div>
        <hr />
        <div className="card-detalle__vendedor d-flex align-items-center">
          <div className="img-placeholder"></div>
          <div className="d-flex flex-column ms-3">
            <p className="card-detalle__vendedor-name">Nombre vendedor</p>
            <Link className="btn-mensajes" to={"/"}>
              Ver mensajes
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};
