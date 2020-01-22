let goUp = document.getElementById('goUp');
let body = document.querySelector('body');
let logoImg = document.querySelector('.logoImg');


body.onscroll = function(){
    goUp.style.display = "block";
};
setInterval(anime , 2000);
function anime(){
    logoImg.classList.toggle('animeMove');
}