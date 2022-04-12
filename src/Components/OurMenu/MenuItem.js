import React from "react";
import { FormattedPrice } from "../Shared/Utility";
import { MenuItemStyle } from "./MenuItemStyle";

const MenuItem = ({ itemsList }) => {
  if (itemsList.length === 0) return null;
  return itemsList.map((item) => (
    <MenuItemStyle key={item.id}>
      <b>{item.title}</b>
      <p>{item.description}</p>
      <span>{FormattedPrice(item.price)}</span>
    </MenuItemStyle>
  ));
};

export default MenuItem;
