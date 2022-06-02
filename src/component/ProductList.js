import React from "react";
import PropTypes from "prop-types";

const ProductList = (props) => {
  const { name, age, image } = props;
  console.log(props);
  return (
    <div className="box-people-list">
      <article className="box-people">
        <img src={image} alt="images" />
        <h3>{name}</h3>
        <p>{age}</p>
      </article>
      <div></div>
    </div>
  );
};

ProductList.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

ProductList.defaultProps = {
  name: "Nhat",
  age: 18,
  image:
    "https://image.shutterstock.com/image-vector/tax-law-authority-government-justice-260nw-1936619749.jpg",
};

export default ProductList;
