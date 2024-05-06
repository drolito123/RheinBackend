import { useContext, useState, useEffect } from "react";
import { dataContext } from "../context/dataContext";
import axios from "axios";

import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const { buyProducts } = useContext(dataContext);

  useEffect(() => {
    axios.get("http://localhost:8080/remeras")
      .then((res) => {
        console.log("Data from server:", res.data);
        if (Array.isArray(res.data)) {
          setData(res.data);
        } else {
          console.error("Invalid data format from server");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="productCards">
      {data.map((product) => (
        <div className="card" key={product.id}>
          <img className="Imagen" src={product.img} alt="img-product-card" />
          <h3>{product.name}</h3>
          <h4>{product.price}$</h4>
          <button onClick={() => buyProducts(product)}>Buy</button>
        </div>
      ))}
    </div>
  );
};

export default Products;