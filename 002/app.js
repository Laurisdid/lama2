console.log('labas');

let skaicius = 0;
let netikrasSkaicius = '  ';
let loginis = false;

console.log(typeof skaicius);
console.log(typeof netikrasSkaicius);
console.log(typeof loginis);


console.log(!!netikrasSkaicius);

// yes 7

// no 8, 9




let t = 8;
if (t <= 7) {
    console.log('Yes');
}
// else if(skaicius) {
//     console.log('Nezinau');
// }
else {
    console.log('No');
}

// console.log(true && true);

/*
> <===> <=
< <===> >=
== <===> !=
|| <===> &&
*/

console.log('')

let kas = 'antis';

switch(kas) {
    case 'anas':
        console.log('ANAS');
        break;
    case 'tas':
        console.log('TAS');
        break;
    case 'antis':
        console.log('ANTIS');
        break;
    default:
        console.log('LABANAKT');
}

let b;

if (3 < 7) {
    let a = 'valio';
    b = 'valio';
    
}

if (3 < 7) {
    let a = 'valio';
    let b = 'hhh';
    
}

console.log(b);
console.log(a);

