import React from 'react'
import Container from '../Container'

function ViewShops({city}) {
    return (
        <div>
            <iframe
            src={`https://www.google.com/maps/embed/v1/search?q=record+skateshop+in+${city}&key=${process.env.REACT_APP_GOOGLE_MAP_APIKEY}`}
            />
        </div>
    )
}

export default ViewShops
