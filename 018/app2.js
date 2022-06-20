class Senelis {

    constructor() {
        // console.log('SEN')
        this.name = 'Bronius';
    }

    bliauti() {
        console.log('uuuuuuuuuuuuuuu');
    }

    miegoti() {
        console.log('psssssszsssssssssss');
    }
}

class Tevas extends Senelis {

    constructor() {
        // console.log('TEV')
        super();
        this.name = 'Kazys';
        // this.barti = this.barti.bind(this);
    }
    barti() {
        console.log(this);
    }
}

class Vaikutis extends Tevas {

    constructor() {
        // console.log('VAIK')
        super();
        this.name = 'Petras';
    }

    bliauti() {
        console.log('Beeee...');
    }
}

const v = new Vaikutis();
const t = new Tevas();

console.log(v.name);

v.bliauti();
v.barti();
v.miegoti();

document.querySelector('button')
.addEventListener('click', () => v.barti())


// setInterval(v.barti, 1000);