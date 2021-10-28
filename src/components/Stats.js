import React from 'react'

function Stats({data}) {
    return (
        <div>
            {data.map(stat => (
                <p key = {stat.id}>{stat.name}: {stat.value}</p> 
            ))}
        </div>
    )
}

export default Stats
