import React from 'react'
import { Container } from 'semantic-ui-react'
import { useStore } from '../stores/store'

function NavBar() {
    const { activityStore } = useStore()
    return (
        <div
            className="ui top attached menu inverted"
            style={{ borderRadius: 0 }}
        >
            <Container>
                <div className="item link">
                    <img
                        src="assets/logo.png"
                        alt="logo"
                        style={{ marginRight: 10 }}
                    />
                    Reactivities
                </div>
                <div className="item link">Activities</div>
                <div className="item link">
                    <button
                        onClick={() => activityStore.openForm()}
                        className="ui button positive"
                    >
                        Create Activity
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default NavBar
