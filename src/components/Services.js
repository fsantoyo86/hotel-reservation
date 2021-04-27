import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer,FaStickerMule, FaShoppingCart} from 'react-icons/fa'

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Enjoy a great variety of drinks, different colors, different brands for all tastes.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Great mountains to practice your hiking skills, tour guided trips and different activities that you can enjoy.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "Enjoy a great variety of drinks, different colors, different brands for all tastes",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Because we know you like it strong, we have the strongest beer in the area, different brands, international and national.",
      },
      {
        icon: <FaStickerMule />,
        title: "Horse Ridding",
        info:
          "Private routes where you can horse ride with your family, beautiful horses and the nicest views.",
      },
      {
        icon: <FaShoppingCart />,
        title: "Incredible Souvenirs",
        info:
          "Nice stores to buy souvenirs for your family or for you to remember your trip.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
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
