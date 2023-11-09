// {
//     id: 1,
//     name: "Event Name",
//     description: "This is a description of the event.",
//     date: "2021-09-30T00:00:00.000Z", // Date ISO string
//     location: "123 Street"
//   }

const parties = [
    {
            id: 1,
            name: "Event Name",
            description: "This is a description of the event.",
            date: "2021-09-30T00:00:00.000Z", // Date ISO string
            location: "123 Street"
    },
    {
        id: 1,
        name: "Event Name",
        description: "This is a description of the event.",
        date: "2021-09-30T00:00:00.000Z", // Date ISO string
        location: "123 Street"
},
{
    id: 1,
    name: "Event Name",
    description: "This is a description of the event.",
    date: "2021-09-30T00:00:00.000Z", // Date ISO string
    location: "123 Street"
},
]



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

for(const party of parties) {
    createPartyCard(party.name, party.date, party.location, party.description);
}