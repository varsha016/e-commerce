
import React from 'react'

function useDesrialize(state) {
    return <pre>
        {JSON.stringify(state, null, 2)}
    </pre>
}

export default useDesrialize