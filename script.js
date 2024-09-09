// Lista de feriados de Argentina (añadir o actualizar según sea necesario)
const holidays = [
    { date: '2024-10-12', name: 'Día del Respeto a la Diversidad Cultural' },
    { date: '2024-11-01', name: 'Día de Todos los Santos' },
    { date: '2024-12-25', name: 'Navidad' },
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
