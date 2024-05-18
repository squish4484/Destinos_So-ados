document.addEventListener('DOMContentLoaded', () => {
    const termsQuestions = document.querySelectorAll('.terms-question');

    termsQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});
