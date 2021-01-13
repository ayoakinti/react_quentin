import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Home() {
  const url = `https://5ffe5af9d9ddad0017f69000.mockapi.io/api/v1/products?page=1&limit=10`;

  let Products = useAxiosGet(url);
  

  let content = null;

  if (Products.error) {
    content = (
      <p>Sorry, there was an error. Please try again some other time</p>
    );
  }

  if (Products.loading) {
    content = <Loader />;
  }

  if (Products.data) {
    content = Products.data.map((product) => 
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    )
  }

  return (
    <div className="p-3">
      <h1>This is the home page</h1>
      {/* <HelloWorld name="Ayomide" /> */}
      {content}
    </div>
  );
}

export default Home;
