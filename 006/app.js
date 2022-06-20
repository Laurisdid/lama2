const b = 5;

function fun(ki, li) {
    console.log(ki);
    console.log(li);
    const rez1 = ki + li;
    const rez2 = ki * li;
    return [rez1, rez2];
}

const [gavau1, gavau2] = fun(5, 7);
console.log(gavau1, gavau2);



function suVardu() {
    console.log('as turiu grazu varda');
}

function suVardu() {
    console.log('bla bla bla');
}


const beVardo = function() {
    console.log('as neturiu vardo');
}

const strele = (t) => {
    console.log('As streline funkcija');
    return y;
}

const vienas = y => {
    return 'As streline funkcija';
}

const du = y => 'As streline funkcija DU';


// beVardo();
// suVardu();
console.log(du());
console.log(vienas());


// const fancy = () => {

//     return kita = () => {
//         console.log('labas');
//     }
// }

const fancy = () => () => console.log('labas');

const ja = fancy();

ja();

function alio(element) {
    console.log(element);
}


const array1 = ['a', 'b', 'c'];

array1.forEach((element, i) => console.log(element, i));

const dv = [
    [2, 3, 0, 8, 0],
    [7, 3, 8, 5, 6],
    [9, 3, 9, 8, 0],
    [1, 7, 8, 8, 9],
];

dv.forEach(r => r.forEach(n => console.log(n)));


const cat = {
    name: 'pilkis',
    voice: function() { console.log('Miauu')}
}
cat.voice();


const n = ["a", "A", "Barsukas", "Kate"];


n.sort((a, b) => {
    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }
    return 0;
});


console.table(n);
