const myResults = {
  appendResults() {
    let resultsContainer = document.querySelector("#results-container");
    resultsContainer.innerHTML = `
          <div>
              <h2>Results</h2>
              <p>park_name</p>
              <p>mapped_location_address</p>
          </div> 
          `
  }
}
const myItinerary = {
  appendItenerary() {
    let itineraryContainer = document.querySelector("#itinerary-container");
    itineraryContainer.innerHTML = `
      <div>
          <h2>My itinerary</h2>
          <p>Park</p>
          <p>Restaurant</p>
          <p>Meetup</p>
          <p>Concert</p>
      </div>`
  }
}
