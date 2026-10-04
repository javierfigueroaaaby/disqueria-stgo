import { useEffect, useState } from 'react'
import type { Product } from '../../types/product'
import './ProductList.css'
import ProductCard from '../ProductCard/ProductCard'

type ProductListProps = {
  search: string
}

function ProductList({ search }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products')
        if (!response.ok) {
          throw new Error('Falló al obtener los productos')
        }
        const data = await response.json()
        setProducts(data.products)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido')
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <p>Cargando productos...</p>
  if (error) return <p>Error: {error}</p>
  if (filteredProducts.length === 0) return <p>No se encontraron productos.</p>

  return (
    <div className="stgo-products-grid">
      {filteredProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ProductList