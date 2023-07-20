import { Loader } from 'semantic-ui-react'
import React from 'react'

interface Props {
    inverted?: boolean
    content?: string
}

function LoadingComponent({ inverted, content }: Props) {
    return (
        <div className="ui active dimmer">
            <Loader content={content} />
        </div>
    )
}

export default LoadingComponent
