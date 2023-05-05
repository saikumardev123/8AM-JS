import logo from './logo.svg';
import './App.css';
import Products from './Containers/Products';
import ProductsDisplay from './Containers/ProductsDisplay';

function App() {
  return (
    <div className="App">
      <Products></Products>
      <ProductsDisplay></ProductsDisplay>
    </div>
  );
}

export default App;
