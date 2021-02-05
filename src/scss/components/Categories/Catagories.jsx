import React from "react";
import PropTypes from "prop-types";

const Categories = React.memo(
    function Categories({ activeCategory,items, onClickItem }) {
      const onClic = (index) => {
        onClickItem(index);
      };
      console.log('RENDER CATEGORIES')
      return (
          <div>
            <div className="categories">
              <ul>
                <li
                    className={activeCategory === null ? "active" : ""}
                    onClick={() => onSelectItem(null)}
                >
                  All
                </li>
                {items &&
                items.map((name, index) => (
                    <li
                        className={activeCategory === index ? "active" : ""}
                        onClick={() => onSelectItem(index)}
                        key={`${name}_${index}`}
                    >
                      {name}
                    </li>
                ))}
              </ul>
            </div>
          </div>
      );
    }
);
Categories.propTypes = {
    activeCategory : PropTypes.number

}
Categories.defaultProps = {
    activeCategory:null, items: []
}

export default Categories;
