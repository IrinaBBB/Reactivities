import { Grid, GridColumn, List } from 'semantic-ui-react'
import React from 'react'
import { Activity } from '../../../app/models/activity'
import ActivityList from './ActivityList'
import ActivityDetails from '../details/ActivityDetails'
import ActivityForm from '../form/ActivityForm'

interface Props {
    activities: Activity[]
    selectedActivity: Activity | undefined
    setSelectedActivity: (id: string) => void
    cancelSelectedActivity: () => void
    editMode: boolean
    openForm: (id: string) => void
    closeForm: () => void
    createOrEdit: (activity: Activity) => void
    deleteActivity: (id: string) => void
}

function ActivityDashboard({
    activities,
    selectedActivity,
    setSelectedActivity,
    cancelSelectedActivity,
    editMode,
    openForm,
    closeForm,
    createOrEdit,
    deleteActivity,
}: Props) {
    return (
        <>
            <Grid>
                <GridColumn width={10}>
                    <List>
                        <ActivityList
                            activities={activities}
                            setSelectedActivity={setSelectedActivity}
                            deleteActivity={deleteActivity}
                        />
                    </List>
                </GridColumn>
                <GridColumn width={6}>
                    {selectedActivity && !editMode && (
                        <ActivityDetails
                            selectedActivity={selectedActivity}
                            cancelSelectedActivity={cancelSelectedActivity}
                            openForm={openForm}
                        />
                    )}
                    {editMode && (
                        <ActivityForm
                            closeForm={closeForm}
                            selectedActivity={selectedActivity}
                            createOrEdit={createOrEdit}
                        />
                    )}
                </GridColumn>
            </Grid>
        </>
    )
}

export default ActivityDashboard
