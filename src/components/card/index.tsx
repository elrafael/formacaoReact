// import { Header } from '../header'
import { Post } from '../post'
// import { Footer } from '../footer'
import './index.scss'
import { PostType } from '../../App'

interface Post  {
    tweet: PostType
}


export function Card({tweet}: Post) {
    return (
        <div >
            <h1>{tweet.title}</h1>
            <p>{tweet.body}</p>
        </div>
    )
    // return (
    //     <>
    //         <div className="card">
    //             <Header />
    //             <Post />
    //             <Footer />
    //         </div>
    //     </>
    // )
}
