import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err));
  }, [id]);

  if (!product) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h3>Product Details</h3>
      <h4>{product.title}</h4>
      <h4>{product.price}</h4>
      <h4>{product.category}</h4>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
