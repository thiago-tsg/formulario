const form = document.querySelectorAll('.form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('span-required');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function nameValidate(){
    if(campos[0].value.length < 3){
        console.log('NOME DEVE TER NO MININO 3 CARACTERES')
    } else{
        console.log('VALIDADO COM SUCESSO')
    }
}