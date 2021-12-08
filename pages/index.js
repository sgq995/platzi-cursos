import Navbar from '../components/Navbar/Navbar'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Hola Mundo</h1>
    </div>
  )
}
