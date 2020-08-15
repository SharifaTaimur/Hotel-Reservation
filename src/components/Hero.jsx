import React from "react";

function Hero({ children, hero = "defaultHero" }) {
  return <div className={hero}>{children}</div>;
}

export default Hero;
