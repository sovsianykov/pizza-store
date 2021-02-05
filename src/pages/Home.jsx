import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../scss/components";
import { useSelector, useDispatch }  from 'react-redux';
import  { setCategory } from '../redux/actions/filters';
import {fetchPizzas} from '../redux/actions/pizzas';


const categoryNames = ["Meat", "Vegetable", "Grill", "Spicy", "Closed"];
const sortItems = [{name: 'popularity',type: 'popular'},
                    {name: 'price',type: 'price'},
                     {name: 'alphabet',type: 'alphabet'}];


const Home = () => {
  const dispatch = useDispatch()
  const items  = useSelector(({pizzas}) => pizzas.items);
  const {category,sortBy} = useSelector(({filters})=>filters)
    React.useEffect(() => {
        dispatch(fetchPizzas())
    },[category,sortBy]);

  const onSelectCategory = React.useCallback((index) =>{
    dispatch(setCategory(index))
  }, [])

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
              activeCategory = {category}
            onClickCategory={onSelectCategory}
            items={categoryNames}
          />
          <SortPopup items = {sortItems}  />
        </div>
        <h2 className="content__title">All pizzas</h2>
        <div className="content__items">
          {items && items.map((obj) => (
            <PizzaBlock key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
