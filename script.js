// {
//     id: 1,
//     name: "Event Name",
//     description: "This is a description of the event.",
//     date: "2021-09-30T00:00:00.000Z", // Date ISO string
//     location: "123 Street"
//   }
const BASE_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-acc-et-web-pt-b';
const EVENTS = `${BASE_URL}/events`;



function createPartyCard(title, date, address, description) {
    const PARTY_CARDS = document.querySelector("#cards");
    const PARTY_CARD =  document.createElement("div");
    PARTY_CARD.classList.add('card')
    const PARTY_CARD_TITLE = document.createElement("h2");
    PARTY_CARD_TITLE.classList.add('title');
    PARTY_CARD_TITLE.textContent = title;
    const PARTY_CARD_DATE = document.createElement("p");
    PARTY_CARD_DATE.classList.add('date')
    PARTY_CARD_DATE.textContent = date;
    const PARTY_CARD_ADDRESS = document.createElement("p");
    PARTY_CARD_ADDRESS.classList.add('address')
    PARTY_CARD_ADDRESS.textContent = address;
    const PARTY_CARD_DESCRIPTION = document.createElement("p");
    PARTY_CARD_DESCRIPTION.classList.add('description');
    PARTY_CARD_DESCRIPTION.textContent = description;
    
    PARTY_CARD.append(PARTY_CARD_TITLE, PARTY_CARD_DATE, PARTY_CARD_ADDRESS, PARTY_CARD_DESCRIPTION);
    PARTY_CARDS.append(PARTY_CARD);
};

function renderPartyCards(parties) {
    for(const party of parties) {
        createPartyCard(party.name, party.date, party.location, party.description);
    }
}

async function fetchEvents() {
    try {
        //pausing to get a response
        //error for their computer
        const response = await fetch(EVENTS);
        if(!response.ok) {
            console.log('API error', response.status)
            return
        }
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        const parties = jsonResponse.data;
        renderPartyCards(parties);
    } catch (err) {
        //error for our computer
       console.error(err);
    }
}

fetchEvents()