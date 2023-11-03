import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.scss'
// import { Card } from './components/card'
import { Post } from './components/post'

// import { FooterActions } from './components/footer/FooterActions.tsx'

import axios from "axios";

const theme = {
  fg: "#BF4F74",
  bg: "white"
}

export interface PostType {
  id: number,
  title?: string,
  body?: string,
}

function App() {
  // const [count, setCount] = useState(0)
  // const [newTheme, setNewTheme] = useState(false)

  const [list, setList] = useState<PostType[]>([])

  async function loadData() {
    try {
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5')
      setList(result.data)
    } catch (error) {
      console.error(error)
    }

    // fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5')
    //   .then(response => response.json())
    //   .then(json => setList(json))
  }

  function newTweet() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => setList([...list, json]));
  }

  useEffect(() => {
    loadData()
  }, [])


  return (
    // <ThemeProvider theme={ newTheme ? darkTheme : defaultTheme}>
    <ThemeProvider theme={ theme }>

      {/* {list.map((tweet, index) => (
        <Card tweet={tweet} key={index} />
      ))} */}

      {list.map((post, index) => (
        <Post post={post} key={index} />
      ))}

      

      <button onClick={newTweet}>new tweet</button>

      {/* <FooterActions /> */}

    </ThemeProvider>
  )
}

export default App
