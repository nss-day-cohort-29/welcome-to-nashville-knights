let resultsContainer = document.querySelector("#results-container");
const parkHTML = (parkk) => {
    let HTMLparkSection = (`
    <section class="parkResult">
      <p>${parkk.park_name}</p>
      <p>${parkk.mapped_location_address}</p>
    </section>
    `)
    console.log("html string?", HTMLparkSection);
    return HTMLparkSection;
  }

  const addParkToDom = (parkSection) => {
    //in here I need to take the HTML thing and append it to the DOM
    displayContainer.innerHTML += parkHTML(parkobj.park_name, parkobj.mapped_location_address
    // articleContainer.innerHTML += parkSection;
    )}
fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?mapped_location_city=Nashville`)
    .then(parks => parks.json())
    .then(parsedParks => {
        parsedParks.forEach(parkobj => {
        console.log("park back from json server", parkobj.park_name)
        console.log("park back from json server", parkobj.mapped_location_address)
        // const HparkSection = parkHTML(parkobj)
        // addParkToDom(HparkSection)
       // console.table(parsedParks.park_name)
       //const articleContainer = document.querySelector("#display-container");
       //displayContainer.innerHTML += parkHTML(parkobj.park_name, parkobj.mapped_location_address);
        })})
    
    
