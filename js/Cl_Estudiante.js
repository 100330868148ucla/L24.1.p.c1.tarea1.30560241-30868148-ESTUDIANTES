export default class Estudiante {
    constructor (CI, Sexo, Np1, Np2, Np3) {
        this.CI= c;
        this.Sexo= s;
        this.Np1= a;
        this.Np2= b;
        this.Np3= c;
    }
    set CI (c) {
        this._CI= +c;
    }
    get CI () {
        return this._CI;
    }
     set Sexo (s) {
        this._Sexo= +s;
    }
     get Sexo () {
        return this._Sexo;
    }
    set Np1 (a) {
        this.Np1= a;
    }
    get Np1 () {
        return this.Np1;
    }
    set Np2 (b) {
        this.Np2= b;
    }
    get Np2 () {
        return this.Np2;
    }
    set Np3 (c) {
        this.Np3= c;
    }
    get Np3 () {
        return this.Np3;
    }

}
