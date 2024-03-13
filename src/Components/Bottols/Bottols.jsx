import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Bottle from "../Bottle/Bottle";
import "./bottoles.css";
import { addToLS, getStorageCart, removeFromLS } from "../../Utlites/LocalStorage";
import Cart from "../Cart/Cart";

const Bottols = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCard] = useState([]);

  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  //   load card from local storage
  useEffect(() => {
    console.log(bottles.length);
    if (bottles.length) {
        const storeCart = getStorageCart();

    console.log(storeCart,bottles);
    const saveCard = [];
    for(const id of storeCart){
        console.log(id)
        const bottle = bottles.find(bottle=> bottle.id=id);
        if(bottle){
            saveCard.push(bottle);
        }
    }
    console.log(saveCard,'saved card is '); 
    setCard(saveCard)
    }
    
  }, [bottles]);
  const handleAddToCard = (bottle) => {
    // console.log(bottle)
    const newCart = [...cart, bottle];
    setCard(newCart);
    addToLS(bottle.id);
  };
  const handlerRemoveToCart= id =>{
    //  visual cart remove
    const remainingCart = cart.filter(bottle=>bottle.id !== id);
    setCard(remainingCart)
    // remove from LS store 
    removeFromLS(id)
  }
  return (
    <div>
      <h3>Bottles Available : {bottles.length}</h3>
      <Cart cart={cart} handlerRemoveToCart={handlerRemoveToCart}></Cart>
      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCard={handleAddToCard}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};
Bottols.propTypes= {
  bottles: PropTypes.array.isRequired,
  setBottles: PropTypes.array.isRequired
}
export default Bottols;
