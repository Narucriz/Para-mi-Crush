window.onclick = function() {
    //Crea una serie de elements por cada tag encontrado
    let encabezados = document.createElement("h1")
    const text = document.createTextNode("¿quieres ser mi Wafle?")
    
    encabezados.appendChild(text)
    document.body.appendChild(encabezados);
}



/*
window.onclose = function() {
    let confirmation = false;
    if (!confirmation && true) {
        const message = "Esperaaaaaaa, no te elvides las cosas que pasamos juntos. yo te amo...";
    }
}
*/