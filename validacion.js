function sololetras(){

    key=e.keyCode || e.which;

    teclado=String.fromCharCode(key).toLowerCase();

    letras=" abcdefghijklmnopqrstuvwxyz";

    especiales="8-37-38-46-164";
    
    teclado_especial=false;

    for(var i in especiales){

        if(key==especiales[i]){
            teclado_especial=true;break;
        }
    }

    if(letras.indexOf(teclado)==-1 && !teclado_especial){

        return false;
        alert("Ingrese solo letras")
    }
}

    const inputRandomNumber = document.getElementById('inputRandom');

    window.addEventListener('load', () => {
    getRandomNumber();
})

    function getRandomNumber() {
        let randomNumber = Math.random().toString().slice(2, 8);
        inputRandomNumber.value = randomNumber;
}