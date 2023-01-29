import Col from "react-bootstrap/esm/Col";

export const AsideDetalle = () => {
  return (
    <Col xs={12} md={4}>
      <div className="aside-detalle mb-3 mb-md-0">
        <div className="p-3">
          <p className="aside-detalle__title">Detalle de la compra</p>
          <div className="d-flex">
            <p className="aside-detalle__fechaid">Fecha</p>
            <p className="aside-detalle__fechaid mx-2">|</p>
            <p className="aside-detalle__fechaid"># ID de la compra</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p className="aside-detalle__detalle">Valor producto:</p>
            <p className="aside-detalle__detalle">$ 12.990</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="aside-detalle__detalle">Estado de pago:</p>
            <p className="aside-detalle__detalle">Pagado</p>
          </div>
        </div>
      </div>
    </Col>
  );
};
