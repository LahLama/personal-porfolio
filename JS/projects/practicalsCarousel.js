const practicalProjects = [
  {
    id: 1,
    img: "/ASSETS/IMAGES/projects/practical/intergratedSystem.jpg",
    gameTitle: "Three Way Integrated System",
    role: "Flexsensor Indicator",
    description: "Three Systems were created by group members and intergrated into one complete system to open a box.",
    link: "https://www.example.com"
  },
  {
    id: 2,
    img: "/ASSETS/IMAGES/projects/practical/keypadSystem.jpg",
    gameTitle: "Safe Keypad Unlock",
    role: "Main Engineer",
    description: "Designed and programmed a arduino-controlled keypad and servo which unlocked a door.",
    link: "https://www.example.com"
  },
 
];

//Follows prev,next, card name
let practical_config = {
  prev: "#backButton_practicals",
  next: "#forwardButton_practicals",
  card: "#descriptionArea_practicals"
}

createCarousel(practicalProjects, practical_config);
