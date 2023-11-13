// {
//     id: 1,
//     name: "Event Name",
//     description: "This is a description of the event.",
//     date: "2021-09-30T00:00:00.000Z", // Date ISO string
//     location: "123 Street"
//   }

{/* <form id="partyForm" method="POST">
      <input
        type="text"
        name="partyName"
        id="partyName"
        placeholder="Party Name"
        required
      />
      <input type="date" id="partyDate" required />
      <input type="time" id="partyTime" required />
      <input type="text" id="partyLocation" placeholder="Location required" />
      <textarea
        name=""
        id="partyDescription"
        placeholder="Party Description"
        cols="5"
        rows="5"
        required
      ></textarea>
      <button type="submit">Schedule Party</button>
    </form> */}

const BASE_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-acc-et-web-pt-b';
const EVENTS = `${BASE_URL}/events`;

const FORM = document.querySelector('form');

//**ask about async function usage here

FORM.addEventListener('submit' , async function(event) {
   event.preventDefault();
  const elements = FORM.elements;
  const partyName = elements['partyName'].value;
  const partyDate = elements['partyDate'].value;
  const partyTime = elements['partyTime'].value;
  const partyLocation = elements['partyLocation'].value;
  const partyDescription = elements['partyDescription'].value;

  const newPartyData = {
     name: partyName,
     date: `${partyDate}T${partyTime}:00Z`,
     location: partyLocation,
     description: partyDescription,
    }
    console.log(newPartyData);
    //createPartyCard(newParty);
    await createEvent(newPartyData);
    fetchEvents();
})

function createPartyCard(title, date, address, description, id) {
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
    const DELETE_BUTTON = document.createElement('button')
    DELETE_BUTTON.textContent = 'delete';

    DELETE_BUTTON.addEventListener('click', async () => {
        await deleteEvent(id);
        setTimeout(() => {
            fetchEvents();
            console.log('refresh')
        }, 1000);
        console.log(`should delete ${id}`);
        

    })
    
    PARTY_CARD.append(PARTY_CARD_TITLE, PARTY_CARD_DATE, PARTY_CARD_ADDRESS, PARTY_CARD_DESCRIPTION, DELETE_BUTTON);
    PARTY_CARDS.append(PARTY_CARD);
};

function renderPartyCards(parties) {
    for(const party of parties) {
        createPartyCard(party.name, party.date, party.location, party.description, party.id);
    }
}

//** async functions runs in the background while the page loads the pages content? */

//this function grabs data/events from base url
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
        const parties = jsonResponse.data;
        renderPartyCards(parties);
        console.log(`should update`);
    } catch (err) {
        //error for our computer
       console.error(err);
    }
}

//this function posts data/events to the base url for the fetchEvents() function to grab on to.
async function createEvent(event) {
    try {
        //pausing to get a response
        //error for their computer
        //events - url where your sending the package to
        const response = await fetch(EVENTS, {
            //carrier receiving or getting mail
            method: 'POST',
            //label
            headers: {'Content-Type': 'application/json'},
            //content
            body: JSON.stringify(event)
        });
        if(!response.ok) {
            console.log('API error', response)
            return
        }
        const jsonResponse = await response.json();
        const parties = jsonResponse.data;
        
        console.log(parties);
    } catch (err) {
        //error for our computer
       console.error(err);
    }
}

async function deleteEvent(id) {
    try {
        //pausing to get a response
        //error for their computer
        //events - url where your sending the package to
        const response = await fetch(`${EVENTS}/${id}`, {
            //carrier receiving or getting mail
            method: 'DELETE',
            //label
            headers: {'Content-Type': 'application/json'},
            //content
        });
        console.log(response)
        if(!response.ok) {
            console.log('API error', response)
            return
        }
    } catch (err) {
        //error for our computer
       console.error(err);
    }
}

fetchEvents()

