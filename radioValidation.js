'use strict;'

window.onload = (event) => {

    //Make the first-lang-input required when the "is-first-lang-no" radio button is clicked
    let firstLanguageNoRadio = document.getElementById("is-first-lang-no");
    firstLanguageNoRadio.addEventListener("click", (event) =>{
        //If this radio is selected, the "first-lang-input" is required
        if(event.target.checked === true){
            let firstLanguageInput = document.getElementById("first-lang-input");
            firstLanguageInput.setAttribute("required", '');
        }
    });

    //Make the first-lang-input not required when any other option is selected
    let firstLanguageYesRadio = document.getElementById("is-first-lang-yes");
    firstLanguageYesRadio.addEventListener("click", (event) =>{
        //If this radio is selected, the "first-lang-input" is not required
        if(event.target.checked === true){
            let firstLanguageInput = document.getElementById("first-lang-input");
            firstLanguageInput.removeAttribute('required', '');
        }
    });

    let citizenshipRadios = document.getElementsByClassName("citizenship-radio");
    console.log(citizenshipRadios);
    for(let radio in citizenshipRadios){
        if (citizenshipRadios[radio].id !== "other-citizen") {
            citizenshipRadios[radio].addEventListener("click", (event) =>{
                if (event.target.checked === true) {
                    let citizenshipInput = document.getElementById("citzenship-country");
                    citizenshipInput.removeAttribute('required', '');
                }
            });
        }
        else if(citizenshipRadios[radio].id === "other-citizen"){
            citizenshipRadios[radio].addEventListener("click", (event) =>{
                if (event.target.checked === true) {
                    let citizenshipInput = document.getElementById("citzenship-country");
                    citizenshipInput.setAttribute('required', '');
                }
            });           
        }
    };
}