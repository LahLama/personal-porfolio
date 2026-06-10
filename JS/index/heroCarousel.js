let imagesCycle = [

    {
        id: 0,
        link: "../../ASSETS/IMAGES/games/gameJams/fishRescue.webp",
        name: "Fish Rescue Game Jam",
    },
    {
        id: 1,
        link: "../../ASSETS/IMAGES/games/prototypes/braaiSimulator.webp",
        name: "Braai Simulator Prototype",
    },
    {
        id: 2,
        link: "../../ASSETS/IMAGES/projects/coded/morabaraba.webp",
        name: "Morabaraba Project",
    },
    {
        id: 3,
        link: "../../ASSETS/IMAGES/projects/practical/intergratedSystem.webp",
        name: "3 Way Intergrated System",
    },
    {
        id: 4,
        link: "../../ASSETS/IMAGES/projects/practical/keypadSystem.webp",
        name: "Key Pad System",
    },   
]

heroImage = document.querySelector("#heroImageBack");


let cycleIndex = 0;
let cycleInterval;

function setHeroImage(index) {

    const next = document.querySelector("#heroImage");
    next.style.backgroundImage = `url(${imagesCycle[index].link})`;
    next.style.opacity = "1";

    setTimeout(() => {
        heroImage.style.backgroundImage = `url(${imagesCycle[index].link})`;
        next.style.opacity = "0";
    }, 3000);
}


function nextImage() {
    cycleIndex = (cycleIndex + 1) % imagesCycle.length;
    setHeroImage(cycleIndex);
}

function prevImage() {
    cycleIndex = (cycleIndex - 1 + imagesCycle.length) % imagesCycle.length;
    setHeroImage(cycleIndex);
}

function startCycle(intervalMs = 5000) {
    cycleInterval = setInterval(nextImage, intervalMs);
}

function stopCycle() {
    clearInterval(cycleInterval);
}

setHeroImage(cycleIndex);
startCycle();
