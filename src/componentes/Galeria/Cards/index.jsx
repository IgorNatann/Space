import React from 'react'
import open from './open.png'
import favorito from './favorito.png'

export default function Cards({styles, itens}) {
    return (
        <ul className={styles.galeria__cards}>
            {itens.map((item) => {
                return (
                    <li key={item.id} className={styles.galeria__card}>
                        <img
                            className={styles.galeria__imagem}
                            src={item.imagem}
                            alt={item.titulo}
                        />
                        <p className={styles.galeria__descricao}>{item.titulo}</p>
                        <div>
                            <p>{item.creditos}</p>
                            <span>
                                <img src={open} alt="Ícone de abrir modal" />
                                <img src={favorito} alt="Ícone coração de curtir" />
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
