import React, { useState, Fragment } from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import Service from "./Service";
import FeaturedRooms from "./FeaturedRooms";

function Home() {
  return (
    <Fragment>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Service />
      <FeaturedRooms />
    </Fragment>
  );
}

export default Home;
