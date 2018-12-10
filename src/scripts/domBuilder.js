const domBuilder = {
name: "Dom Builder Component",
appendInputForm () {
    let displayContainer = document.querySelector("#display-container");

    displayContainer.innerHTML = (`
    <h1>Welcome to Nashville!</h1>
    <h2>Search for stuff to do today</h2>
    <section id="sectionid">
    <input type= "text" name="parks" id="parks-search" value="parks by feature">
    <button type="button" id="search-button">Search Parks</button>
    </section>

    <section id="sectionid">
    <input type= "text" name="concerts" id="concerts-search" value="restaurants by food type">
    <button type="button" id="search-button">Search Concerts</button>
    </section>

    <section id="sectionid">
    <input type= "text" name="restaurants" id="restaurants-search" value="meetups by topic">
    <button type="button" id="search-button">Search Restaurants</button>
    </section>
    
    <section id="sectionid">
    <input type= "text" name="meetups" id="meetups-search" value="concerts by genre">
    <button type="button" id="search-button">Search MeetUps</button>
    </section>
    `)
}}
const myResults= {
    appendResults(){
        let resultsContainer = document.querySelector("#results-container");
        resultsContainer.innerHTML= `
        <div>
            <h2>Results</h2>
            <p>park_name</p>
            <p>mapped_location_address</p>
        </div> 
        `
        }
    }
    
    const myItinerary=  {
    appendItenerary(){    
        let itineraryContainer = document.querySelector("#itinerary-container");
        itineraryContainer.innerHTML=`
        <div>
            <h2>My itinerary</h2>
            <p>Park</p>
            <p>Restaurant</p>
            <p>Meetup</p>
            <p>Concert</p>
        </div>`
        }
    }
    domBuilder.appendInputForm();
    myResults.appendResults();
    myItinerary.appendItenerary();