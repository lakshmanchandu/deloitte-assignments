import { useState } from "react";

function Product(){
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState(1);
    const [quantity, setQuantity] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);


    const ProductNameChange = (event) => {
        setProductName(event.target.value);
      };
    
      const PriceChange = (event) => {
        setPrice(parseFloat(event.target.value));
      };
    
      const QuantityChange = (event) => {
        setQuantity(parseInt(event.target.value, 10));
      };
    
      const calculateTotal = () => {
        setTotalAmount(price * quantity);
      };

    return(
      <>
      
      <fieldset>
                <legend>User Login</legend>
                Product Name  :    <input type="text" value={productName} onChange={ProductNameChange} />
                <br /><br />

                Unit Price  :    <input type="text" value={price} onChange={PriceChange}/>
                <br /><br />
                Quantity  :    <input type="text" value={quantity} onChange={QuantityChange}  />
                <br /><br />
                <button  onClick={calculateTotal}>Get Total</button>
               <p>Total Value : {totalAmount}</p>
            </fieldset>
      </>
    );
    
}

export default Product;