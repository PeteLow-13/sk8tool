import React from 'react'
import Container from '../Container'

function SpotContainer() {
    return (
        <div>
            <Container>
                <div class='spot-container'>
                <button class='spot-buttons' data-id={{ id }}>{{ id }}</button>
                <p>City: {{ city }}</p>
                <p class="spot">Spot: {{ name }}</p>
                <p>Spot description: {{ description }}</p>
                {{#if cross_street}}
                <p>Cross streets: {{ cross_street }}</p>
                {{/if}}
                <p>Security: {{ security_guards }}</p>
                {{#if security_guards}}
                <p>Security present:{{ security_when }}</p>
                {{/if}}
            </div> 
            </Container>
        </div>
    )
}

export default SpotContainer
