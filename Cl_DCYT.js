export default class Cl_DCYT {
    constructor() {
        this.cntEstud = 0;
        this.nTotal = 0; // Inicializa la suma total en 0
        this.contEstud = 0;
        this.contEstudFemeninas = 0; // Contador de estudiantes femeninas
        this.contEstudFemeninasAprobadas = 0; // Contador de estudiantes femeninas con nota mayor a 48
        this.mayorNota = -Infinity;
    }

    ProcesadordeNotaTotal(estudiante) {
        const notaTotal = estudiante.Np1 + estudiante.Np2 + estudiante.Np3;
        this.nTotal += notaTotal;
        this.cntEstud++;
        if (notaTotal > this.mayorNota) {
            this.mayorNota = notaTotal;
        }
        if (estudiante.Sexo == 'F') {
            this.contEstudFemeninas++; // Incrementa el contador de estudiantes femeninas
            if (notaTotal >= 48) {
                this.contEstudFemeninasAprobadas++; // Incrementa el contador de estudiantes femeninas con nota mayor a 48
            }
        }
        return notaTotal;
    }

    calcularPromedio() {
        return this.nTotal / this.cntEstud;
    }
}