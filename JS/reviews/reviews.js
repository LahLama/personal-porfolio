const gameReviews = [
    {
        id: 1,
        img: `${BASE}ASSETS/IMAGES/reviews/ratings/kacipbara.webp`,
        gameTitle: "Kacipbara by BADCAT GAMES",
        description: "I do like the linear progression of the story. It ties in with a habitual life of a chicken farmer...",
        link: "https://gamesense.co/game/others/reviews/discuss/kacipbara/"
    },
    {
        id: 2,
        img: `${BASE}ASSETS/IMAGES/reviews/ratings/sizeMatters.webp`,
        gameTitle: "Size Matters by zidan-banan",
        description: "I enjoyed the scale factor and how it was implemented, movement felt good, nice sounds. Good tutorial section for movement. However I felt like it...",
        link: "https://gamesense.co/game/others/reviews/discuss/size-matters/"
    },
    {
        id: 3,
        img: `${BASE}ASSETS/IMAGES/reviews/ratings/hunting.webp`,
        gameTitle: "Hunting by KitsKell",
        description: "Style was kept true. Subversion at the end was a good touch. The character gave the player a reason to hunt (a daughter to feed), which felt motivating...",
        link: "https://gamesense.co/game/others/reviews/discuss/hunting-by-kitskell/"
    },
    {
        id: 4,
        img: `${BASE}ASSETS/IMAGES/reviews/ratings/twilightObserver.webp`,
        gameTitle: "Twilight Observer by WhiteScar Studios",
        description: "Music choices were good. It added to the atmosphere and did not distract from the main dialogue. Good character introductions...",
        link: "https://gamesense.co/game/others/reviews/discuss/twilight-observer-by-whitescar-studios/"
    }
];

const showButton = document.querySelector("#ratingsShowAll");
const reviewContainer = document.querySelector("#cards_ratings");

let isShowingAllReviews = false;

showButton.addEventListener("click", toggleReviews);

function initReviewsPage()
{
    renderInitialReviews();
}

function renderInitialReviews()
{
    reviewContainer.innerHTML = "";

    for (let i = 0; i < 3; i++)
    {
        reviewContainer.appendChild(renderReviewCard(gameReviews[i]));
    }
}

function toggleReviews()
{
    reviewContainer.innerHTML = "";

    if (!isShowingAllReviews)
    {
        gameReviews.forEach(review =>
        {
            reviewContainer.appendChild(renderReviewCard(review));
        });

        showButton.textContent = "Hide Reviews";
    }
    else
    {
        renderInitialReviews();
        showButton.textContent = "Show All Reviews";
    }

    isShowingAllReviews = !isShowingAllReviews;
}

function renderReviewCard(review)
{
    const card = document.createElement("div");
    card.classList.add("ratingCard");
    card.dataset.id = review.id;

    card.innerHTML = `
        <img src="${review.img}" alt="image of ${review.gameTitle}" class="reviewImage">

        <div class="center reviewInfo">
            <h2>${review.gameTitle}</h2>
            <p>${review.description}</p>

            <a href="${review.link}" target="_blank" rel="noopener noreferrer">
                <button class="expandReviewBtn center">Open Review</button>
            </a>
        </div>
    `;

    return card;
}

initReviewsPage();