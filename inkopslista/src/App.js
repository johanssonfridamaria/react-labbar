import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import AddProduct from './components/AddProduct';
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

  // const [doneProducts, setDoneProducts] = useState([])

  const setProductsCallback = productName => {
    console.log(productName)
    setProducts(prevProducts => {
      return [
        { id: uuidv4(), name: productName, completed: false },
        ...prevProducts
      ]
    })
  }

  const removeProductCallback = id => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id))
  }

  const editProductCallback = (id, newName) => {
    setProducts(prevProducts => {
      return prevProducts.map(product => {
        if (product.id === id) {
          product.name = newName
          return product
        }
        return product
      })
    })
  }

  const toogleCompleteCallback = id => {
    let newProducts = products.map(product => {
      if (product.id === id) {
        product.completed = !product.completed
        return product
      }
      return product
    })
    setProducts(newProducts)
  }

  // const setDoneProducts = 

  return (
    <div className="app">
      <div className="card">
        <h1>Inköpslista</h1>
        <AddProduct setProductsCallback={setProductsCallback} />
        <div className="list">
          <h2>Att köpa:</h2>
          <ShoppingList products={products.filter(product => !product.completed)} removeProductCallback={removeProductCallback} editProductCallback={editProductCallback} toogleCompleteCallback={toogleCompleteCallback} />
        </div>
        <div className="list">
          <h2>I varukorgen:</h2>
          <ShoppingList products={products.filter(product => product.completed)} removeProductCallback={removeProductCallback} editProductCallback={editProductCallback} toogleCompleteCallback={toogleCompleteCallback} />
        </div>
      </div>
    </div>
  );
}

export default App;
