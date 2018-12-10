const data ={
    getParks(userInput){
fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?q=${userInput}`)
    .then(parks => parks.json())
    .then(parsedParks => {
        parsedParks.forEach(park => {
        park.name= park_name;
        park.address= mapped_location_address;
        })
    })
}
}