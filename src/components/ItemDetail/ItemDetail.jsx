import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css'


import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';



const ItemDetail = ({ id, name, price, imgUrl, stock }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);


    const { agregarProducto } = useContext(CartContext);



    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        const item = { id, name, price };
        agregarProducto(item, cantidad);
    }

    return (
        <div className='contenedorItem'>
            <h2>Nombre: {name} </h2>
            <h3>Precio: {price} </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime numquam dolore natus ipsa molestiae facere assumenda. Voluptas omnis magni saepe, consequatur atque dolorem eius ipsum est quis porro neque quibusdam!</p>
            <img src={imgUrl} alt={name} />


            {
                agregarCantidad > 0 ? (<Link className='miBtn' to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
        </div>
    )
}

export default ItemDetail