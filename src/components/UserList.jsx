import React from 'react'

const UserList = () => {
  const [users, setUsers] = React.useState(() => [])

  const memoisedFetch = React.useCallback(() => {
    fetch(url)
      .then(
        response => {
          // console.log(response)
          return response.json()
        }
      )
      .then(data => {
        // console.log(data)
        setUsers(data)
      })
      .catch(e => {
        throw new Error(e)
      })
  }, [])

  const useFetch = (url) => {
    React.useEffect(() => {
      memoisedFetch(url)
    }, [url])
  }

  const url = 'http://localhost:9000/users'
  // component mounted
  useFetch(url)
  

  return (
    <div>
      <h1>User list</h1>
      <ul>
        {users.map(user => 
          <li key={user.id}>{user.name}, {user.id}</li>
        )}        
      </ul>
    </div>
  )
}

export default UserList