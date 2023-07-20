import { useStore } from '../../../app/stores/store'
import LoadingComponent from '../../../app/layout/LoadingComponent'

function ActivityDetails() {
    const { activityStore } = useStore()
    const {
        selectedActivity: activity,
        openForm,
        cancelSelectedActivity,
    } = activityStore

    if (!activity) return <LoadingComponent />

    return (
        <>
            {activity && (
                <div className="ui card fluid">
                    <div className="image">
                        <img
                            src={`/assets/categoryImages/${activity.category}.jpg`}
                            alt={activity.title}
                        />
                    </div>
                    <div className="content">
                        <div className="header">{activity.title}</div>
                        <div className="meta">
                            <span>{activity.date}</span>
                        </div>
                        <div className="description">
                            {activity.description}
                        </div>
                    </div>
                    <div className="extra content">
                        <div className="ui buttons fluid">
                            <button
                                onClick={() => openForm(activity.id)}
                                className="ui basic blue button"
                            >
                                Edit
                            </button>
                            <button
                                onClick={cancelSelectedActivity}
                                className="ui basic grey button"
                                type="button"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ActivityDetails
