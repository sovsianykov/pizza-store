import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../scss/components";

const Home = ({ items }) => {
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            onClickItem={(name) => console.log(name)}
            items={["Meat", "Vegetable", "Grill", "Spicy", "Closed"]}
          />
          <SortPopup items={[{name: 'popularity',type: 'popular'},
            {name: 'price',type: 'price'},
            {name: 'alphabet',type: 'alphabet'}]} />
        </div>
        <h2 className="content__title">All pizzas</h2>
        <div className="content__items">
          {items.map((obj) => (
            <PizzaBlock key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;