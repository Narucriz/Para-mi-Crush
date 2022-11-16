function moverBotonRandon(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeigth) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(e) {moverBotonRandon (e.target) });

btnSi.addEventListener('click', function(e) {
    alert('Sabía que dirias que SI. Casemonos ya y tengamos hijos. Te amoo!!!!! ❤')

    divModoSexo.style.display = 'block';
    const cancion = new Audio('img\\George Michael  Careless Whisper Official Video.mp3');
    cancion.play();
 });

 botones = document.getElementsByTagName('button');
 console.log(botones[0]);

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = "";
})
