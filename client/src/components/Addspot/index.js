import React from 'react'
import Container from '../Container'

function AddSpot() {
    return (
        <div>
            <Container>
                <h2>Add a Spot</h2>
                <p>Please use the form below to add your spot</p>
                <form className="create-form">
                    <label>Name Your Spot:</label>
                    <input class='spot-name' id='spot-name' placeholder='enter your spot name here'/>
                    <label for='spot-description'>Describe Your Spot:</label>
                    <textarea class='spot-description' id ='spot-description' placeholder='What is at your spot? Example: 3 stairs with hand rail, public plaza with manual pads and ledges'></textarea>
                    <h3>Where Is Your Spot?</h3>
                    <label for='spot-city'>What city is your spot in?</label>
                    <input type='text' class='spot-city' id='spot-city' placeholder='Ex: Seattle'/>
                    <button type="button" class='form-btn' id='use-current-location'>Use your current location</button>
                    <div id="current-spot"></div>
                    <br/>
                    <label for='cross-streets'>OR add the closest cross streets:</label>
                    <input class='cross-streets' id='cross-streets' placeholder='Example: 9th and pine'/>
                    
                    <div class='security' id='security'>
                    <label for="security-switch">Is there security at the spot?</label>
                    <br/>
                    <button class='form-btn' id='security-guards-yes' data-security='true'>Yes</button>
                    <button class='form-btn' id='security-guards-no' data-security='false'>No</button>
                    </div>
                    <button type='submit' class='form-btn' id='submit-spot'>Sumbit Your Spot</button>

                </form>
            </Container>
        </div>
    )
}

export default AddSpot
