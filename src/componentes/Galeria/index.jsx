import React from 'react'
import fotos from './fotos.json'
import Tags from '../Tags'
import styles from './Galeria.module.scss'

import Cards from './Cards'

export default function Galeria() {
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags />
        <Cards itens={fotos} styles={styles} />
    </section>
  )
}
