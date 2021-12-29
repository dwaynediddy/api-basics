import { useState, useEffect } from 'react'

const getQuote = 'https://api.quotable.io/random?minLength=100&maxLength=140'

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
        // data fetching here
        // .get is default, so its not needed
        // fetch.get(getQuote)
        fetch(getQuote)
        .then((response) => {
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            return response.json();
          })
        .then(actualData => console.log(actualData))
        // catch will manually handle errors the promise wont reject / non network failures
        .catch(error => console.log(error))
    },[])


    return (
        <div>
            
        </div>
    )
}

export default Fetch
