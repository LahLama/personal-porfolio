
const games = [
  {
    id: 1,
    img: "/ASSETS/IMAGES/games/fullGames/theNun.png",
    gameTitle: "The Nun",
    role: "Core Coder",
    description: "Made for Wits Digital Arts 2nd Semester Project. We  had the experience to make our first 3d game with our own hand crafted objects. The Nun follow your character as they are compelled to search for their friend that has gone missing. But to find this friend you will need to unlock a series of rooms! Do enjoy. Although this our final project there are areas for improvement. ",
    link: "https://lahlama.itch.io/the-nun"
  },
  {
    id: 2,
    img: "/ASSETS/IMAGES/games/fullGames/evilEnigma.png",
    gameTitle: "Evil Engima",
    role: "Gameplay and Puzzle Developer",
    description: "This was a university project done for the first semester.   You accidentally created a sentient AI and now must try and destroy it. You WILL lose. You WILL learn. You WILL be taunted at.  But WILL you succeed?",
    link: "https://lahlama.itch.io/evil-enigma"
  }
];

//Follows prev,next, card name
let games_config = {
  prev: "#backButton_games",
  next: "#forwardButton_games",
  card: "#descriptionArea_games"
}

createCarousel(games, games_config);
