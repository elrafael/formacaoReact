//import './index.scss'
import { PostType } from '../../App'
import styles from './index.module.scss' //pode ser css ou sass

interface Post {
    post: PostType
}


import {
    PostContent
} from './post.styled'


export function Post({post}: Post) {
    return(
        <>
            <PostContent className={styles.article}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </PostContent>
            {/* <article className={styles.article}>
                <p>Welcome to the Koo family 🙂</p>
                <p>1. Follow people you like by clicking on the '+ Follow' button to see their posts in your feed.</p>
                <p>2. Share your thoughts with others and gain a following.</p>
                <p>Happy Koo to you!</p>
            </article>
            <div className="video">
                <img src="/video-preview.png" alt="" />
            </div> */}
        </>
    )
}