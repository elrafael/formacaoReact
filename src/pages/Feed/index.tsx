/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { loadPosts } from "../../services/loadPosts";
import { Card } from "../../components/Card";

export function Feed() {
    const [list, setList] = useState([])

    const posts = async () => {
        const results = await loadPosts()
        setList(results.data)
    }

    useEffect(() => {
        posts()
    })

    return (
        <div>
            {list.map((tweet: any, index) => (
                <Card tweet={tweet.title} key={index} />
            ))}
        </div>
    )
}