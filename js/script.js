{
    const init = () => {
        let buttonOne = document.querySelector(".js-buttonOne");
        let buttonTwo = document.querySelector(".js-buttonTwo");
        let buttonThree = document.querySelector(".js-buttonThree");
        let buttonFour = document.querySelector(".js-buttonFour");
        
        let boxOne = document.querySelector(".js-boxOne");
        let boxTwo = document.querySelector(".js-boxTwo");
        let boxThree = document.querySelector(".js-boxThree");
        
        let gameInfo = document.querySelector(".game__info");
        
        buttonOne.addEventListener("click", () => {
            if(!(boxOne.classList.contains("game__box--error") && boxThree.classList.contains("game__box--error")) && boxTwo.classList.contains("game__box--error")) {
                boxOne.classList.add("game__box--error");
                boxTwo.classList.remove("game__box--error");
            } else {
                boxTwo.classList.add("game__box--error");
                boxOne.classList.remove("game__box--error");
            }
        });
        
        buttonTwo.addEventListener("click", () => {
            boxThree.classList.add("game__box--error");
            boxTwo.classList.remove("game__box--error");
        });
        
        buttonThree.addEventListener("click", () => {
            if (boxOne.classList.contains("game__box--error")) {
                boxOne.classList.remove("game__box--error");
            } else if (boxOne.classList.contains("game__box--error") && boxTwo.classList.contains("game__box--error")) {
                boxOTwo.classList.add("game__box--error");
            } else {
                boxOne.classList.add("game__box--error");
                boxThree.classList.remove("game__box--error");
            }
        });
        
        buttonFour.addEventListener("click", () => {
            if (boxOne.classList.contains("game__box--error")) {
                boxTwo.classList.add("game__box--error");
            } else if (boxOne.classList.contains("game__box--error") && boxTwo.classList.contains("game__box--error")) {
                boxOne.classList.remove("game__box--error");
            } else if (boxTwo.classList.contains("game__box--error") && boxThree.classList.contains("game__box--error")) {
                boxTwo.classList.remove("game__box--error");
                boxThree.classList.remove("game__box--error");
            } else if (
                boxOne.classList.contains("game__box--error") &&
                boxThree.classList.contains("game__box--error")
            ) {
                boxTwo.classList.add("game__box--error");
            } else {
                boxOne.classList.add("game__box--error");
            }
            
            if (boxOne.classList.contains("game__box--error") && boxTwo.classList.contains("game__box--error") && boxThree.classList.contains("game__box--error")) {
                gameInfo.innerHTML ="<p class='game__success'>Brawo! Wszystkie kwadraty są kolru czerwonego!</p>";
            }
        });
    } 
    
    init();
}