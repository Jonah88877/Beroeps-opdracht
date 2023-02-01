function myFunction() {
    let goedeAntwoorden = ["c", "c", "c", "a", "a", "a", "b", "d", "d", "c"];
    let antwoorden = [];
    let count = 0;

    for (let i = 1; i <= 10; i++) {
        let gebruikerAntwoord = document.querySelector('input[name="question' + i + '"]:checked');

        if (gebruikerAntwoord) {
            antwoorden.push(gebruikerAntwoord.value);
        }
    }

    for (let i = 0; i < 10; i++) {
        if (antwoorden[i] == goedeAntwoorden[i]) {
            count++;
        }
    }
    let totaal = "Je hebt " + count + " van de 15 vragen goed.";
    alert(totaal);

}


function showNextQuestion(questionNumber) {
    let currentQuestion = document.getElementById("q" + questionNumber);
    currentQuestion.style.display = "block";

    for (let i = 1; i <= 15; i++) {
        if (i !== questionNumber) {
            let otherQuestion = document.getElementById("q" + i);
            otherQuestion.style.display = "none";
        }
    }
}