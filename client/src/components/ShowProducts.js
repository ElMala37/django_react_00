import axios from 'axios';
import React, {useState, useEffect} from 'react';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ShowProducts = () => {

    const [products,setProducts] = useState([])

    const getProducts = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        //console.log(response.data)
        setProducts(response.data)
    }

    useEffect(()=> {
        getProducts();
    },[]        
    )

    return(
        <div>
            <div className="products-card-info">
            {
                products.map((product,index)=>(
                    <Card className="m-2 rounded shadow-lg" style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text className="product-price-info">${product.price}</Card.Text>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text className="product-category-info">{product.category}</Card.Text>
                        <Link className="btn btn-primary" to={`/${product.id}/`}>Detail</Link>
                    </Card.Body>
                    </Card>
                )  
                )
            }
        </div>

        </div>
        
    );
};

export default ShowProducts;