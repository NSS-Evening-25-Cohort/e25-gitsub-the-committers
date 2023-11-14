const repos = [
  {
    id: 1,
    title: "King of Memphis",
    textContent: "Aenean sit amet nulla sed magna ullamcorper vestibulum" 

  },
  { 
    id: 2,
    title: "Dum and Dummer",
    textContent: "Etiam congue ex vel arcu vehicula hendrerit sed at risus"

  },

  {
    id: 3,
    title: "Bulletproof",
    textContent: "Pellentesque dignissim ante at eros hendrerit, nec porta quam imperdiet"
  },
  {
    id: 4,
    title: "Thinking Out Loud",
    textContent: "Etiam vitae magna non lacus laoreet gravida sit amet quis nibh"
  },
  {
    
  id: 5,
  title: "Gelato",
  textContent: "Phasellus in sapien consectetur, tempus libero eget, euismod metus."
  }
];


//const dataDiv = document.querySelector("#repoCards");



const cardsOnDom = (repos) => {
  let domString ="";

  for (let i= 0; i < repos.length; i++) {
    domString+= `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${repos[i].title}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
      <p class="card-text">${repos[i].textContent}</p>
    </div>
  </div>`;
  }

 const repoCards = document.querySelector("#repoCards");
  repoCards.innerHTML = domString;
  
};





const createRepository = (e) => {
  e.preventDefault();

  const newRepo = {
  id: repos.length + 1,
  title: document.querySelector("#repo-name").value,
  textContent: document.querySelector("#repo-description").value,
}

repos.push(newRepo);
cardsOnDom(repos);
document.querySelector("form").reset();

}

cardsOnDom(repos);
document.querySelector("#create-repo-btn").addEventListener("click", createRepository);
