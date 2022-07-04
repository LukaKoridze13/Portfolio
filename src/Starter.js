import React, { useState } from 'react'
import Start from './Start.js'
import Galaxy from './Galaxy.js'
export default function Starter() {
    const [launch,setLaunch] = useState(false)
    return (
        <>
            {!launch && <Start onClick={() => { setLaunch(!launch) }} />}
            {launch && <Galaxy />}
        </>
    )
}
