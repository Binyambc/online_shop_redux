import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/productSlice";


function Cart() {
    const cartItems = useSelector((state) => state.cart.cart ?? []);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul style={{ listStyle: "none" }}>
                    {cartItems.map((item) => (
                        <li key={item.id} style={{ marginBottom: "20px" }}>
                            <strong>{item.title}</strong> <br />
                            <img src={item.image} alt={item.title} width="100" /> <br />
                            ${item.price} <br />
                            <button onClick={() => dispatch(removeFromCart(item.id))}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            ) 
            }
        </div>
    )
}

export default Cart;
