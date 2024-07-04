export default class Cl_DCYT {
    constructor() {
        this.cntEstud = 0;
        this.nTotal = 0; // Inicializa la suma total en 0
        this.contEstudFemeninasAprobadas = -1; // Contador de estudiantes femeninas con nota mayor a 48
        this.mayorNota = -Infinity;
    }

    ProcesadordeNotaTotal(estudiante) {
        const notaTotal = estudiante.Np1 + estudiante.Np2 + estudiante.Np3;
        this.nTotal += notaTotal;
        this.cntEstud++;
        if (notaTotal > this.mayorNota) {
            this.mayorNota = notaTotal;
        }
        
        // Verificamos si el estudiante es femenino y su nota es mayor a 48
        if (estudiante.Sexo === "F" && notaTotal > 48) {
            this.contEstudFemeninasAprobadas++;
        }
      
        return notaTotal;
    }

    calcularPromedio() {
        return this.nTotal / this.cntEstud;
    }
}