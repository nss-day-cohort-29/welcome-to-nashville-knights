const domBuilder = {
name: "Dom Builder Component",
appendInputForm () {
    let displayContainer = document.querySelector("#display-container");

    displayContainer.innerHTML = `
    <section>
    <label for="parks">Parks</label>
    <input type= "text" name="parks" id="parks-search">
    <button type="button" id="search-button">Search Parks</button>
    </section>

    <section>
    <label for="concerts">Concerts</label>
    <input type= "text" name="concerts" id="concerts-search">
    <button type="button" id="search-button">Search Concerts</button>
    </section>

    <section>
    <label for="restaurants">Restaurants</label>
    <input type= "text" name="restaurants" id="restaurants-search">
    <button type="button" id="search-button">Search Restaurants</button>
    </section>
    
    <section>
    <label for="meetUps">MeetUps</label>
    <input type= "text" name="meetups" id="meetups-search">
    <button type="button" id="search-button">Search MeetUps</button>
    </section>'
    `   
    }
}
domBuilder.appendInputForm();