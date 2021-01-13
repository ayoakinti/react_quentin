import { Link } from "react-router-dom";

function ProductCard(props) {

  return (
    <div className="mb-4 rounded">
        <img src={props.product.images[0].imageUrl} alt={props.product.name}></img>
      {/* <div style={{"backgroundImage": `url('${props.product.images[0].imageUrl}')`}} className="h-64 w-full"></div> */}
      <h1>{props.product.name}</h1>
      <h1>{props.product.price}</h1>
      <h1>{props.product.description}</h1>
      <Link to={`/product/${props.product.id}`}>
        <div className="bg-blue-500 w-full text-center p-3 rounded">
          View Product
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
