class Grybas{
    constructor(){
        this.valgomas=!this.rand(0,1)
        this.sukirmijas=!this.rand(0,1)
        this.svoris=this.rand(5,45)
    }
    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

class Krepsys{

    constructor(){
        this.dydis=500;
        this.prikrauta=0;
    }
    deti(Grybas){
        if (Grybas.valgomas && !grybas.sukirmijas){
            this.prikrauta+=grybas.svoris;
        }
        return this.prikrauta<this.dydis
    }
}
const Kr= new Krepsys();
while(Kr.deti(new Grybas())){}
console.log(Kr)