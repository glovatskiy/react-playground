import { useEffect, useState } from "react"
function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json()
    return data;
  }
  useEffect(() => {
    async function loadUsers() {
      const usersData = await getUsers();
      setUsers(usersData)
      setLoading(false);
    }
    loadUsers()
  }, [])
  return (
    <>
      <h1>Users:</h1>
      {loading ? <p>Loading ...</p>:users.map(user => <p key={user.id}>{ user.name}</p>)}
    </>
  )
}

export default App
