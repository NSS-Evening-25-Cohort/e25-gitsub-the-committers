const repos = [
  {
    title: Yeah, Boy
    textContent: Aenean sit amet nulla sed magna ullamcorper vestibulum 

  },
  {
    title: SkeeYee!
    textContent: Etiam congue ex vel arcu vehicula hendrerit sed at risus.

  },

  {
    title: Young Dolph
    textContent: 
  }
]


const repoCards= document.querySelector(#repoCards);

const cardsOnDom = (repos) => {
  let domString ="";

  for (let i= 0; i < repos.length; i++) {
    domString+= `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${title.value}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${textContent.title}</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>`
  }
}
