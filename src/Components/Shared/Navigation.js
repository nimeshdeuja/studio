import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationStyle } from "./NavigationStyle";

export const Navigation = () => {
  return (
    <NavigationStyle>
      <h1>LOGO</h1>
      <ul>
        <li>
          <NavLink to={"/"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/community"}>Community</NavLink>
        </li>
        <li>
          <NavLink to={"/Location"}>Location</NavLink>
        </li>
        <li>
          <NavLink to={"/ourMenu"}>Our Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Recipes</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to={"/"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Contact</NavLink>
        </li>
      </ul>
    </NavigationStyle>
  );
};
