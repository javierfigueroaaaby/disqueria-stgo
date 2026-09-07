import type { Product } from '../../data/products'
import './ProductCard.css'
import { useState } from 'react'


interface ProductCardProps {
    product: Product
}

function ProductCard({product}: ProductCardProps) {
    const [indice, setIndice] = useState(0)
    const max = product.images.length - 1
    const prev = () => setIndice(i => Math.max(0, i - 1))
    const next = () => setIndice(i => Math.min(max, i + 1))
    const [qty, setQty] = useState(1)
    const minus = () => setQty(qty-1)
    const plus = () => setQty(qty+1)

    return (<article className='stgo-product-item'>
                <div className='stgo-product-img'>
                    <img src={product.images[indice]} />
                    <div className='stgo-img-nav'>
                        <button className='stgo-img-nav-prev' onClick={prev} disabled={indice === 0}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <button className='stgo-img-nav-next' onClick={next} disabled={indice === max}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>                
                <div className="stgo-product-info">
                    <h3 className='stgo-product-title'>{product.name}</h3>
                    <div className='stgo-product-artist'>{product.artist}</div>
                    <div className='stgo-product-category'>{product.category}</div>
                    <div className='stgo-product-price'>{product.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</div>
                    <div className="stgo-product-qty">
                        <button className="qty-minus" onClick={minus} disabled={qty === 1}>-</button>
                        <span className="qty-txt">{qty}</span>
                        <button className="qty-plus" onClick={plus}>+</button>
                    </div>
                </div>
            </article>)
}

export default ProductCard