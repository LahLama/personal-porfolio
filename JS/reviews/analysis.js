const gameAnalysis = [
    {
        id: 1,
        img: `${BASE}ASSETS/IMAGES/reviews/analysis/minecraft.webp`,
        gameTitle: "Minecraft",
        description: "An analysis of how Minecraft guides the player through tutorialization through in-game structures and events. Minecraft uses a diegetic tutorial system...",
        link: "https://drive.google.com/file/d/1JuItGgKWlYjTOXxsrw3isMycrHnLOgM3/view?usp=drive_link"
    },
    {
        id: 2,
        img: `${BASE}ASSETS/IMAGES/reviews/analysis/marvelRivals.webp`,
        gameTitle: "Marvel Rivals",
        description: "A breakdown of how Marvel Rivals has branched from the generic superhero shooter genre and how its stylistic choices were implemented...",
        link: "https://drive.google.com/file/d/1zjRFkqj15WFmcw3lursSqREOBHmZhsgG/view?usp=drive_link"
    },
    {
        id: 3,
        img: `${BASE}ASSETS/IMAGES/reviews/analysis/skyrim.webp`,
        gameTitle: "Minecraft and Skyrim",
        description: "A comparison of how two games from different genres, an open world RPG and an open world sandbox, relate through music and audio design...",
        link: "https://drive.google.com/file/d/12er1YlNTSF2jFcnerl1vL4YvD-dR3ajT/view?usp=drive_link"
    }
];

const showAnalysisButton = document.querySelector("#analysisShowAll");
const analysisContainer = document.querySelector("#cards_analysis");

let isShowingAllAnalysis = false;

showAnalysisButton.addEventListener("click", toggleAnalysisView);

function initAnalysisPage()
{
    renderInitialAnalysis();
}

function renderInitialAnalysis()
{
    analysisContainer.innerHTML = "";

    for (let i = 0; i < 3; i++)
    {
        analysisContainer.appendChild(renderAnalysisCard(gameAnalysis[i]));
    }
}

function toggleAnalysisView()
{
    analysisContainer.innerHTML = "";

    if (!isShowingAllAnalysis)
    {
        gameAnalysis.forEach(item =>
        {
            analysisContainer.appendChild(renderAnalysisCard(item));
        });

        showAnalysisButton.textContent = "Hide Reviews";
    }
    else
    {
        renderInitialAnalysis();
        showAnalysisButton.textContent = "Show All Reviews";
    }

    isShowingAllAnalysis = !isShowingAllAnalysis;
}

function renderAnalysisCard(item)
{
    const card = document.createElement("div");
    card.classList.add("ratingCard");
    card.dataset.id = item.id;

    card.innerHTML = `
        <img src="${item.img}" alt="image of ${item.gameTitle}" class="reviewImage">

        <div class="center reviewInfo">
            <h2>${item.gameTitle}</h2>
            <p>${item.description}</p>

            <a href="${item.link}" target="_blank" rel="noopener noreferrer">
                <button class="expandReviewBtn center">Open Review</button>
            </a>
        </div>
    `;

    return card;
}

initAnalysisPage();