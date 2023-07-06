import React from 'react'
import FilhoDireta from './FilhoDireta'

export default props => {
    let x = 13
    let y = 100
    return (
        <>
            <FilhoDireta a={x} b={y} />
            <FilhoDireta a={x + 100} b={y + 200} />
        </>
    )
}