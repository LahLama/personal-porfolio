const progressBtnElement = document.createElement('nav');
progressBtnElement.id = "pageTracker"
progressBtnElement.innerHTML = `
    <button class="pressButton">
    <img src="/ASSETS/IMAGES/prefabs/button_60x40.webp" alt="" />
    </button>`
    
document.body.append(progressBtnElement);


let ProgressTrackerBtn = document.querySelector("#pageTracker")

ProgressTrackerBtn.addEventListener("click", returnToTop)



function returnToTop() {
    console.log(document.documentElement.scrollTop);
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, IE, Opera and Firefox
}   

let VisualElement = ProgressTrackerBtn.querySelector("button")
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const percent = (scrollTop / documentHeight) * 100;

    VisualElement.style.setProperty("--scrollPercent", `${percent}%`);
});