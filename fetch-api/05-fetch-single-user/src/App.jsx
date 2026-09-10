import { useEffect, useState } from "react"
function App() {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const getUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    if (!response.ok) {
      throw new Error("Cannot load user")
    }
    const data = await response.json()
    return data
  }
  useEffect(() => {
    const showData = async () => {
      try {
        const loadedUser = await getUser();
        setUser(loadedUser);
      } catch (error) {
        setError(error.message)
      }
    }
    showData()
  }, [])
  console.log(user);
  return (
    <>
      <h1>User:</h1>
      {error ? (<h2>{ error}</h2>):(user ? (<>
        <h2>{user.name}</h2>
        <p>Company: {user.company.name}</p>
        <p>Phone: {user.phone}</p>
      </>) : (<h2>Loading...</h2>))}
    </>
  )
}

export default App
