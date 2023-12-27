import React from "react";
import NavigationBar from "components/Navbars/NavigationBar.js";
import Header from "components/Header";
import Proyecto , { Caracteristicas } from '../components/Proyecto'
import Atractivos from 'components/Atractivos'
import Masterplan from 'components/Masterplan'
import Ubicacion from 'components/Ubicacion'
import Contacto from 'components/Contacto'
import RS from '../components/RS'

function Presentation() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("section-page");
    // window.scrollTo(0, 0);
    // document.body.scrollTop = 0;

    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#/") + 2
    );
    var hrefId = href.substring(href.lastIndexOf("#") + 1);
    if (href.lastIndexOf("#") > 0) {
      document.getElementById(hrefId).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    return function cleanup() {
      document.body.classList.remove("section-page");
    };
  })
  return (
    <>
      <NavigationBar />
      <Header />
      {/* <Nosotros /> */}
      <Proyecto />
      <Caracteristicas />
      <Atractivos />
      <Masterplan />
      <Ubicacion />
      <Contacto />
      <RS/>
    </>
  );
}

export default Presentation;
