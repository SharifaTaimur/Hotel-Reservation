import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Service extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktail",
        info:
          "ext messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or ...",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "ext messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or ...",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle ",
        info:
          "ext messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or ...",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "ext messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or ...",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="service" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Service;
