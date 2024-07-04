/**
 * En la UCLA, el DCYT desea conocer algunas estadísticas de sus estudiantes. De cada
 * estudiante se conoce: su cédula, sexo y sus tres notas parciales. Se requiere conocer por el
 * DCYT: a) nota total obtenida por el estudiante b) la mayor nota obtenida c) De los
 * estudiantes femeninos cantidad de estudiantes aprobadas, d) promedio de notas
 * El DCYT suministra la siguiente información demostrativa, para 4 estudiantes: (cedula, sexo,
 * notap1, notap2, notap3) (13457856, M, 15, 20, 25) (15432551, F, 10, 10, 10) (32455678, M,
 * 18, 22, 20) (28678900, F, 18, 25, 24), según lo cual la salida requerida presenta el siguiente
 * formato: 
 * El estudiante con cedula 13457856 obtuvo una nota total de 60
 * El estudiante con cedula 15432551 obtuvo una nota total de 30
 * El estudiante con cedula 32455678 obtuvo una nota total de 60
 * El estudiante con cedula 28678900 obtuvo una nota total de 67
 * La mayor nota es 67
 * Estudiantes femeninas aprobadas 1
 * Promedio de notas 54.25
 * */

import Cl_DCYT from "./Cl_DCYT.js"; // Asegúrate de la ruta correcta
import Cl_Estudiante from "./Cl_Estudiante.js";  // Asegúrate de la ruta correcta

let Estudiante1 = new Cl_Estudiante(13457856, 'M', 15, 20, 25);
let Estudiante2 = new Cl_Estudiante(15432551, 'F', 10, 10, 10);
let Estudiante3 = new Cl_Estudiante(32455678, 'M', 18, 22, 20);
let Estudiante4 = new Cl_Estudiante(28678900, 'F', 18, 25, 24);

let notasParcial = new Cl_DCYT();
notasParcial.ProcesadordeNotaTotal(Estudiante1);
notasParcial.ProcesadordeNotaTotal(Estudiante2);
notasParcial.ProcesadordeNotaTotal(Estudiante3);
notasParcial.ProcesadordeNotaTotal(Estudiante4);

// Mostrar los resultados en el elemento con id="Salida"
const salida = document.getElementById("Salida");
salida.innerHTML = `
    El estudiante con cedula ${Estudiante1.CI} obtuvo una nota total de ${notasParcial.ProcesadordeNotaTotal(Estudiante1)}<br>
    El estudiante con cedula ${Estudiante2.CI} obtuvo una nota total de ${notasParcial.ProcesadordeNotaTotal(Estudiante2)}<br>
    El estudiante con cedula ${Estudiante3.CI} obtuvo una nota total de ${notasParcial.ProcesadordeNotaTotal(Estudiante3)}<br>
    El estudiante con cedula ${Estudiante4.CI} obtuvo una nota total de ${notasParcial.ProcesadordeNotaTotal(Estudiante4)}<br>
    La mayor nota es ${notasParcial.mayorNota}<br>
    Estudiantes femeninas aprobadas ${notasParcial.contEstudFemeninasAprobadas}<br>
    Promedio de notas ${notasParcial.calcularPromedio().toFixed(2)}
`;