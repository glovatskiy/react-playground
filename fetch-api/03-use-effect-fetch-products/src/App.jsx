import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    const loadProducts = async () => {
      const loadedProducts = await getProducts();
      setProducts(loadedProducts);
      setLoading(false);
    };
    loadProducts();
  }, []);

  return (
    <>
      <h1>Products:</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <p
            key={product.id}
          >Product: {product.title}, Price: ${product.price}</p>
        ))
      )}
    </>
  );
}

export default App;
