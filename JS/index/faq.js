

const questions = document.querySelectorAll(".faq_question") 
questions.forEach(element => {
    element.addEventListener("click", showAnswer)
});

function showAnswer(faq_Q) {
    this.classList.toggle("rotated");
    const answer = this.parentElement.querySelector(".faq_answer");
    answer.classList.toggle("hidden")
    console.log(answer);
    
        
}
