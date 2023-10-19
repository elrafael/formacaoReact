import { Header } from '../header'
import { Post } from '../post'
import { Footer } from '../footer'
import './index.scss'




export function Card() {
    return (
        <>
            <div className="card">
                <Header />
                <Post />
                <Footer />
            </div>
        </>
    )
}
