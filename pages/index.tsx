import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }) => setProductList(data));
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Hola Mundo</h1>
      {productList.map(product => {
        return <div key={product.id}>{product.name}</div>
      })}
    </div>
  )
}
