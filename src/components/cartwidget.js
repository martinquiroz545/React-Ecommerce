import React from "react";
import cartsvg from "../img/cart.svg";
//Estilos CSS
import "../styles/navbar.css";

export default function CartWidget() {
  //Código Javascript Opcional

  return (
    <div className="myCart">
      <img src={cartsvg} alt="logo" />
    </div>
  );
}
