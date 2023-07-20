import { Activity } from '../../../app/models/activity'
import { Segment } from 'semantic-ui-react'
import {SyntheticEvent, useState} from 'react'

interface Props {
    activities: Activity[]
    setSelectedActivity: (id: string) => void
    deleteActivity: (id: string) => void
    submitting: boolean
}

function ActivityList({
    activities,
    setSelectedActivity,
    deleteActivity,
    submitting,
}: Props) {
    const [target, setTarget] = useState('')

    function handleActivityDelete(event: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(event.currentTarget.name)
        deleteActivity(id)
    }

    return (
        <Segment>
            <div className="ui divided items">
                {activities.map((activity) => (
                    <div className="item" key={activity.id}>
                        <div className="content">
                            <div className="header">{activity.title}</div>
                            <div className="meta">
                                <span>{activity.date}</span>
                            </div>
                            <div className="description">
                                <p>{activity.description}</p>
                                <p>
                                    {activity.city}, {activity.venue}
                                </p>
                            </div>
                            <div className="extra">
                                <button
                                    className="ui blue button right floated"
                                    onClick={() =>
                                        setSelectedActivity(activity.id)
                                    }
                                >
                                    View
                                </button>
                                <button
                                    className={`ui red button right floated ${
                                        submitting && target === activity.id && 'loading'
                                    }`}
                                    onClick={(event) =>
                                        handleActivityDelete(event, activity.id)
                                    }
                                    name={activity.id}
                                >
                                    Delete
                                </button>
                                <div className="ui below label">
                                    {activity.category}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Segment>
    )
}

export default ActivityList
