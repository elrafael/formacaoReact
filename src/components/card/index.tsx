import './index.scss'
import { FC } from 'react'
import { CardOpts } from './card.types'
import { Presentation } from './presentation'


export const Card: FC<CardOpts> = ({ tweet }) => {
    return <Presentation tweet={tweet} />
}
