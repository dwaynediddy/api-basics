import { useState, useEffect } from 'react'
import axios from 'axios'

const FetchFromGraphQl = () => {
    const [launchData, setLaunchData] = useState(null)
    const queryData = `
        {
            launchesPast(limit: 8) {
                mission_name
                id
              }
        }
    `
    useEffect(() => {
        const getSpaceLaunchData = async () => {

            const response = await axios.post(`https://api.spacex.land/graphql/`,
            {query: queryData}
            )
            console.log(response)
            setLaunchData(response.data.data.launchesPast)
        }
        getSpaceLaunchData()
    }, [])
        


    return (
        <div>
      <h1>API Posts</h1>
      <ul>
        {launchData &&
          launchData.map(({ id, mission_name }) => (
            <li key={id}>
              <h3>{mission_name}</h3>
            </li>
          ))}
      </ul>
    </div>
    )
}

export default FetchFromGraphQl
