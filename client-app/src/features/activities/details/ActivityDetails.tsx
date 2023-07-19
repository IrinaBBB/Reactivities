import { Activity } from '../../../app/models/activity'

interface Props {
    selectedActivity: Activity | undefined
    cancelSelectedActivity: () => void
    openForm: (id: string) => void
}

function ActivityDetails({ selectedActivity, cancelSelectedActivity, openForm }: Props) {
    return (
        <>
            {selectedActivity && (
                <div className="ui card fluid">
                    <div className="image">
                        <img
                            src={`/assets/categoryImages/${selectedActivity.category}.jpg`}
                            alt={selectedActivity.title}
                        />
                    </div>
                    <div className="content">
                        <div className="header">{selectedActivity.title}</div>
                        <div className="meta">
                            <span>{selectedActivity.date}</span>
                        </div>
                        <div className="description">
                            {selectedActivity.description}
                        </div>
                    </div>
                    <div className="extra content">
                        <div className="ui buttons fluid">
                            <button onClick={() => openForm(selectedActivity.id)} className="ui basic blue button">
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
