/* eslint-disable react/prop-types */

import Navbar from "./Navbar"


// eslint-disable-next-line react/prop-types
const Product = ({ product, onAddCart}) => {
  return (
    <>
      <Navbar />
      <div className="product-card mb-5" style={{ backgroundColor: product.inStock ? "white" : "#80808021" }}>
        <img src={product.image} alt="Product Image" className="product-image" />
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-description" style={{ color: product.inStock ? "green" : "red" }}>{product.inStock ? "Available" : "Out of stock"}</p>
          <div className="product-price">{product.price}</div>
          <button className="buy-button" onClick={() =>  onAddCart(product) } disabled={!product.inStock} >Add To Cart</button>
        </div>
      </div>
      
    </>
  )
}

export default Product