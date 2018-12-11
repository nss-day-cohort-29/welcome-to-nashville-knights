const data = {
    getParks(userInput) {
        return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${userInput}=Yes`)
            .then(parks => parks.json())
        parks.forEach(allParks => {
            allParks.name = park_name;
            allParks.address = mapped_location_address;
        })
    }
}
