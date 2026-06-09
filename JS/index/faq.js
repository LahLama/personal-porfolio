const questions = document.querySelectorAll(".faq_q");

questions.forEach(element => {
    element.addEventListener("click", () => showAnswer(element));
});

function showAnswer(faq_Q) {
    faq_Q.querySelector(".faq_question").classList.toggle("rotated");
    faq_Q.querySelector(".faq_answer").classList.toggle("hidden");
}