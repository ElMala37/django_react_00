import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const UpdateProduct = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const load = async () => {
      const { data } = await axios.get(`http://localhost:8000/api/${id}/`);
      console.log(data)
      setImage(data.image);
      setName(data.name);
      setPrice(data.price);
      setDescription(data.description);
      setCategory(data.category);
    };
    load();
  }, [id]);

  const UpdateProductInfo = async () => {
    let formField = new FormData()

    //same names as django database fields
    formField.append('name',name)
    formField.append('price',price)
    formField.append('description',description)
    formField.append('category',category)
    formField.append('image',image)
    
    await axios ({
        method:'PUT',
        url:`http://localhost:8000/api/${id}/`,
        data: formField
    }).then((response)=>{
    console.log(response.data);
    navigate("/")
    }
    )
}

  return (
    <div>
      <h1>Update page</h1>
      <div className="form-group">
        <img src={image} height={300} width={200} alt={name}/>
        <div className="form-group">
          <label>Select image to upload</label>
          <input
            type="file"
            className="form-control form-control-lg"
            placeholder="Enter product image"
            name="image"
            onChange={(e) => setImage(e.target.files[0])} //on met [0] pour que l'utilisateur ne puisse selectionner qu'une image
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter product name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter product price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter product description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter product category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button type="btn btn-success" onClick={UpdateProductInfo}>
          Update product
        </button>
      </div>
    </div>
  );
};

export default UpdateProduct;
