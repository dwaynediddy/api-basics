import { useState, useEffect } from 'react'
import axios from 'axios'

const getUserInfo = `https://jsonplaceholder.typicode.com/users?_limit=10`

const FetchWithAxiosStepTwo= () => {
    const [user, setUser] = useState(null)
    const [ loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(getUserInfo)
                setUser(res.data)
                setError(null)
            } catch (e) {
                setError('error')
                setUser(null)
            } finally {
                setLoading(false)
            }
        }
        getUser()
    }, [])

    return (
        <div>
        <h1>API Posts</h1>
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data `}</div>
        )}
        <ul>
          {user &&
            user.map(({ id, name, email }) => (
              <li key={id}>
                <h3>{name}</h3>
                <p>{email}</p>
              </li>
            ))}
        </ul>
      </div>
    )
}

export default FetchWithAxiosStepTwo