const holidays = [
    { date: '2024-01-01', name: 'Año Nuevo', description: 'Celebración del inicio del nuevo año según el calendario gregoriano.' },
    { date: '2024-02-12', name: 'Carnaval', description: 'Fiestas y desfiles previos al inicio de la Cuaresma.' },
    { date: '2024-02-13', name: 'Carnaval', description: 'Segundo día de las festividades del Carnaval.' },
    { date: '2024-03-24', name: 'Día Nacional de la Memoria por la Verdad y la Justicia', description: 'Conmemoración de las víctimas de la dictadura militar.' },
    { date: '2024-04-07', name: 'Día del Veterano y de los Caídos en la Guerra de Malvinas', description: 'Recordación de los soldados argentinos de la guerra de Malvinas.' },
    { date: '2024-05-01', name: 'Día del Trabajador', description: 'Celebración internacional de los derechos laborales.' },
    { date: '2024-05-25', name: 'Día de la Revolución de Mayo', description: 'Conmemoración de la revolución que condujo a la independencia de Argentina.' },
    { date: '2024-06-17', name: 'Paso a la Inmortalidad del General Don Martín Miguel de Güemes', description: 'Homenaje al defensor del norte argentino en la independencia.' },
    { date: '2024-06-20', name: 'Paso a la Inmortalidad del General Manuel Belgrano', description: 'Recordación del creador de la bandera argentina.' },
    { date: '2024-07-09', name: 'Día de la Independencia', description: 'Celebración de la independencia de Argentina de España en 1816.' },
    { date: '2024-08-19', name: 'Paso a la Inmortalidad del General José de San Martín', description: 'Conmemoración del libertador sudamericano.' },
    { date: '2024-10-12', name: 'Día del Respeto a la Diversidad Cultural', description: 'Celebración de la diversidad cultural y reconocimiento de las culturas originarias.' },
    { date: '2024-11-01', name: 'Día de Todos los Santos', description: 'Celebración cristiana en honor a todos los santos.' },
    { date: '2024-11-25', name: 'Día de la Soberanía Nacional', description: 'Conmemoración de la resistencia en la batalla de Vuelta de Obligado.' },
    { date: '2024-12-08', name: 'Inmaculada Concepción de la Virgen María', description: 'Fiesta religiosa en honor a la Virgen María.' },
    { date: '2024-12-25', name: 'Navidad', description: 'Celebración cristiana del nacimiento de Jesucristo.' }
];

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('es-AR', options).format(date);
}

function calculateCountdown() {
    const today = new Date();
    let nextHoliday = null;

    // Buscar el próximo feriado
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
        const holiday = holidays.find(h => new Date(h.date).getTime() === nextHoliday.getTime());

        document.getElementById('days').textContent = `${daysLeft} días`;
        document.getElementById('weeks').textContent = `${weeksLeft} semanas`;
        document.getElementById('holiday-name').textContent = `${formatDate(nextHoliday)} - ${holiday.name}`;
        document.getElementById('holiday-description').textContent = `${holiday.description}`;
    } else {
        document.getElementById('days').textContent = 'No hay feriados futuros.';
        document.getElementById('weeks').textContent = '';
        document.getElementById('holiday-name').textContent = '';
        document.getElementById('holiday-description').textContent = '';
    }
}

window.onload = calculateCountdown;
