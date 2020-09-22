import React from "react";
import { NavLink } from "react-router-dom";

const NavRoutes = () => {
  return (
    <div className="NavRoutes">
      <nav>
        <NavLink to="/pizzas" exact activeClassName="active">
          pizzas
        </NavLink>
        <NavLink to="/salads" exact activeClassName="active">
          salads
        </NavLink>

        <NavLink to="/appetizers" exact activeClassName="active">
          appetizers
        </NavLink>

        <NavLink to="/pastas" exact activeClassName="active">
          pastas
        </NavLink>

        <NavLink to="/combos" exact activeClassName="active">
          combos
        </NavLink>

        <NavLink to="/sandwiches" exact activeClassName="active">
          sandwiches
        </NavLink>

        <NavLink to="/desserts" exact activeClassName="active">
          desserts
        </NavLink>

        <NavLink to="/drinks" exact activeClassName="active">
          drinks
        </NavLink>

        <NavLink to="/extras" exact activeClassName="active">
          extras
        </NavLink>
      </nav>
    </div>
  );
};

export default NavRoutes;
