const gameJams = [
  {
    // (Use the password WitsPrototypes to unlock the game!)
    id: 1,
    img: "/ASSETS/IMAGES/games/gameJams/fishRescue.png",
    gameTitle: "Fish Rescue",
    role: "Primary Developer and Designer",
    description: "You are in charge of a rescue center on the banks of a river. Fish was ashore needing your help.   You are tasked to save these fish and rehabilitate them.   Feed Them. Make them Comfortable. Give them love. Then release them! (Use the password WitsPrototypes to unlock the game!)",
    link: "https://lahlama.itch.io/fish-rescue"
  },
  {
    id: 2,
    img: "/ASSETS/IMAGES/games/gameJams/pacMan.png",
    gameTitle: "Pacman Recreation",
    role: "Primary Developer and Designer",
    description: "An attempt at recreating the classic maze arcade game Pac-Man! BUT with a twist of a new repellent ghost!.  (Use the password WitsPrototypes to unlock the game!)",
    link: "https://lahlama.itch.io/pacman-recreation"
  }
];

//Follows prev,next, card name
let gameJam_config = {
  prev: "#backButton_gameJams",
  next: "#forwardButton_gameJams",
  card: "#descriptionArea_gameJams"
}

createCarousel(gameJams, gameJam_config);
