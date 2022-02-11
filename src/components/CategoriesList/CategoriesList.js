import PropTypes from "prop-types";

import "./CategoriesList.styles.css";

const CategoriesList = ({ categories, handleClick }) => (
  <div className="categories-block">
    <h2 className="categories-heading">Categories</h2>
    <ul className="categories-list">
      {categories.map((category) => (
        <li className="categories-list-item" key={category}>
          <button
            className="category-btn"
            type="button"
            onClick={handleClick(category)}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CategoriesList;
