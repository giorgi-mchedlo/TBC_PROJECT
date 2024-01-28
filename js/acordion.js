const acordion = document.getElementsByClassName('content-container');

for (let i = 0; i < acordion.length; i++) {
    acordion[i].addEventListener("click", function () {
        // Toggle the active class on the clicked question
        this.classList.toggle('active');

        // Close other open questions
        for (let j = 0; j < acordion.length; j++) {
            if (j !== i && acordion[j].classList.contains('active')) {
                acordion[j].classList.remove('active');
            }
        }
    });
}

