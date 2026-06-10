const testimonials = [
    {
        id: 1,
        name: "Jim Davis",
        job: "Game Developer",
        img: `${BASE}ASSETS/IMAGES/about/testimonials/jimDavis.webp`,
        text: "Working with James was an absolute pleasure. He delivered a polished product on time and went above and beyond to make sure every detail was just right."
    },
    {
        id: 2,
        name: "Buhle Shugu",
        job: "UI/UX Designer",
        img: `${BASE}ASSETS/IMAGES/about/testimonials/Anonymous.svg`,
        text: "I was blown away by the attention to detail and the clean, modern design. It perfectly captured the vision I had in my head but couldn't quite articulate."
    },
    {
        id: 3,
        name: "Mbali Tempi",
        job: "Product Manager",
        img: `${BASE}ASSETS/IMAGES/about/testimonials/Anonymous.svg`,
        text: "From the first meeting to the final handoff, the communication was clear and professional. I would not hesitate to recommend them to anyone looking for quality work."
    }
];

let testimonialIndex = 0;

const prevButtonTestimonial = document.querySelector("#testimonial_backButton");
const nextButtonTestimonial = document.querySelector("#testimonial_forwardButton");
const cardTestimonial = document.querySelector("#testimonialCard");

prevButtonTestimonial.addEventListener("click", prevTestimonial);
nextButtonTestimonial.addEventListener("click", nextTestimonial);

function renderTestimonial(index)
{
    const review = testimonials[index];

    cardTestimonial.classList.add("reviewCard");
    cardTestimonial.dataset.id = review.id;

    cardTestimonial.innerHTML = `
        <img src="${review.img}" id="person-img" alt="${review.name}">
        <div class="testimonialInfo">
            <h2>${review.name}</h2>
            <h3>${review.job}</h3>
            <p>${review.text}</p>
        </div>
    `;
}

function nextTestimonial()
{
 
  
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    renderTestimonial(testimonialIndex);

}

function prevTestimonial()
{
    testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
    renderTestimonial(testimonialIndex);

}

renderTestimonial(testimonialIndex);