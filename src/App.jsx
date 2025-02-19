import "./App.css";
import Button from "./Component/Button";
import ProductCard from "./Component/ProductCard";
import Counter from "./Component/Counter";
import Home from "./Component/Counter";
import About from "./Component/Counter";
function App()
{
  const products = [
    {
    id: 1,
    name: "Laptop",
    price: 5000000,
  },
  {
    id: 2,
    name: "Mobile",
    price: 7000000,
  },
  ];
  return (
    <BrowserRouter>
    <Router>
      <Route path="/"element={<Home />}> />
      <Route path="/about" element={<About />}> />
      <Router></Router>
      
          <p>hello geeta how are you..?
      good morning
    </p>
    <Button></Button>
    {products.map((product) => (
    <ProductCard
    key={product.id}
    name={product.name}
    price={product.price}
    />
    ))}
    {/* <ProductCard name="Laptop" price={500000} />
    <ProductCard name="Mobile" price={7000000} /> */}
    <Counter />
    </>
  );
};

export default App;