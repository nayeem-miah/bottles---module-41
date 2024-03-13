import PropTypes, { func } from "prop-types";
import './cart.css'
const Cart = ({cart,handlerRemoveToCart}) => {
  return <div>
    <h4>cart : {cart.length}</h4>
    <div className="cart-container">
        {
            cart.map(bottle=><div key={bottle.id}>
              <img  src={bottle.img}></img>
              <button onClick={()=>handlerRemoveToCart(bottle.id)}>Remove </button>
            </div>  )
        }
    </div>
  </div>;
};
Cart.propTypes ={
    cart:PropTypes.array.isRequired,
    handlerRemoveToCart:PropTypes.func.isRequired
}
export default Cart;
