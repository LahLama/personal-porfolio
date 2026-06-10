const imagesCycle = [
    {
        id: 0,
        link: `${BASE}ASSETS/IMAGES/games/gameJams/fishRescue.webp`,
        name: "Fish Rescue Game Jam"
    },
    {
        id: 1,
        link: `${BASE}ASSETS/IMAGES/games/prototypes/braaiSimulator.webp`,
        name: "Braai Simulator Prototype"
    },
    {
        id: 2,
        link: `${BASE}ASSETS/IMAGES/projects/coded/morabaraba.webp`,
        name: "Morabaraba Project"
    },
    {
        id: 3,
        link: `${BASE}ASSETS/IMAGES/projects/practical/intergratedSystem.webp`,
        name: "3 Way Integrated System"
    },
    {
        id: 4,
        link: `${BASE}ASSETS/IMAGES/projects/practical/keypadSystem.webp`,
        name: "Key Pad System"
    }
];

const heroImageBack = document.querySelector("#heroImageBack");
const heroImageFront = document.querySelector("#heroImage");

let cycleIndex = 0;
let cycleInterval;

function setHeroImage(index)
{
    const image = imagesCycle[index].link;

    heroImageFront.style.backgroundImage = `url("${image}")`;
    heroImageFront.style.opacity = "1";

    setTimeout(() =>
    {
        heroImageBack.style.backgroundImage = `url("${image}")`;
        heroImageFront.style.opacity = "0";
    }, 3000);
}

function nextImage()
{
    cycleIndex = (cycleIndex + 1) % imagesCycle.length;
    setHeroImage(cycleIndex);
}

function prevImage()
{
    cycleIndex = (cycleIndex - 1 + imagesCycle.length) % imagesCycle.length;
    setHeroImage(cycleIndex);
}

function startCycle(intervalMs = 5000)
{
    cycleInterval = setInterval(nextImage, intervalMs);
}

function stopCycle()
{
    clearInterval(cycleInterval);
    cycleInterval = null;
}

setHeroImage(cycleIndex);
startCycle();