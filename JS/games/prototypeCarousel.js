const prototypes = [
  {
    id: 1,
    img: "/ASSETS/IMAGES/games/prototypes/colourSwitch.png",
    gameTitle: "Colour Switch",
    role: "Main Developer",
    description: "A simple colour switching prototype made in just 24 hours.   Not meant to be a full game, just a little proof of concept :D  if you do decide to check it out, let me know how you found it :D",
    link: "https://lahlama.itch.io/colour-switch"
  },
  {
    id: 2,
    img: "/ASSETS/IMAGES/games/prototypes/braaiSimulator.png",
    gameTitle: "Braai Simulator",
    role: "Main Designer and Developer",
    description: "Take charge of a South African Braai Restaurant. Manage Customer's orders , anger and moods!  Be careful to  not burn any items and enjoy the three rounds (Use WitsPrototypes as the password)",
    link: "https://lahlama.itch.io/braai-simulator"
  }
];

//Follows prev,next, card name
let prototype_config = {
  prev: "#backButton_prototypes",
  next: "#forwardButton_prototypes",
  card: "#descriptionArea_prototypes"
}

createCarousel(prototypes, prototype_config);
