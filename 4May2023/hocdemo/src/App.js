import logo from './logo.svg';
import './App.css';
import UsersHOC from './Users';
import ProductsHOC from './Products';
import SellersHOC from './Sellers';


function App() {
  return (
    <div className="App">

      <UsersHOC></UsersHOC>
      <ProductsHOC></ProductsHOC>
      <SellersHOC></SellersHOC>

    </div>
  );
}

export default App;
