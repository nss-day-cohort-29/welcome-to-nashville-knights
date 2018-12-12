let myResults = {
  appendResults(name, address) {
    let resultsContainer = document.querySelector("#results-container");
    resultsContainer.innerHTML += `
          <div id="parkDIV>
              <h4 id="parkinfo">${name}</h4>
              <p id="parkinfos">${address}</p>
              <button type="save" id="save-parks">Save</button>
          </div> 
          `
      }
}
let myItinerary = {
  appendItinerary(name, address) {
    let itineraryContainer = document.querySelector("#itinerary-container");
    itineraryContainer.innerHTML += `
      <div id="parkpaste">
          <h2>My itinerary</h2>
          <div id="parkDIV>
              <h4 id="parkinfo">${name}</h4>
              <p id="parkinfo">${address}</p>
          </div> 
          </div>`
  }
}