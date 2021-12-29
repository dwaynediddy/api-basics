import { useState, useEffect } from 'react'
import axios from 'axios'

const getQuote = 'https://api.quotable.io/random?minLength=100&maxLength=140'

const Fetch = () => {
    // state to store on data return
    const [ data, setData ] = useState(null)
    //provide a state if data doesnt load to improve UX
    const [loading, setLoading] = useState(true)
    // create a state if an error occurs
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(getQuote)
        .then((response) => {
            
        })
    })

const Axios = () => {
    return (
        <div>
            
        </div>
    )
}

export default Axios
