let a = 'labas'
let b = new String('labas');
let c = Number([55])

String.prototype.tail = function () {
    return this.valueOf() + 'o______?';
}

class Cat {

    constructor(n) {
        console.log('naujas katinas');
        this.name = n ?? 'bevrdis';
    }

    miau = () => {
        console.log(this.name + '  miauq');
    }
}
const myCat = new Cat('Pilkis');
const myCat22 = new Cat();

console.log(myCat.name);
console.log(myCat22.name);
myCat.miau();
myCat22.miau();

const m = new Map();
m.set(myCat22, myCat)
m.set(myCat, myCat22)
m.set('aa', myCat22)
console.log(m.get('aa'))
console.log(m.size)
console.log('akmenai')
//Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. Parašyti šiai klasei metodus,
// pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį 
//į konsolę- kiekPririnktaAkmenu(). Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.


class Kibiras {
    constructor(a) {
        this.akmenukiekis = a;
    }
    pridetiakmeni() {
        this.akmenukiekis++;
        console.log(this.akmenukiekis);
    }
    pridetiDaugAkmenu(kiekis) {
        this.akmenukiekis += kiekis;
        console.log(this.akmenukiekis);
    }
}
const mykibiras = new Kibiras(0);

mykibiras.pridetiakmeni()
mykibiras.pridetiDaugAkmenu(5)
mykibiras.pridetiakmeni()

console.log('pinigai')
//Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai.
// Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2,
// tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(),
// kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą.
// Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.


class Pinigine {
    constructor(a) {
        this.pinigai = a;
        this.pP = 0;
        this.mP = 0;
    }
    popieriniaiPinigai() {
        console.log(this.pP)
    }
    metaliniaiPinigai() {
        console.log(this.mP)
    }
    ideti(kiekis) {
        kiekis.forEach(e => {
            if (e <= 2) {
                this.mP += e;
            } else {
                this.pP += e;
            }
        });
    }
    // ideti(kiekis) {
    //     if (kiekis <= 2) {
    //         mP += kiekis;
    //     } else {
    //         pP += kiekis;
    //     }};

    skaiciuoti() {
        this.pinigai = this.mP + this.pP;
        console.log(this.pinigai);
    }
}
const pig = new Pinigine(0);

pig.ideti([2, 5, 1])
pig.skaiciuoti();
pig.metaliniaiPinigai();
pig.popieriniaiPinigai();

console.log('autobus')
//Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. 
//Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). 
//O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių.
// Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.

class Troleibusas {
    constructor(a) {
        this.zmones = a;
    }

    ilipa(keleiviuSkaicius) {
        this.zmones += keleiviuSkaicius;
        console.log('autobuse yra : ', this.zmones)
    }
    islipa(keleiviuSkaicius) {
        this.zmones -= keleiviuSkaicius;
        console.log('autobuse yra : ', this.zmones)
    }
    vaziuoja() {
        if (this.zmones <= 0) {
            console.log('autobusas stovi parke')
        } else {
            console.log('autobuse vaziuoja : ', this.zmones)
        }
    }
}
const vt = new Troleibusas(1);
vt.ilipa(1);
vt.ilipa(10);
vt.islipa(8);
vt.vaziuoja();
vt.islipa(4)
vt.islipa(4)
vt.vaziuoja();

//(MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. 
//Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). 
//Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį).
// Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.

class PirkiniuKrepselis {
    constructor(turinys) {
        this.map = new Map();
        this.map.set(turinys)
    }
    idetiSureli(kiekis) {
        this.map.set(kiekis, 'surelis')
    }
    idetiPieno(kiekis) {
        this.map.set(kiekis, 'pienas')
    }
    idetiDuonos(kiekis) {
        this.map.set(kiekis, 'duona')
    }
    krepselioTurinys(){
        console.log(this.map)
    }
}
const pk=new PirkiniuKrepselis;
pk.idetiDuonos(2);
pk.krepselioTurinys();
pk.idetiDuonos(2);