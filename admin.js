document.addEventListener("DOMContentLoaded", function () {
    loadQuizData();
});

async function loadQuizData() {
    try {
        const response = await fetch('https://quizbackend-rit5.onrender.com/getQuiz');
        const htmlContent = await response.text();
        document.getElementById('quizDataContainer').innerHTML = htmlContent;
    } catch (error) {
        console.error('Error fetching quiz data:', error.message);
    }
}