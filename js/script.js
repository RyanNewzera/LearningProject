showDivs(1);

document.getElementsByClassName("slider-1")[0].addEventListener('click', (event) => {
    showDivs(1);          
});

document.getElementsByClassName("slider-2")[0].addEventListener('click', (event) => {
    showDivs(2);          
});

function showDivs(n) {
    var x = document.getElementsByClassName("group-right")[0];
    var dot_1 = document.getElementsByClassName("slider-1")[0];
    var dot_2 = document.getElementsByClassName("slider-2")[0];

    if (n === 1) {
        dot_1.style.background = "white";
        dot_2.style.background = "transparent";
        x.style.backgroundImage = "url(../res/Background.png)";
    } else {
        dot_2.style.background = "white";
        dot_1.style.background = "transparent";
        x.style.backgroundImage = "url(../res/Group2.png)";
    }
}