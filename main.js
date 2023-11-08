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
  const app = document.querySelector("#app");
  app.innerHTML = domString;
};

renderToDom(profiles);

const startApp = () => {
  renderToDom(profiles);
};

startApp();
