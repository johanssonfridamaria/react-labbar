import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import AddProduct from './components/AddProduct';
import BoughtProducts from './components/BoughtProducts';
import ShoppingList from './components/ShoppingList';

function App() {

  const [products, setProducts] = useState([
    {
      id: uuidv4(),
      name: 'Chips',
      completed: false,
    },
    {
      id: uuidv4(),
      name: 'Smördeg',
      completed: false,
    },
    {
      id: uuidv4(),
      name: 'Pesto',
      completed: false,
    },
    {
      id: uuidv4(),
      name: 'Fläskfilé',
      completed: false,
    },
    {
      id: uuidv4(),
      name: 'Bearnaise',
      completed: false,
    },
  ])

  const setProductsCallback = productName => {
    setProducts(prevProducts => {
      return [
        { id: uuidv4(), name: productName, completed: false },
        ...prevProducts
      ]
    })

  }


  return (
    <div className="app">
      <div className="card">
        <h1>Inköpslista</h1>
        <AddProduct setProductsCallback={setProductsCallback} />
        <ShoppingList products={products} />
        <BoughtProducts products={products} />
      </div>
    </div>
  );
}

export default App;
