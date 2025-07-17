import ProductItem from './ProductItem';

function ProductList({ products, onAddToCart }) {
    return (
    <div className="product-list">
        {products.map(product => (
           <ProductItem 
           key={product.id} 
           product={product} 
           onAddToCart={() => onAddToCart(product)}/>
        ))}
    </div>  
    );
}

export default ProductList;