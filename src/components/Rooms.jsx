import React, { useState, Fragment } from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "./RoomsContainer";

function Rooms() {
  return (
    <Fragment>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          {/* whatever is in here => are the children */}
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </Fragment>
  );
}

export default Rooms;
