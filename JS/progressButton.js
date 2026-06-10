const progressBtnElement = document.createElement("nav");
progressBtnElement.id = "pageTracker";

progressBtnElement.innerHTML = `
    <button class="pressButton">
        <img src="${BASE}ASSETS/IMAGES/prefabs/button_60x40.webp" alt="Image of a Button Icon">
    </button>
`;

document.body.appendChild(progressBtnElement);

const progressTrackerBtn = document.querySelector("#pageTracker");
const buttonElement = progressTrackerBtn.querySelector("button");

progressTrackerBtn.addEventListener("click", returnToTop);

function returnToTop()
{
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

window.addEventListener("scroll", () =>
{
    const scrollTop = window.scrollY;
    const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

    const percent = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

    buttonElement.style.setProperty("--scrollPercent", `${percent}%`);
});