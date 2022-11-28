import '../styles/Cart.css'
import { useState, useEffect } from 'react'


function Cart({ cart, updateCart }){
    //const monsteraPrice = 8
    // const ivyPrice = 10
    // const flowerPrice = 15
    const [isOpen, setIsOpen] = useState(false)
    const total = cart.reduce(
      (acc, plantType) => acc + plantType.amount * plantType.price, 0
    )
    useEffect(() => {
      document.title = `LMJ: ${total}€ d'achats`
    }, [total])


    return isOpen ? (
    <div className='lmj-cart'>
      <button 
      className="lmj-cart-toggle-button" 
      onClick={() => setIsOpen(false)}>Fermer</button>
      {cart.length > 0 ? (
      <div>
      <h2> Panier : </h2>
      <ul>
      {cart.map(({ name, price, amount}, index) => (
          <div key={`${name}-${index}`}>
            {name} {price}€ x {amount}
          </div>
        ))}
        </ul>
            {/* <ul>
              <li>Monstera : {monsteraPrice}€</li>
              <li>Lierre : {ivyPrice}€</li>
              <li>Bouquet de fleurs : {flowerPrice}€</li>
            </ul>
            Total : {monsteraPrice + ivyPrice + flowerPrice}€ */}
            <h3>Total : {total}€</h3>
            <button onClick={() => updateCart([])}>Vider le panier</button>
            </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
          </div>      
          ) : (
            <div className='lmj-cart-closed'>
            <button 
            className='lmj-cart-toggle-button' 
            onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
            </div>
          )
  }

  export default Cart