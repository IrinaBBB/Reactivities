import { Form, FormInput, FormTextArea, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import { ChangeEvent, useState } from 'react'

interface Props {
    selectedActivity: Activity | undefined
    closeForm: () => void
    createOrEdit: (activity: Activity) => void
    submitting: boolean
}

function ActivityForm({ selectedActivity, closeForm, createOrEdit, submitting }: Props) {
    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: '',
    }

    const [activity, setActivity] = useState(initialState)

    function handleSubmit() {
        createOrEdit(activity)
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target
        setActivity({ ...activity, [name]: value })
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <FormInput
                    placeholder="Title"
                    value={activity.title}
                    name="title"
                    onChange={handleInputChange}
                />
                <FormTextArea
                    placeholder="Description"
                    value={activity.description}
                    name="description"
                    onChange={handleInputChange}
                />
                <FormInput
                    placeholder="Category"
                    value={activity.category}
                    name="category"
                    onChange={handleInputChange}
                />
                <FormInput
                    placeholder="Date"
                    value={activity.date}
                    name="date"
                    type="date"
                    onChange={handleInputChange}
                />
                <FormInput
                    placeholder="City"
                    value={activity.city}
                    name="city"
                    onChange={handleInputChange}
                />
                <FormInput
                    placeholder="Venue"
                    value={activity.venue}
                    name="venue"
                    onChange={handleInputChange}
                />
                <button className={`ui green button right floated ${submitting && 'loading'}`} type="submit">
                    Submit
                </button>
                <button
                    onClick={closeForm}
                    className="ui button right floated"
                    type="button"
                >
                    Cancel
                </button>
            </Form>
        </Segment>
    )
}

export default ActivityForm
