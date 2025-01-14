// При першому додаванні: 3 конвертується у строку '3' та додається до 'number'. Отримуємо 'number33'
// При другому додаванні: друга 3 конвертується у строку '3' та додається до 'number3'. В результаті: 'number33'
console.log('number' + 3 + 3);

// null конвертується у 0 та додається до 3. В результаті: 3
console.log(null + 3);

// Повертається останній з операндів, тобто 'qwerty'
console.log(5 && "qwerty");

// +'40' та +'2' конвертуються у числа та виконується операція складання: 42
// При другому додаванні: 42 конвертується у строку '42' та додаться до 'hillel'. В результаті: '42hillel'
console.log(+'40' + +'2' + "hillel");

// Спочатку виконується '10' - 5, яке дорівнює 5
// 5 === 6 дорівнює false
console.log('10' - 5 === 6);

// true конвертується у 1, false - у 0. В результаті додавання: 1
console.log(true + false);

// '4px' не можливо конвертується у число. В результаті віднімання: NaN
console.log('4px' - 3);

// '4' конвертується у число 4
// 4 - 3 дорівнює 1
console.log('4' - 3);

// Спочатку виконується операція возведеня у ступінь (3 ** 1). Отримуємо 1
// '6' + 1 дорівнює 61 
console.log('6' + 3 ** 0);

// '6' конвертується у число 6
// 12 / 6 дорівнює 2
console.log(12 / '6');

// При (5 === 6) отримуємо false
// При додаванні '10' до false, false перетворюється у строку 'false'. В результаті: 10false
console.log('10' + (5 === 6));

// null не дорівнює '' за типом і значенням, тому в результаті: false
console.log(null == '');

// 9 / 3 = 3
// 3 ** 3 = 27
console.log(3 ** (9 / 3));

// 'false' дорівнює true, тому !'false' дорівнює false, !!'false' це true
// !!'true' дорівнює true
// true == true дорівнює true
console.log(!!'false' == !!'true');

// Строка '0' це true/1
// 1 && 1 дорівнює 1
// 0 || 1 дорівнює 1
console.log(0 || '0' && 1);

// (+null == false) дорівнює 1
// 1 < 1 це false
console.log((+null == false) < 1);

// false && true дорівнює false
// false || true дорівнює true
console.log(false && true || true);

// false || true дорівнює true
// false && true дорівнює false
console.log(false && (false || true));

// (+null == false) дорівнює 1
// 1 ** 5 дорівнює 1
// 1 < 1 дорівнює false
console.log((+null == false) < 1 ** 5);
