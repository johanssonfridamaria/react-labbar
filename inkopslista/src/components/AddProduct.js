import React, {useRef} from 'react'

const AddProduct = ({setProductsCallback}) => {
  
  const productName = useRef();
  
  const addProduct = (e) => {
    e.preventDefault();

    if(productName.current.value === '')
    return
    setProductsCallback(productName.current.value)
    productName.current.value = '';
  } 
  
  
  return (
    <div className="add-product">
      <input type="text" ref={productName}/>
      <button onClick={addProduct}>Lägg till</button>
    </div>
  )
}

export default AddProduct
