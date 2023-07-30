import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, price, imgUrl, stock }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={imgUrl} alt={name} />
            <h3>Nombre: {name} </h3>
            <p>Precio:{price} </p>
            <p>Stock: {stock} </p>
            <Link className='miBtn' to={`/item/${id}`} > Ver Detalles </Link>
        </div>
    )
}

export default Item