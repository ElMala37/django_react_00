import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router';

const AddProduct = () => {

    const [image,setImage] = useState(null)
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")
    const [category,setCategory] = useState("")

    const navigate = useNavigate();

    const AddProductInfo = async () => {
        let formField = new FormData()

        //same names as django database fields
        formField.append('name',name)
        formField.append('price',price)
        formField.append('description',description)
        formField.append('category',category)
        if (image!=null){
            formField.append('image',image)
        }

        await axios ({
            method:'post',
            url:'http://127.0.0.1:8000/api/',
            data: formField
        }).then((response)=>{
        console.log(response.data);
        navigate('/')
        }
        )
    }

    return(
        <div className="container">

            <h1>Add Product</h1>
            <div className="form-group">

                <div className="form-group">
                    <label>Select image to upload</label>
                    <input
                        type="file"
                        className="form-control form-control-lg"
                        placeholder="Enter product image"
                        name="image"
                        onChange={(e)=> setImage(e.target.files[0])}//on met [0] pour que l'utilisateur ne puisse selectionner qu'une image
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter product name"
                        name="name"
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter product price"
                        name="price"
                        value={price}
                        onChange={(e)=> setPrice(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter product description"
                        name="description"
                        value={description}
                        onChange={(e)=> setDescription(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter product category"
                        name="category"
                        value={category}
                        onChange={(e)=> setCategory(e.target.value)}
                    />
                </div>
                <button type="btn btn-success" onClick={AddProductInfo}>Add product</button>
            </div>
        </div>
    );
};

export default AddProduct;