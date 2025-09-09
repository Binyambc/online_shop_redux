import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Navbar() {
    const cartCount = useSelector((state) => state.cart.cart?.length || 0);

    return (
        <nav style={{display: "flex", gap: "20px", marginBottom: "20px"}}>
            <Link to="/">Products</Link>
            <Link to="/cart">Cart ({cartCount})</Link>
        </nav>
    )
}

export default Navbar;