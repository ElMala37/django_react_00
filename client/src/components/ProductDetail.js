import React,{useState,useEffect}from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {

    const [product, setProduct] = useState("")

    const { id } = useParams();

    

    useEffect(()=> {
        const getSingleProduct = async () => {
            const {data} = await axios.get(`http://127.0.0.1:8000/api/${id}`)//ne pas mettre de cote mais des alt+7 `...`
            setProduct(data)
        }
        getSingleProduct()
        //mettre la fonction à l'interieur permet d'enlever le warning
    },[id]//mettre l'id comme élément déclencheur enleve egalement le warning        
    )

    return (
        <div>
            <h1>Product detail</h1>
            <div className="single-product-info">
                <img src={product.image} height="400" width="250" alt={product.name}/>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <Link className="btn btn-primary m-2" to={`/${product.id}/update`}> Update </Link>
                <Link className="btn btn-danger m-2"> Delete </Link>
            </div>
        </div>
    );
};

export default ProductDetail;