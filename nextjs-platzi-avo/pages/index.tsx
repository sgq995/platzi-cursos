import Link from 'next/link';
import { useState } from 'react'
import useMountFetch from '../hooks/useMountFetch';

import styles from '../styles/Home.module.css'

export default function Home() {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useMountFetch('/api/avo', ({ data }) => setProductList(data));

  return (
    <div className={styles.container}>
      <h1>Hola Mundo</h1>
      {productList.map(product => {
        return (
          <div key={product.id}>
            {product.name}
            <Link href={`/product/${product.id}`}>Go</Link>
          </div>
        );
      })}
    </div>
  )
}
