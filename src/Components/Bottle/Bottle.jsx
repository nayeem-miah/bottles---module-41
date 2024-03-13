import PropTypes from 'prop-types';
import './bottle.css'
const Bottle = ({bottle,handleAddToCard}) => {
    // console.log(bottle)
    const {name, price, img, ratingsCount} = bottle;
    return (
        <div className="bottle">
            <h3>Bottle: {name}</h3>
            <img src={img} ></img>
            <p>price : {price}</p>
            <p>ratingsCount: {ratingsCount}</p>
            <button onClick={()=> handleAddToCard(bottle)}>purchase</button>
        </div>
    );
};
Bottle.propTypes ={
    bottle : PropTypes.object.isRequired,
    handleAddToCard :PropTypes.func.isRequired
}
export default Bottle;