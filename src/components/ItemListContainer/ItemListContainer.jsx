import { useState, useEffect } from "react";
import { ItemList } from './../ItemList/ItemList'
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { dataBase } from "../../services/config";



const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    const { categoryId } = useParams();


    useEffect(() => {
        const misProductos = categoryId ? query(collection(dataBase, "item"), where("categoryId", "==", categoryId)) : collection(dataBase, "item");

        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProductos(nuevosProductos);
            })
            .catch(error => console.log(error))
    }, [categoryId])


    return (
        <>
            <h2> {props.greeting} </h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer