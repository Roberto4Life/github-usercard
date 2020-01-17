/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// axios.get("https://api.github.com/users/Roberto4Life")
// .then(response => {
//   console.log(response);
//   cardFinal.appendChild(createPeopleCards(response.data));
// })
// .catch(error => {
//   console.log("the data was not returned", error)
// })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

axios.get("https://api.github.com/users/Roberto4Life/following")
.then(response => {
  console.log(response);
  response.data.forEach(item =>{
    const newCard = createPeopleCards(item);
    cardFinal.append(newCard);
  })
  // cardFinal.appendChild(createPeopleCards(response.data));
  
  // Array.response(item => {
  //   const arrayInfo = card(item);
  //   cardFinal.append(arrayInfo);
  // })
  
})
.catch(error => {
  console.log("the data was not returned", error)
})

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createPeopleCards(peopleArray){

  const card = document.createElement('div');
  const cardimg = document.createElement('img');
  const cardinfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add('card');
  cardimg.src = peopleArray.avatar_url;
  cardinfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  name.textContent = (`${peopleArray.name}`);
  username.textContent =(`${peopleArray.login}`);
  location.textContent=(`Location: ${peopleArray.location}`);
  profile.textContent=(`Profile: ${peopleArray.html_url}`);
  followers.textContent=(`Followers: ${peopleArray.followers}`);
  following.textContent=(`Following: ${peopleArray.following}`);
  bio.textContent=(`Bio: ${peopleArray.bio}`)

  card.append(cardimg);
  card.append(cardinfo);
  cardinfo.append(name);
  cardinfo.append(username);
  cardinfo.append(location);
  cardinfo.append(profile);
  cardinfo.append(followers);
  cardinfo.append(following);
  cardinfo.append(bio);

  return card;

}

const cardFinal = document.querySelector('.cards')

// axios.map(data => {
//   cardFinal.append(peopleArray(data.response));
// })


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
