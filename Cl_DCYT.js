export default class Cl_DCYT {
    constructor() {
        this.cntEstud = 0;
        this.nTotal = 0; 
        this.contEstudFemeninasAprobadas = -1;
        this.mayorNota = -Infinity;
    }

    ProcesadordeNotaTotal(estudiante) {
        const notaTotal = estudiante.Np1 + estudiante.Np2 + estudiante.Np3;
        this.nTotal += notaTotal;
        this.cntEstud++;
        if (notaTotal > this.mayorNota) {
            this.mayorNota = notaTotal;
        }
        
        if (estudiante.Sexo === "F" && notaTotal > 48) {
            this.contEstudFemeninasAprobadas++;
        }
      
        return notaTotal;
    }

    calcularPromedio() {
        return this.nTotal / this.cntEstud;
    }
}