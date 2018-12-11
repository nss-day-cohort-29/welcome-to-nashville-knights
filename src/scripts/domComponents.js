// let parkResultsArray = [];
// let parkResultsObject = {
//     park_name="",
//     mapped_location_address=""
// };

let myResults = {
  appendResults(name, address) {
    let resultsContainer = document.querySelector("#results-container");
    resultsContainer.innerHTML = `
          <div>
              <h2>Results</h2>
              <h3 id="parkinfo">${name}</h3>
              <p id="parkinfo">${address}</p>
          </div> 
          `
      }
}
let myItinerary = {
  appendItinerary() {
    let itineraryContainer = document.querySelector("#itinerary-container");
    itineraryContainer.innerHTML = `
      <div id="parkpaste">
          <h2>My itinerary</h2>
          <p>Park</p>
          <p>Restaurant</p>
          <p>Meetup</p>
          <p>Concert</p>
      </div>`
  }
}
//<button type="button id="parks-save">Save</button>

// let saveButton = document.createElement('button')
// saveButton.setAttribute("id", "save-button");
// saveButton.addEventListener("click", eventListeners.handleSearchButton);