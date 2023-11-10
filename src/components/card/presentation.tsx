import { FC } from 'react'
import styles from './style.module.scss'
import { CardOpts } from './card.types'
import { Header } from '../header'
export const Presentation: FC<CardOpts> = ({tweet}) => {
    return (
        <>
            <article className={styles.card}>
                <Header />
                {tweet}
            </article>
        </>
    )
}