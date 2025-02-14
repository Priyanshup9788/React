
import ProductList from "./components/ProductList";


function App() {

  const products = [
    {
      id: 1,
      title: "Laptop",
      description: "Description for product 1 highlighting key features.",
      price: 29.99,
      image: "src/assets/images/laptop.avif",
      inStock: true
    },
    {
      id: 2,
      title: "Mobile",
      description: "Description for product 2 with unique selling points.",
      price: 39.99,
      image: "src/assets/images/mobile.jpg",
      inStock: false
    },
    {
      id: 3,
      title: "Car",
      description: "Description for product 3 showcasing benefits.",
      price: 49.99,
      image: "src/assets/images/car.jpg",
      inStock: true
    }
  ];

  return (
    <>
      <ProductList products={products} />
    </>
  )
}



export default App
