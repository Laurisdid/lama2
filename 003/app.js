
let a = 0;

let b = 0;

while (b < -10) {

    if (++a > 100) {//saugiklis
        console.log('avarija');
        break; 
    }

    b++;

}

let c = 0;

do {

    if (++a > 100) {//saugiklis
        console.log('avarija');
        break; 
    }

    c++;


}while(c < -10);

console.log(b, c);

for (let i = 0; i < 10; i++) {

    if (i == 2) {
        break;
    }
    
    if (i == 6 || i == 3) {
        continue;
    }
    
    console.log(`Dabar sukasi:
     ${ i + 1 } ratas`);

}

console.log(['','','','',''].length);


for (let i = 0; i < 5; i++) {
    console.log(`Dabar einasi DIDELIS: ${ i + 1 } ratas`);

    for (let k = 0; k < 3; k++) {
        console.log(`Dabar einasi MAZIUKAS: ${ k + 1 } ratukas`);
    }

}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// leksteje gali buti 10...30 kasniu kotleto
// kasnis susikramto per rand 1...10
// kasnis susikramto neaisku kaip- tikrinti po kiekvieno krimstelejimo

const kotletoKasniai = rand(10, 30);
let kotletasSuvalgytasPer = 0;

for (let i = 0; i < kotletoKasniai; i++) {
 
    // const gabaliukasSukramtomas = rand(1, 10);
    // kotletasSuvalgytasPer += gabaliukasSukramtomas;

    let r;
    do {
        r = rand(0, 2);
        kotletasSuvalgytasPer++;

    } while(r);


}

console.log(kotletasSuvalgytasPer);









