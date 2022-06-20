//Sukurti klasę Stikline. Sukurti savybes turis ir kiekis.
// Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti(kiekis), 
//kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- 
//kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį.
// Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(),
// kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100.
// Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.

class Stikline {

    static gerimukas = 'Pepsi';
    static registras = [];

    static naujaStikline(t) {
        // return;
        return new this(t);
    }

    static whatType() {
        console.log(this.gerimukas);
    }

    static visosStiklines(stikline) {
        this.registras.push(stikline);
    }

    constructor(turis) {
        this.turis = turis;
        this.kiekis = 0;
        this.constructor.visosStiklines(this);
    }

    ipilti(kiekis) {
        this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
        return this;
    }

    ispilti() {
        const kiek = this.kiekis;
        this.kiekis = 0;
        return kiek;
    }

    stiklinejeYra() {
        console.log(`Stiklinėje ${this.turis}ml yra:
        ${this.kiekis} ${this.constructor.gerimukas} `);
    }


}

const s1 = new Stikline(200);
const s2 = Stikline.naujaStikline(150);
console.log(s2);
const s3 = new Stikline(100);

console.log(Stikline.registras);

Stikline.whatType();

console.log(Stikline.gerimukas);

s3.ipilti(s2.ipilti(s1.ipilti(80).ispilti()).ispilti());

Stikline.registras[0].ipilti(40);

s1.stiklinejeYra();
s2.stiklinejeYra();
s3.stiklinejeYra();