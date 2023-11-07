const profiles = [
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwXd21PNjiUZ7PYbm_rjPo94ruMUViwfhNVA&usqp=CAU",
    name: "Kate Middleton",
    place: "Whales, England",
    email: "kmid@gmail.com",
    about: "I'm a human, for other humans",
    Highlights: [
      { hhlt1:'Professional Queen' }, 
      {hhlt2: 'People love me' },
      {hhlt3: 'Valedictorian' }
   ],
    socials: [ 
      { X: 'https://twitter.com/KensingtonRoyal?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' },
      { FB: 'https://www.facebook.com/katemiddletonqueen/'},
      { Insta: 'https://www.instagram.com/_kate_middleton_royal/?hl=en'}
],
organizations: "Buckingham Palace, Africa, Stealing Europe"
  }
]

const renderToDom = (students) => {
  let domString = '';
  for (profile of profiles) {
    domString += ``;
  }
}
  
