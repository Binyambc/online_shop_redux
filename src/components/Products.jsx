import { useEffect } from "react";
import { useSelector } from "react-redux"; 
import { useAppDispatch } from "../hooks/hooks";
import { addToCart, fetchProducts } from "../store/productSlice";

const Products = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    console.log("products: ", products);

    return (<div>
            <h2>Products</h2>
            {products.length > 0 ? (
                <ul>
                {products.map((product) => (
                    <li key={product.id}>
                    <strong>{product.title}</strong> 
                    <br />
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        width="100"
                        style={{ borderRadius: "8px" }}
                    />  
                    <br />
                        ${product.price}
                        <br />
                        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                    </li>
                ))}
                </ul>
            ) : (
                <p>No products loaded</p>
            )}
    
        </div>)
};

export default Products;