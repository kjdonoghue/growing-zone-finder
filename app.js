
let zipCodeTB = document.getElementById('zipCodeTB')
let submitButton = document.getElementById('submitButton')
let resultsContainer = document.getElementById('resultsContainer')

async function fetchZone(zip) {
    let response = await fetch(`https://phzmapi.org/${zip}.json`)
    let zoneResults = await response.json()
    return zoneResults
}

submitButton.addEventListener('click', async () => {
    
    let zipCode = zipCodeTB.value

    let result = await fetchZone(zipCode)
    
    let zone = `<div class="zoneDisplay">
        <h2> Your Growing Zone </h2>
        <span>Zone: ${result.zone}</span>
        <span>Temp Range: ${result.temperature_range}</span>
        <span>Lat: ${result.coordinates.lat}</span>
        <span>Lon: ${result.coordinates.lon}</span>
        </div>`    

    resultsContainer.innerHTML = zone
    zipCodeTB.value = ''
})


