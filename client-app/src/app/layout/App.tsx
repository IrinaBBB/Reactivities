import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Header, List, ListItem} from 'semantic-ui-react'

function App() {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/activities').then((response) => {
            setActivities(response.data)
        })
    }, [])

    return (
        <>
            <Header as="h2" icon="users" content="Reactivities" />
            <List>
                {activities.map((activity) => (
                    // @ts-ignore
                    <ListItem key={activity.id}>{activity.title}</ListItem>
                ))}
            </List>
            <button className="ui button">
                Cancel
            </button>
        </>
    )
}

export default App
