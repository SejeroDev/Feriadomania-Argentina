// Lista completa de feriados nacionales de Argentina en 2024
const holidays = [
    { date: '2024-01-01', name: 'Año Nuevo' },
    { date: '2024-02-12', name: 'Carnaval' },
    { date: '2024-02-13', name: 'Carnaval' },
    { date: '2024-03-24', name: 'Día Nacional de la Memoria por la Verdad y la Justicia' },
    { date: '2024-04-07', name: 'Día del Veterano y de los Caídos en la Guerra de Malvinas' },
    { date: '2024-05-01', name: 'Día del Trabajador' },
    { date: '2024-05-25', name: 'Día de la Revolución de Mayo' },
    { date: '2024-06-17', name: 'Paso a la Inmortalidad del General Don Martín Miguel de Güemes' },
    { date: '2024-06-20', name: 'Paso a la Inmortalidad del General Manuel Belgrano' },
    { date: '2024-07-09', name: 'Día de la Independencia' },
    { date: '2024-08-19', name: 'Día del Paso a la Inmortalidad del General José de San Martín' },
    { date: '2024-10-12', name: 'Día del Respeto a la Diversidad Cultural' },
    { date: '2024-11-01', name: 'Día de Todos los Santos' },
    { date: '2024-11-25', name: 'Día de la Soberanía Nacional' },
    { date: '2024-12-08', name: 'Inmaculada Concepción de la Virgen María' },
    { date: '2024-12-25', name: 'Navidad' }
];

function calculateCountdown() {
    const today = new Date();
    let nextHoliday = null;

    // Encontrar el próximo feriado
    for (const holiday of holidays) {
        const holidayDate = new Date(holiday.date);
        if (holidayDate > today) {
            nextHoliday = holidayDate;
            break;
        }
    }

    if (nextHoliday) {
        const timeDiff = nextHoliday - today;
        const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const weeksLeft = Math.floor(daysLeft / 7);

        document.getElementById('days').textContent = `Faltan ${daysLeft} días para el próximo feriado: ${nextHoliday.toDateString()}.`;
        document.getElementById('weeks').textContent = `O lo que es igual a ${weeksLeft} semanas.`;
    } else {
        document.getElementById('days').textContent = 'No hay feriados programados en el futuro.';
        document.getElementById('weeks').textContent = '';
    }
}

// Calcular el conteo al cargar la página
window.onload = calculateCountdown;
