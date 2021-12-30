//the first step to fetching the data is to set up the state and the effect to get the data
// console logging the response will show the data in the console
//then you are able to see what data is available to then render to the page

import {useState, useEffect} from 'react'
import axios from 'axios'

const getUser = 'https://jsonplaceholder.typicode.com/users'

const FetchWithAxiosStepOne = () => {
    const [user, setUser] = useState(null)
    const [ loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // fetching with axois
        const res = axios.get(getUser)
        //will show results of api call in console
        .then((res) => console.log(res))
        return res
    })

    return (
        <div>
            
        </div>
    )
}

export default FetchWithAxiosStepOne

