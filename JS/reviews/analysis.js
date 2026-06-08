
const gameAnalysis = [
  {
    id: 1,
    // https://minecraft.wiki/index.php?curid=174898
    img: "/ASSETS/IMAGES/reviews/analysis/minecraft.jpg",
    gameTitle: "Minecraft",
    description: "An analysis of how Minecraft guides the player through tutorialization through ingame structures and events.Minecraft uses a digetic tutorial system...",
    link: "https://drive.google.com/file/d/1JuItGgKWlYjTOXxsrw3isMycrHnLOgM3/view?usp=drive_link"
  },
  {
    id: 2,
    // https://www.mobygames.com/game/234101/marvel-rivals/cover/group-407559/cover-973165/
    img: "/ASSETS/IMAGES/reviews/analysis/marvelRivals.jpg",
    gameTitle: "Marvel Rivals",
    description: "A breakdown of how Marvel Rivals as branched from the generic superhero shooter genre and how it's stylistic choices were implemented...",
    link: "https://drive.google.com/file/d/1zjRFkqj15WFmcw3lursSqREOBHmZhsgG/view?usp=drive_link"
  },
  {
    id: 3,
    //https://en.uesp.net/wiki/File:SR-cover-Skyrim_Box_Art.jpg
    img: "/ASSETS/IMAGES/reviews/analysis/skyrim.jpg  ",
    gameTitle: "Minecraft and Skyrim",
    description: "A comparision of how two games from different generes, being Openworld RPG and the other, Openworld sandbox relate with music and audio design...",
    link: "https://drive.google.com/file/d/12er1YlNTSF2jFcnerl1vL4YvD-dR3ajT/view?usp=drive_link"
  },

];

const showAnalyisButton = document.querySelector("#analysisShowAll");
// const hideButton = document.querySelector("#testimonal_forwardButton");
const analysisCont = document.querySelector("#cards_analysis");
let isCardsShowing = false;
showAnalyisButton.addEventListener("click", showAllAnalysis);

function onStartAnalysisPage() {
    analysisCont.innerHTML = "";
    for (let index = 0; index < 3; index++) {
        var newCard = renderAnalysis(gameAnalysis[index]);
        analysisCont.append(newCard);
    }
}

onStartAnalysisPage();

function showAllAnalysis() { 

    if (!isCardsShowing) {
        analysisCont.innerHTML = "";
        gameAnalysis.forEach(review => {
            var newCard = renderAnalysis(review);
            analysisCont.append(newCard);
        });
        showAnalyisButton.textContent = "Hide Reviews";
    }
    else{
        onStartAnalysisPage();
        showAnalyisButton.textContent = "Show All Reviews"
    }
    
    isCardsShowing = !isCardsShowing;
}

function renderAnalysis(review) {
    
    const card = document.createElement("div");

    card.classList.add("ratingCard");
    card.setAttribute("data-id", review.id);

    card.innerHTML =`
   <img src="${review.img}" alt="image of the game" class="reviewImage">
    <div class="center reviewInfo ">
        <h2> ${review.gameTitle} </h2>
        <p> ${review.description}</p>
        <a href=${review.link}>  
            <button  class="expandReviewBtn center">Open Review </button>
        </a>
    </div>
    `;

    return card;

}