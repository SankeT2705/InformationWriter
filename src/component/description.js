import React, { useState } from 'react'

function Description({ data, key }) {
    const [comingData, setdata] = useState([])
    const update = data.map((d) => {
        if (d.key === key) {
            return { ...d }
        }
        return d
    })
    setdata(update)

    return (
        <div class="card">
            <div class="card-header">
                {comingData.t}
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>{comingData.d} </p>
                    <footer class="footer"> Domain: <cite title="Source Title">{comingData.domain} </cite></footer>
                </blockquote>
            </div>
        </div>
    )
}

export default Description