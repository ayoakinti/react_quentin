import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Product() {
  const { id } = useParams();
  const url = `https://5ffe5af9d9ddad0017f69000.mockapi.io/api/v1/products/${id}`;
  
  let Product = useAxiosGet(url)

  let content = null;

  if(Product.error) {
    content = <p>Sorry, there was an error. Please try again some other time</p>
}

  if(Product.loading) {
      content = <Loader />
  }

  if (Product.data) {
    content = (
      <div className="p-3">
        <h1 className="font-bold">{Product.data.name}</h1>
        <img src={Product.data.images[0].imageUrl} alt={Product.data.name}></img>
        <h2>{Product.data.price}</h2>
        <p>{Product.data.description}</p>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;
