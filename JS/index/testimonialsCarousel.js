const testimonials = [
  {
    id: 1,
    name: "Jim Davis",
    job: "Game Developer",
    img: "../ASSETS/IMAGES/about/testimonials/jimDavis.webp",
    text: "Working with James was an absolute pleasure. He delivered a polished product on time and went above and beyond to make sure every detail was just right.",
  },
  {
    id: 2,
    name: "Buhle Shugu",
    job: "UI/UX Designer",
    img: "../ASSETS/IMAGES/about/testimonials/Anonymous.svg",
    text: "I was blown away by the attention to detail and the clean, modern design. It perfectly captured the vision I had in my head but couldn't quite articulate.",
  },
  {
    id: 3,
    name: "Mbali Tempi",
    job: "Product Manager",
    img: "../ASSETS/IMAGES/about/testimonials/Anonymous.svg",
    text: "From the first meeting to the final handoff, the communication was clear and professional. I would not hesitate to recommend them to anyone looking for quality work.",
  }
];


let TesitmonalCurrentIndex = 0;

const  TesitmonialprevButton = document.querySelector("#testimonail_backButton");
const  TesitmonialnextButton = document.querySelector("#testimonail_forwardButton");

 TesitmonialprevButton.addEventListener("click", prevTesitmonial);
 TesitmonialnextButton.addEventListener("click", nextTesitmonial);


function renderTesitmonial(index) {
  const review = testimonials[index];
  const card = document.querySelector("#testimonialCard");

  card.classList.add("reviewCard");
  card.setAttribute("data-id", review.id);

  card.innerHTML =`
  <img src="${review.img}" id="person-img" alt="${review.name}">
  <div class="testimonialInfo">
    <h2>${review.name}</h2>
    <h3>${review.job}</h3>
    <p>${review.text}</p>
  </div>`;

}

function nextTesitmonial() {
  TesitmonalCurrentIndex = (TesitmonalCurrentIndex + 1) % testimonials.length;
  renderTesitmonial(TesitmonalCurrentIndex);
}

function prevTesitmonial() {
  TesitmonalCurrentIndex = (TesitmonalCurrentIndex - 1 + testimonials.length) % testimonials.length;
  renderTesitmonial(TesitmonalCurrentIndex);
}


// Render the first review on load
renderTesitmonial(TesitmonalCurrentIndex);