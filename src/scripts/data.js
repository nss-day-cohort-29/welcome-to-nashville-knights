const data = {
    getParks(userInput) {
        return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${userInput}=Yes`)
            .then(parks => parks.json())
            
            
            
            
            // .then(parsedParks=> { 
            //     parsedParks.forEach(allParks => {
            //     myResults.appendResults(allParks.park_name, allParks.mapped_location_address);    
            // })
        // })
    }
}
