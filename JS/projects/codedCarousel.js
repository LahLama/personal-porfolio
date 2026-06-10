

const codedProjects = [
  {
    id: 1,
    img: `${BASE}ASSETS/IMAGES/projects/coded/morabaraba.webp`,
    gameTitle: "Morabaraba",
    role: "Multiplayer Developer",
    description: "Built a digitised version of Morabaraba. Includes playing against a player and against an AI. Various board types are also included.",
    link: ""
  },
  {
    id: 2,
    img: `${BASE}ASSETS/IMAGES/projects/coded/1024.webp`,
    gameTitle: "1024 in C++",
    role: "Co-Developer",
    description: "Developed a version of 1024 in C++ in a team of two for a software development course",
    link: ""
  }
];

//Follows prev,next, card name
let coded_config = {
  prev: "#backButton_coded",
  next: "#forwardButton_coded",
  card: "#descriptionArea_coded"
}

createCarousel(codedProjects, coded_config);
