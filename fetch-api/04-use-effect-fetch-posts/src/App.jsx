import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true)
  const getPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      if (!response.ok) {
        throw new Error("Cannot load posts")
      }
      const data = await response.json()
      return data;
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    const loadPosts = async () => {
      const loadedPosts = await getPosts()
      setPosts(loadedPosts)
      setLoading(false)
    }
    loadPosts()
  },[])

  return (
    <>
      <h1>Posts:</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </>
  );
}

export default App
