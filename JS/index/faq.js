

const questions = document.querySelectorAll(".faq_q") 
questions.forEach(element => {
    element.addEventListener("click", showAnswer)
});

function showAnswer(faq_Q) {
    this.querySelector(".faq_question") .classList.toggle("rotated");
    const answer = this.parentElement.querySelector(".faq_answer");
    answer.classList.toggle("hidden")
    console.log(answer);
    
        
}
