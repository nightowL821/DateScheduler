function checkName() {
    const name = document.getElementById('name').value.toLowerCase();
    const validNames = ["mrittika", "tanbin rubayra mrittika", "babesh"];
    const responseContainer = document.getElementById('responseContainer');
    const responseMessage = document.getElementById('responseMessage');
    const responseImage = document.getElementById('responseImage');

    if (validNames.includes(name)) {
        window.location.href = 'question2.html';
    } else {
        responseMessage.textContent = "No, you're not my girlfriend!";
        responseImage.src = 'images/x.jpg';
        responseContainer.classList.remove('hidden');
    }
}

function goToQuestion3() {
    window.location.href = 'question3.html';
}

function goToNextQuestion() {
    // You can implement logic to navigate to the next question as needed
    alert("Question answered! Moving to next.");
    // Redirect to next page
}
