/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Cart from "./Cart";
import Product from "./Product"
import { ToastContainer, toast } from 'react-toastify';


// eslint-disable-next-line react/prop-types
const ProductList = ({ products }) => {

  const [cart, setCart] = useState([]);

  const onRemoveCart = (productId) => {
    setCart(cart.filter((prd)=>prd.id!==productId))
    toast.warn("Product removed...",{theme:"dark",autoClose:1300})
  }

  const onIncrement = (product) => {
    setCart((prevIteam) => {
      const existIteam = prevIteam.find((prd) => (prd.id === product.id));

      if (existIteam) {
        return prevIteam.map((prd) => prd.id === product.id ? { ...prd, quntaty: prd.quntaty + 1 } : prd)
      }
    })
  }

  const onDecrement = (product) => {
    setCart((prevIteam) => {
      return prevIteam.map((iteam) => {
        if (iteam.id === product.id) {
          return { ...iteam, quntaty: iteam.quntaty - 1 }
        }
        return iteam;
      })
        .filter((iteam) => iteam.quntaty > 0)
    })
  }

  const onAddCart = (product) => {
    setCart(
      (prevIteam) => {
        const existIteam = prevIteam.find((prd) => (prd.id === product.id));

        if (existIteam) {
          return prevIteam.map((prd) => prd.id === product.id ? { ...prd, quntaty: prd.quntaty + 1 } : prd)
        }
        return [...prevIteam, { ...product, quntaty: 1 }]
      }
    )
    toast.success('Product added successfully',{autoClose:1300,theme: "dark",});
  }



  return (
    <>
      <div style={{ width: "100%", marginTop: "100px", display: "flex", gap: "20px" }}>
        {products.map((prop, index) => (
          <Product key={index} product={prop} onAddCart={onAddCart} />
        ))}
      </div>
      <Cart iteams={cart} onRemoveCart={onRemoveCart} onIncrement={onIncrement} onDecrement={onDecrement} />
      <ToastContainer />
    </>
  )
}

export default ProductList