import { CartWidget } from './../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'


export const NavBar = () => {
    const [prodNav, setProdNav] = useState([]);

    useEffect(() => {
        const dataBase = getFirestore();
        const refDoc = collection(dataBase, "item");

        getDocs(refDoc).then(snapshot => {
            if (snapshot.size === 0) {

            } else {
                const category = snapshot.docs.map(
                    prod => prod.data().categoryId
                )
                const uniqueCategory = new Set(category)
                setProdNav([...uniqueCategory].sort())
            }
        })
    }, [])

    console.log(prodNav);

    return (
        <header>
            <div>
                <NavLink className="nav-link" to={`/`}><h1>Tienda SIM!</h1></NavLink>
            </div>
            <div>
                <nav className="me-auto">
                    {prodNav.map(item => (
                        <NavLink className="nav-link" key={item} to={`/category/${item}`}>
                            {item}
                        </NavLink>))}
                </nav>
            </div>
            <CartWidget />
        </header>
    )
}


