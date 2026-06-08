const gameReviews = [
  {
    id: 1,
    img: "/ASSETS/IMAGES/reviews/ratings/kacipbara.png",
    gameTitle: "Kacipbara by BADCAT GAMES",
    description:"I do like the linear progression of the story. It ties in with a habitual life of a chicken farmer...",
    link: "https://gamesense.co/game/others/reviews/discuss/kacipbara/"
  },
  {
    id: 2,
    img: "/ASSETS/IMAGES/reviews/ratings/sizeMatters.png",
    gameTitle: "Size Matters by zidan-banan",
    description: "I enjoyed the scale factor and how it was implemented, movement felt good, nice sounds. Good Tutorial section when it came to movement. However i felt like it...",
    link: "https://gamesense.co/game/others/reviews/discuss/size-matters/"
  },
  {
    id: 3,
    img: "/ASSETS/IMAGES/reviews/ratings/hunting.png",
    gameTitle: "Hunting by KitsKell",
    description: "Style was kept true, Subversion at the end was a good touch.  The character gave the player a reason to hunt (a daughter to feed), the player felt motivated..",
    link: "https://gamesense.co/game/others/reviews/discuss/hunting-by-kitskell/"
  },
  {
    id: 4,
    img: "/ASSETS/IMAGES/reviews/ratings/twilightObserver.png",
    gameTitle: "Twilight Observer by WhiteScar Studios",
    description: "Music choices were good, it added to the atmosphere and did not distract the player from the main action of the game being the dialogue. Good character introductions...",
    link: "https://gamesense.co/game/others/reviews/discuss/twilight-observer-by-whitescar-studios/"
  },
  // {
  //   id: 5,
  //   img: "/ASSETS/IMAGES/reviews/ratings/",
  //   gameTitle: "Pulsebreak",
  //   description: "A rhythm-action hybrid that blends tight combat with an infectious soundtrack, making every encounter feel satisfying and deliberate.",
  //   link: "https://www.example.com"
  // }
];

const showButton = document.querySelector("#ratingsShowAll");
// const hideButton = document.querySelector("#testimonal_forwardButton");
const reviewCont = document.querySelector("#cards_ratings");
let isShowing = false;
showButton.addEventListener("click", showAllReviews);

function onStartReviewPage() {
    reviewCont.innerHTML = "";
    for (let index = 0; index < 3; index++) {
        var newCard = renderReview(gameReviews[index]);
        reviewCont.append(newCard);
    }
}

onStartReviewPage();

function showAllReviews() { 

    if (!isShowing) {
        reviewCont.innerHTML = "";
        gameReviews.forEach(review => {
            var newCard = renderReview(review);
            reviewCont.append(newCard);
        });
        showButton.textContent = "Hide Reviews";
    }
    else{
        onStartReviewPage();
        showButton.textContent = "Show All Reviews"
    }
    
    isShowing = !isShowing;
}

function renderReview(review) {
    
    const card = document.createElement("div");

    card.classList.add("ratingCard");
    card.setAttribute("data-id", review.id);

    card.innerHTML =`
   <img src="${review.img}" alt="image of the game" class="reviewImage">
    <div class="center reviewInfo ">
        <h2> ${review.gameTitle} </h2>
        <p> ${review.description}</p>
        <a href=${review.link} target="_blank">  
            <button  class="expandReviewBtn center">Open Review </button>
        </a>
    </div>
    `;

    return card;

}