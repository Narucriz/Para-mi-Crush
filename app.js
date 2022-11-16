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

 divModoSexo.addEventListener('click', function(e){
    divModoSexo.innerHTML ="<img src='https://i.pinimg.com/originals/c5/e3/c9/c5e3c9b5260daa31f5a4ab03ff048ece.png'>";
 })


 botones = document.getElementsByTagName('button');
 console.log(botones[0]);

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = "";
})
