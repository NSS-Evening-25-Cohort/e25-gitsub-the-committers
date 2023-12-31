const profiles = [
  {
    id: 1,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYv_8VTvpDfVVSV35FPSHN5jfqCX_7J7NIg&usqp=CAU",
    name: "Dave Grohl",
    nickname: "Kurt",
    bio: "Lead singer for the greatest rock band in history, drummer for the most iconic rock band in history",
    place: "Warren, Ohio",
    email: "therealDaveGrohl@gmail.com",
    Highlights: [
      { hhlt: 'Professional Muscian.' },
      { hhlt: 'People love me.' },
      { hhlt: 'Can play anything that makes sound.' }
    ],
    socials: [
      { X: 'https://twitter.com/foodgrohl?lang=en' },
      { LinkedIn: 'https://www.linkedin.com/in/dave-grohl-100018156' },
      { Insta: 'https://www.instagram.com/dave_grohl__daily/' }
    ],
    organizations: "Foo Fighters, Nirvana, Wembley Stadium, Global Poverty Project"
  }
];

const projects =  [
  {
    id: 1,
    Name: "Jazz Journey's",
    Des: "Exploring the butterfly effect of Jazz from the great depression through the modern era and how it has helped shaped today's musical landscape"
  },
  {
    id: 2,
    Name: "Funkadelic Soundwaves",
    Des: "Gathering data from the icons of the disco era to assess the effects of the true freedom revolution on the descendants of its stars."
  },
  {
    id: 3,
    Name: "Electronic Euphoria",
    Des: "Starting in the 90's, EDM started an uneasy riot in the bowels of the American Grunge scene, this study is meant to uncover how large of an effect this had on the mixed genre's of the modern day."
  }
]

const renderToDom = (profiles) => {
  let domString = '';
  for (const profile of profiles) {
    domString += `
      <div id='profile' class="card" style="width: 18rem;">
        <img src="${profile.imageUrl}" class="car-img-top">
        <h2 id="name">${profile.name}</h2>
        <p id="nickname">"${profile.nickname}"</p>
        <p id="bio"><h4>BIO:</h4>${profile.bio}</p>
        <p id="place"><h4>From:</h4> ${profile.place}</p>
        <p id="email"><h4>Email:</h4> ${profile.email}</p>
        <h4>Highlights:</h4>
        <ul id="highlights"> 
          ${profile.Highlights.map((highlight) => `<li>${highlight.hhlt}</li>`).join('')}
        </ul>
        <h4>Socials:</h4>
        <ul id="socials"> 
          ${profile.socials.map((social) => {
            const platform = Object.keys(social)[0];
            const link = social[platform];
            return `<li><a href="${link}">${platform}</a></li>`;
          }).join('')}
        </ul>
        <p id="orgs"><h4>Organizations/Affiliations</h4>${profile.organizations}</p>
      </div>`;
  }
  let projString = "";
  for ( const project of projects) { 
    projString += `<div id="projcard" class="card">
  <div class="card-body">
    <h5 class="card-title">${project.Name}</h5>
    <p class="card-text">${project.Des}</p>
</div>
</div>`
  }

  const app = document.querySelector("#app");
  app.innerHTML = domString;

  const prjCrds = document.querySelector("#prjCrds")
  prjCrds.innerHTML = projString;
};

renderToDom(profiles);

const startApp = () => {
  renderToDom(profiles, projects);
};

startApp();
