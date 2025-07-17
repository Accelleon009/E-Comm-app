 

 function ProductItem({ product, onAddToCart}) {
    return (
        <div className="Product-item">
         <img src={product.image} alt={product.name} width="150"/>
         <h2>{product.name}</h2>
         <p><strong>Price:</strong> ${product.price}</p>
         <p>{product.description}</p>
         <button onClick= {onAddToCart}> Add to Cart</button>
        </div>
    );
 }

export default ProductItem;