import { useState, useEffect } from 'react'

const getQuote = `https://jsonplaceholder.typicode.com/posts?_limit=8`

const Fetch = () => {
    // state to store on data return
    const [ data, setData ] = useState(null)
    //provide a state if data doesnt load to improve UX
    const [loading, setLoading] = useState(true)
    // create a state if an error occurs
    const [error, setError] = useState(null)


    // perform a side effect that can generate different outputs for the same data fetching
    //isolating
useEffect(() => {
  const getData = async() => {
    try {
      const response = await fetch(getQuote)
      if(!response.ok) {
        throw new Error("HTTP error")
      }
      let actualData = await response.json()
      console.log(response)
      setData(actualData)
      setError(null)
      setLoading(false)
    } catch(err){
      setError(err.message)
      setData(null)
    }
  }
  getData()
}, [])


    return (
      <div>
      <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, title }) => (
            <li key={id}>
              <h3>{title}</h3>
            </li>
          ))}
      </ul>
    </div>
    )
}

export default Fetch
