/*1. Треугольник в цикле
Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:
#
##
###
####
#####
######
#######
Будет полезно знать, что длину строки можно узнать, приписав к переменной .length.*/

function rectangle(length) {
    length = +prompt('Rectengle size?','7');
    for(let i = 0; i <= length; i++){
        let b = '#'.repeat(i);
        console.log(b);
    }
};
//rectangle();

/*2. FizzBuzz
Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. 
Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.
(На самом деле, этот вопрос подходит для собеседований, и, говорят, он позволяет отсеивать довольно большое число кандидатов. 
Поэтому, когда вы решите эту задачу, можете себя похвалить.)
 */

function fb(length=100){
    for(let i = 0, b = 'Bizz', f = 'Fizz'; i <= length; i++) {
        if((i % 3 == 0) && (i % 5 == 0)){
            console.log(i,f + b);
        } else 
        if(i % 3 == 0) {
            console.log(i,f);
        }
    }
};
//fb()

/*3. Chess board
Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. 
На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
Когда справитесь, сделайте размер доски переменным, чтобы можно было создавать доски любого размера.
*/
function chessBoard(boardLen) {
    boardLen = +prompt('Длина шахматной доски?','8');
    for(let i = 1; i <= boardLen / 2; i++) {
        console.log('# '.repeat(boardLen));
        console.log(' #'.repeat(boardLen));
    }
};
//chessBoard();

/*4. charSum
Пользователь вводит целое положительное число m (prompt), найти сумму цифр и вывести в консоль.
*/
function simpleSum() {
    let n = prompt('Enter a number', '');
    for(var i = 0,result=0,sum; i <= n; i++) {
        result += i;
    }
    for(var i = 0,sum = 0; i < n.length; i++) {
        sum += parseInt(n[i], 10);
    }
    console.log('Сума чисел от 1 до ' + n + ' равна ' + result);
    console.log('Сумма цифер ' + sum);
};
//simpleSum();

/*5. Prime number
Пользователь вводит целое положительное число m (prompt), является ли число m простым? Результат вывести в консоль*/

function isSimple(n=5){
	if(n==1) {
		return false;
    }
	for(d=2; d*d<=n; d++){ 
		if(n%d==0) 
			return false;
		}
    console.log(n, 'простое число');
	return true;
	}
//isSimple()

/*6. Sausagefest
Выведите в консоль индекс буквы "З" в фразе "Мы приехали в Запорожье".
*/
function letterIndex() {
    let str = 'Мы приехали в Запорожье',
        b = str.indexOf('З');
    console.log('Индекс буквы "З" -', b);
};
//letterIndex();

