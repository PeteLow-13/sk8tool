import React from 'react'
import Container from '../Container'

function ViewParks({city}) {

    return (
        <div>
            <Container>
                <iframe
                    src={`https://www.google.com/maps/embed/v1/search?q=record+skatepark+in+${city}&key=${process.env.REACT_APP_GOOGLE_MAP_APIKEY}`}
                />
            </Container>
        </div>
    )
}

export default ViewParks
