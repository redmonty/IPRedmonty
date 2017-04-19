function say(x, f) {
 if ( f == 0 ) x[1](); else x[2]();
}
function sayHi() {
 console.log('Hi');
}
function sayBye() {
 console.log('Bye');
}

say({1 : sayHi, 2 : sayBye}, 1);

//Функции второго порядка разобраться !!! callback f!!!

function a(x){
 x();
}

if (prompt('say something', '').toLowerCase() == 'hi'){
 a(function(){console.log('Hi!');});
} else
if (prompt('say something', '').toLowerCase() == 'bye') {
    console.log('bye');
}
else {
 a(function(){
     console.log('Fuck off, bitch!');})
}