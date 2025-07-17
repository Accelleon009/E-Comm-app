import { useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  const [products] = useState([
    {

      id: 1,
      name: 'Hoodie',
      price: 99.99,
      description: 'Training to beat hero X huh? Make sure you have your protective armor hoodie to stand a chance.',
      category: 'Clothing',
      image: 'https://sdmntpraustraliaeast.oaiusercontent.com/files/00000000-ec48-61fa-bf3a-80bc4f399a6f/raw?se=2025-06-25T22%3A32%3A14Z&sp=r&sv=2024-08-04&sr=b&scid=b9d1a5ef-d502-512b-9ef0-8e057ff82e8c&skoid=a3412ad4-1a13-47ce-91a5-c07730964f35&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-25T11%3A17%3A00Z&ske=2025-06-26T11%3A17%3A00Z&sks=b&skv=2024-08-04&sig=Tugm0rc0ZI1fhWRUVGKkDb9vHpdQFZIay6da9/rRfR0%3D'
    },
    {
      id: 2,
      name: 'Sneakers',
      price: 150.99,
      description: 'Want to be Hero X? Make sure to buy a pair of Aura farming kicks to start off. ',
      category: 'Footwear',
      image: 'https://sdmntprwestus.oaiusercontent.com/files/00000000-545c-6230-bbf8-91e195f537c8/raw?se=2025-06-25T23%3A14%3A35Z&sp=r&sv=2024-08-04&sr=b&scid=0992ea45-2970-54df-bf23-57cf9df9d1b5&skoid=5c72dd08-68ae-4091-b4e1-40ccec0693ae&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-25T12%3A27%3A30Z&ske=2025-06-26T12%3A27%3A30Z&sks=b&skv=2024-08-04&sig=8cWj1B8cyY0fpQOjqI0aESBfX26fpwsKZvQrqLrAzaQ%3D'
    },
    {

    id: 3,
    name: 'Backpack',
    price: 120.99,
    description: 'Durable and spacious backpack fit for any and all situations.',
    category: 'Accessories',
    image: 'https://sdmntpreastus.oaiusercontent.com/files/00000000-a508-61f9-a028-16020ef05608/raw?se=2025-06-25T23%3A14%3A35Z&sp=r&sv=2024-08-04&sr=b&scid=b4f79354-ff5f-5097-8da4-7a4ed0be1ed9&skoid=5c72dd08-68ae-4091-b4e1-40ccec0693ae&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-25T20%3A10%3A23Z&ske=2025-06-26T20%3A10%3A23Z&sks=b&skv=2024-08-04&sig=tpTlVK5hiwfx1mBsJmuLRgNSN9lbRLHYhI9HADHdVEY%3D'
    }   
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState([]);

  const handleCategoryChange =(e) => {
    setSelectedCategory(e.target.value);
  };

  const handleAddToCart = (product) => {
    setCartItems([ ...cartItems, product]);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems ([]);
  };


  const filteredProducts =
  selectedCategory === 'All'
  ? products
  : products.filter(product => product.category === selectedCategory);

  return (
    <div className="app">
      <h1> To Be Hero X Store</h1>

      <p><strong>Cart Items:</strong> {cartItems.length}</p>

      <label htmlFor="catergory-filter">Filter by Category: </label>
      <select id= "category-filter" onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Clothing">Clothing</option>
        <option value="Footwear">Footwear</option>
        <option value="Accessories">Accessories</option>
      </select>

      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />

      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </li>

          ))}

        </ul>
      )}

     {cartItems.length> 0 && (
      <button onClick={handleClearCart} style={{ marginTop: '10px'}}>
        Clear Cart
      </button>
     )}
    </div>
  );
}




export default App;
