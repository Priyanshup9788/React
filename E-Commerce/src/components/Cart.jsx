/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */




const Cart = ({iteams , onRemoveCart,onIncrement,onDecrement}) => {

    let total = iteams.reduce((sum,iteam)=>sum+iteam.price * iteam.quntaty,0)

    console.log(iteams)

    return (
        <>
            <div className="cart-page">
                <h2>Your Cart</h2>
                {iteams.map((crt)=>(
                    <div key={crt.id} id="cart-items" >
                    <div  className="cart-item" style={{display:"flex" , gap:"20px" ,justifyContent:"space-between", alignItems:"center"}}>
                        <img src={crt.image} style={{  height: "50px", width: "70px", borderRadius: "5px" }} alt="" />
                        <h3>{crt.title}</h3>
                        <p>Price: {crt.price}</p>
                        <button onClick={()=>onIncrement(crt)}>+</button>
                        <p>{crt.quntaty}</p>
                        <button onClick={()=>onDecrement(crt)}>-</button>
                        <p>Total: {(crt.price * crt.quntaty).toFixed(2)}</p>
                        <button onClick={()=>onRemoveCart(crt.id)}>Remove</button>
                    </div>
                    
                </div>
                ))}
                
                <div className="cart-summary" id="cart-summary">
                    <h3>Total: ${total.toFixed(2)}</h3>
                    <button className="checkout-button">Proceed to Checkout</button>
                </div>
            </div>
        </>
    )
}

export default Cart