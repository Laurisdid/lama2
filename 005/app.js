function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const n1 = ["Petras", "Asilas", "Barsukas", "Kate"];
const n2 = ["Antanas", "Asilas", "Barsukas", "Simona"];

const copy = n1.map((v) => v + " Valio");
const copy1 = n1.filter((v) => false);
const index = n1.indexOf("Drablys");

const copy2 = n1.filter((v) => -1 != n2.indexOf(v));

const copy3 = [];
for (let i = 0; i < n1.length; i++) {
  const what = n1[i];
  for (let k = 0; k < n2.length; k++) {
    if (n2[k] == n1[i]) {
      copy3.push(what);
      break;
    }
  }
}

// for (const ja of n1) {
//   console.log(ja);
// }

const ma = [rand(1, 3), rand(1, 3)];
for (let i = 2; i < 10; i++) {
  ma.push(ma[i - 1] + ma[i - 2]);
}


// console.table(copy3);
console.table(ma);

const kazkas = 'dsklfdvoi;dsfhvufdsvuilsfhidsiulvd';

const namasSuKaminu = {
  kaminas: 'yra 3metrai',
  gyventojai: ["Petras", "Asilas", "Barsukas", "Kate"],
  tas: kazkas
};

namasSuKaminu.animals = {cat: 'Murka', dog: 'Brisius'};

namasSuKaminu.tas = 888;

const namasSuKaminu2 = JSON.parse(JSON.stringify(namasSuKaminu));

namasSuKaminu2.animals.cat = 'Kitas katinas';


// const n4 = n1.slice(); // kopijavimas
const n4 = [...n1]; // kopijavimas
// n4.shift();

// const a1 = {cat: 'Murka', dog: 'Brisius'};

// const a2 = {...a1};




const map = new Map();

map.set('Murka', 5);
map.set('Pilkis', 8);
map.set('Pukis', 4);

map.set('Pilkis', 9);

console.log(map.get('Pilkis'));
// map.delete('Pilkis');

const masmap = [...map];

console.log(map.size);

const se = new Set();

const va = [4,8,2,7,7,4];

console.log(new Set(va));

se.add({t:'cat'});
se.add('dog');
se.add({t:'cat'});
se.delete('dog');

console.log(se.has({t:'cat'}));

console.log(se);







