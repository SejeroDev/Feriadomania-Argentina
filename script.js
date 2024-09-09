// Lista completa de feriados nacionales de Argentina en 2024 con descripciones
const holidays = [
    { date: '2024-01-01', name: 'Año Nuevo', description: 'Celebración del inicio del nuevo año según el calendario gregoriano.' },
    { date: '2024-02-12', name: 'Carnaval', description: 'Fiestas y desfiles previos al inicio de la Cuaresma, con celebraciones populares y bailes.' },
    { date: '2024-02-13', name: 'Carnaval', description: 'Segundo día de festividades del Carnaval.' },
    { date: '2024-03-24', name: 'Día Nacional de la Memoria por la Verdad y la Justicia', description: 'Conmemoración de las víctimas de la dictadura militar que gobernó Argentina entre 1976 y 1983.' },
    { date: '2024-04-07', name: 'Día del Veterano y de los Caídos en la Guerra de Malvinas', description: 'Recordación de los soldados argentinos que participaron en la guerra de Malvinas en 1982.' },
    { date: '2024-05-01', name: 'Día del Trabajador', description: 'Celebración internacional de los derechos de los trabajadores y la clase trabajadora.' },
    { date: '2024-05-25', name: 'Día de la Revolución de Mayo', description: 'Conmemoración de la revolución que llevó a la independencia de Argentina del dominio español.' },
    { date: '2024-06-17', name: 'Paso a la Inmortalidad del General Don Martín Miguel de Güemes', description: 'Homenaje al líder militar que defendió el norte de Argentina durante la guerra de independencia.' },
    { date: '2024-06-20', name: 'Paso a la Inmortalidad del General Manuel Belgrano', description: 'Recordación del creador de la bandera argentina y uno de los líderes de la independencia.' },
    { date: '2024-07-09', name: 'Día de la Independencia', description: 'Celebración de la declaración de independencia de Argentina de España en 1816.' },
    { date: '2024-08-19', name: 'Día del Paso a la Inmortalidad del General José de San Martín', description: 'Conmemoración del líder de la independencia sudamericana.' },
    { date: '2024-10-12', name: 'Día del Respeto a la Diversidad Cultural', description: 'Celebración de la diversidad cultural y reconocimiento de las culturas originarias.' },
    { date: '2024-11-01', name: 'Día de Todos los Santos', description: 'Celebración cristiana en honor a todos los santos.' },
    { date: '2024-11-25', name: 'Día de la Soberanía Nacional', description: 'Conmemoración de la batalla de Vuelta de Obligado, que destacó la resistencia argentina contra la invasión anglo-francesa.' },
    { date: '2024-12-08', name: 'Inmaculada Concepción de la Virgen María', description: 'Celebración religiosa en honor a la Virgen María y su concepción sin pecado original.' },
    { date: '2024-12-25', name: 'Navidad', description: 'Fiesta cristiana que celebra el nacimiento de Jesucristo.' }
];

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('es-AR', options).format(date);
}

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
        const monthsLeft = Math.floor(daysLeft / 30);
        const hoursLeft = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

        const holiday = holidays.find(h => new Date(h.date).getTime() === nextHoliday.getTime());

        document.getElementById('days').textContent = `Faltan ${daysLeft} días (${monthsLeft} meses), ${weeksLeft} semanas, ${hoursLeft} horas, ${minutesLeft} minutos y ${secondsLeft} segundos para el próximo feriado.`;
        document.getElementById('holiday-name').textContent = `El feriado es: ${formatDate(nextHoliday)} - ${holiday.name}`;
        document.getElementById('holiday-description').textContent = `Descripción: ${holiday.description}`;
    } else {
        document.getElementById('days').textContent = 'No hay feriados programados en el futuro.';
        document.getElementById('weeks').textContent = '';
        document.getElementById('holiday-name').textContent = '';
        document.getElementById('holiday-description').textContent = '';
    }
}

// Calcular el conteo al cargar la página
window.onload = calculateCountdown;
