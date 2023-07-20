import { Segment } from 'semantic-ui-react'
import { SyntheticEvent, useState } from 'react'
import { useStore } from '../../../app/stores/store'
import { observer } from 'mobx-react-lite'

function ActivityList() {
    const { activityStore } = useStore()
    const {
        deleteActivity,
        activitiesByDate: activities,
        loading,
    } = activityStore
    const [target, setTarget] = useState('')

    function handleActivityDelete(
        event: SyntheticEvent<HTMLButtonElement>,
        id: string
    ) {
        setTarget(event.currentTarget.name)
        deleteActivity(id).then()
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
                                        activityStore.selectActivity(
                                            activity.id
                                        )
                                    }
                                >
                                    View
                                </button>
                                <button
                                    className={`ui red button right floated ${
                                        loading &&
                                        target === activity.id &&
                                        'loading'
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

export default observer(ActivityList)
