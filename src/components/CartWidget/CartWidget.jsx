import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

export const CartWidget = () => {
    const {cantidadTotal} = useContext(CartContext);
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";
    return (
        <div>
            <Link to="/cart">
                <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
                {
                    cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                }
            </Link>
        </div>
    )
}
