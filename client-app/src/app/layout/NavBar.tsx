import React from 'react'
import { Container } from 'semantic-ui-react'

interface Props {
    openForm: () => void
}

function NavBar({ openForm }: Props) {
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
                    <button onClick={openForm} className="ui button positive">
                        Create Activity
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default NavBar
