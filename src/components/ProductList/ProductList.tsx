import type { Product } from '../../data/products'
import './ProductList.css'
import ProductCard from '../ProductCard/ProductCard'

type ProductListProps = {
    products: Product[]
}

function ProductList({products} : ProductListProps) {
    return (
            <div className='stgo-products-grid'>
                {products.map((product) => (
                    <ProductCard product={product} key={product.id}></ProductCard>
                ))}
            </div>)
}

export default ProductList