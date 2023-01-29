import { NavLink } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export const MyBreadCrumb = ({ routesForBreadcrumb }) => {
  return (
    <Breadcrumb>
      <ol className="breadcrumb">
        {routesForBreadcrumb.map((route, index) => (
          <NavLink 
          className={({ isActive }) => "breadcrumb-item " + (isActive && "active")}
          key={ index } 
          to={ route.toLowerCase() }>
            {/* Quitamos el "/" de el string para pintarlo en el breadcrumb y si la ruta es la raíz dejamos 'Inicio' */}
            { route !== "/" ? route.substring(1) : 'Inicio' }
          </NavLink>
        ))}
      </ol>
    </Breadcrumb>
  );
};
