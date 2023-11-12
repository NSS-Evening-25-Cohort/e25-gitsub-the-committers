const repos = [
  {
    title: "King of Memphis",
    textContent: "Aenean sit amet nulla sed magna ullamcorper vestibulum" 

  },
  {
    title: "Dum and Dummer",
    textContent: "Etiam congue ex vel arcu vehicula hendrerit sed at risus"

  },

  {
    title: "Bulletproof",
    textContent: "Pellentesque dignissim ante at eros hendrerit, nec porta quam imperdiet"
  },
  {
    title: "Thinking Out Loud",
    textContent: "Etiam vitae magna non lacus laoreet gravida sit amet quis nibh"
  },
  {
  title: "Gelato",
  textContent: "Phasellus in sapien consectetur, tempus libero eget, euismod metus."
  }
]


const dataDiv = document.querySelector("#repoCards");



const cardsOnDom = (repos) => {
  let domString ="";

  for (let i= 0; i < repos.length; i++) {
    domString+= `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${repos[i].title}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
      <p class="card-text">${repos[i].textContent}</p>
    </div>
  </div>`
  }


  dataDiv.innerHTML = domString;
  
};

cardsOnDom(repos);


const form = document.querySelector("form");

const createNewRepo = (e) => {
  e.preventDefault();

  const newRepo = {
  title: document.querySelector("#title").value,
  textContent: document.querySelector("#textContent").value,
}

repos.push(newRepo);
cardsOnDom(repos);
form.reset();

}

form.addEventListener("submit", createNewRepo);


/*const form = document.querySelector("form")
form.addEventListener ("submit", (event) => {
  event.preventDefault();
  
  const newRepo = {
    title: document.querySelector("#title").value,
    textContent: document.querySelector("#textContent").value,
  };

  repos.push(newRepo);
  cardsOnDom(repos);
  form.reset();
})*/
