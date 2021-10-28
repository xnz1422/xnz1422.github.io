var userName = document.getElementById('exampleInputUser');
var userPassword = document.getElementById('exampleInputPassword');
var addressMail = document.getElementById('exampleInputEmail1');
var msgError = document.getElementById('error');
var form = document.getElementById('formu-Registro');

msgError.style.color = 'red';

form.addEventListener('submit', function(validate){
validate.preventDefault();
var msgs = [];
var reName = /[\W]/;
if(userName.value === null || userName.value === ''){
    msgs.push('Ingrese Nombre de Usuario');
}
else if(userName.value.length <8) {
        msgs.push('El nombre de usuario debe tener un minimo de 8 caracteres');
}
else if(reName.test(userName.value)) {
        msgs.push('El nombre de usuario no debe tener caracteres especiales');
};
var rePass= /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
if(userPassword.value === null || userPassword.value === ''){
    msgs.push('Ingrese una contraseña');
}
else if(userPassword.value.length <8) {
        msgs.push('La contraseña de usuario debe tener mas de 8 caracteres');
}
else if(!rePass.test(userPassword.value)) {
    msgs.push('La contraseña debe tener una letra minuscula, una mayuscula, un numero y un caracter especial');
};
var reMail = /(\w|\W)+@(\w|\W)+\.\w+/;
if(addressMail.value === null || addressMail.value === ''){
    msgs.push('Ingrese direccion de correo');
}
else if(!reMail.test(addressMail.value)) {
        msgs.push('No es un formato de mail valido');
};
msgError.innerHTML = msgs.join(', ');
});