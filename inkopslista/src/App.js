import './App.css';
import AddProduct from './components/AddProduct';
import BoughtProducts from './components/BoughtProducts';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div className="app">
      <div className="card">
        <h1>Inköpslista</h1>
        <AddProduct />
        <ShoppingList />
        <BoughtProducts />
      </div>
    </div>
  );
}

export default App;
