import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
// import { AsideDetalle } from "../Components/Cards/AsideDetalle";
import { CardDetalle } from "../Components/Cards/CardDetalle";
import { Test } from "../Components/Cards/Test";
import { MyBreadCrumb } from "../Components/MyBreadCrumb";

export const Compras = () => {
  return (
    <Container>
      <MyBreadCrumb routesForBreadcrumb={["/", "/Profile", "/Compras"]} />
      <Row>
        <CardDetalle />
        {/* <Test /> */}
        {/* <AsideDetalle /> */}
      </Row>
    </Container>
  );
};
