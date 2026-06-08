const testimonials = [
  {
    id: 1,
    name: "Jim",
    job: "Developer",
    img: "./ASSETS/IMAGES/test1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, tenetur? Laboriosam deserunt dolores, nobis fuga ipsam doloremque",
  },
  {
    id: 2,
    name: "Buhle",
    job: "Designer",
    img: "./ASSETS/IMAGES/test1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, tenetur? Laboriosam deserunt dolores, nobis fuga ipsam doloremque",
  },
  {
    id: 3,
    name: "Young",
    job: "Manager",
    img: "./ASSETS/IMAGES/test1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, tenetur? Laboriosam deserunt dolores, nobis fuga ipsam doloremque",
  },
  {
    id: 4,
    name: "Ghey",
    job: "Analyst",
    img: "./ASSETS/IMAGES/test1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, tenetur? Laboriosam deserunt dolores, nobis fuga ipsam doloremque",
  },
];


let currentIndex = 0;

const prevButton = document.querySelector("#testimonal_backButton");
const nextButton = document.querySelector("#testimonal_forwardButton");

prevButton.addEventListener("click", prevReview);
nextButton.addEventListener("click", nextReview);


function renderReview(index) {
  const review = testimonials[index];
  const card = document.querySelector("#testimonialCard");

  card.classList.add("reviewCard");
  card.setAttribute("data-id", review.id);

  card.innerHTML =`
  <img src="${review.img}" id="person-img" alt="${review.name}">
  <div class="testimonialInfo">
    <h2>${review.name}</h2>
    <h2>${review.job}</h2>
    <p>${review.text}</p>
  </div>`;

}

function nextReview() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  renderReview(currentIndex);
}

function prevReview() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  renderReview(currentIndex);
}


// Render the first review on load
renderReview(currentIndex);