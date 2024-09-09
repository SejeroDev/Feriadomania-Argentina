const holidays = [
    {
        date: '2024-01-01',
        name: 'Año Nuevo',
        description: 'Celebración del inicio del nuevo año según el calendario gregoriano.',
        history: 'Este feriado se celebra desde el siglo XVI.',
        image: 'https://www.example.com/images/anio-nuevo.jpg'
    },
    {
        date: '2024-02-12',
        name: 'Carnaval',
        description: 'Fiestas y desfiles previos al inicio de la Cuaresma.',
        history: 'Tiene raíces en las tradiciones religiosas católicas.',
        image: 'https://www.example.com/images/carnaval.jpg'
    },
    {
        date: '2024-02-13',
        name: 'Carnaval',
        description: 'Segunda jornada de celebraciones de carnaval.',
        history: 'Este día es parte de la celebración tradicional de Carnaval en Argentina.',
        image: 'https://www.example.com/images/carnaval.jpg'
    },
    {
        date: '2024-03-24',
        name: 'Día Nacional de la Memoria por la Verdad y la Justicia',
        description: 'Conmemoración de las víctimas de la dictadura militar.',
        history: 'El feriado fue establecido en 2006 en homenaje a las víctimas del terrorismo de Estado.',
        image: 'https://www.example.com/images/memoria.jpg'
    },
    {
        date: '2024-03-29',
        name: 'Viernes Santo',
        description: 'Día religioso que conmemora la crucifixión de Jesucristo.',
        history: 'Se celebra en países de tradición cristiana desde la antigüedad.',
        image: 'https://www.example.com/images/viernes-santo.jpg'
    },
    {
        date: '2024-04-02',
        name: 'Día del Veterano y de los Caídos en la Guerra de Malvinas',
        description: 'Recordación de los soldados que participaron en la guerra de Malvinas en 1982.',
        history: 'Se celebra desde 2000 en memoria de los caídos en la guerra de Malvinas.',
        image: 'https://www.example.com/images/malvinas.jpg'
    },
    {
        date: '2024-05-01',
        name: 'Día del Trabajador',
        description: 'Celebración internacional de los derechos de los trabajadores.',
        history: 'Este feriado tiene su origen en los mártires de Chicago en 1886.',
        image: 'https://www.example.com/images/trabajador.jpg'
    },
    {
        date: '2024-05-25',
        name: 'Día de la Revolución de Mayo',
        description: 'Conmemoración de la revolución que llevó a la independencia de Argentina.',
        history: 'El feriado se celebra desde 1810 en homenaje a la Revolución de Mayo.',
        image: 'https://www.example.com/images/revolucion.jpg'
    },
    {
        date: '2024-06-17',
        name: 'Paso a la Inmortalidad del General Don Martín Miguel de Güemes',
        description: 'Homenaje al líder militar que defendió el norte de Argentina durante la guerra de independencia.',
        history: 'Este feriado fue establecido en 1999 para honrar a Güemes.',
        image: 'https://www.example.com/images/guemes.jpg'
    },
    {
        date: '2024-06-20',
        name: 'Día de la Bandera - Paso a la Inmortalidad del General Manuel Belgrano',
        description: 'Recordación del creador de la bandera argentina.',
        history: 'Se celebra desde 1938 en honor a Belgrano.',
        image: 'https://www.example.com/images/belgrano.jpg'
    },
    {
        date: '2024-07-09',
        name: 'Día de la Independencia',
        description: 'Celebración de la declaración de independencia de Argentina en 1816.',
        history: 'Este feriado fue establecido en 1816 en conmemoración de la independencia de Argentina.',
        image: 'https://www.example.com/images/independencia.jpg'
    },
    {
        date: '2024-08-19',
        name: 'Paso a la Inmortalidad del General José de San Martín (Trasladado)',
        description: 'Conmemoración del líder de la independencia sudamericana.',
        history: 'Feriado establecido en honor a San Martín desde 1850.',
        image: 'https://www.example.com/images/sanmartin.jpg'
    },
    {
        date: '2024-10-14',
        name: 'Día del Respeto a la Diversidad Cultural (Trasladado)',
        description: 'Celebración de la diversidad cultural y reconocimiento de las culturas originarias.',
        history: 'Feriado que se celebra desde 1917 para reconocer la diversidad cultural.',
        image: 'https://www.example.com/images/diversidad.jpg'
    },
    {
        date: '2024-11-25',
        name: 'Día de la Soberanía Nacional (Trasladado)',
        description: 'Conmemoración de la Batalla de la Vuelta de Obligado.',
        history: 'Este feriado se celebra desde 2010 en memoria de la resistencia argentina.',
        image: 'https://www.example.com/images/soberania.jpg'
    },
    {
        date: '2024-12-08',
        name: 'Día de la Inmaculada Concepción de María',
        description: 'Fiesta religiosa católica en honor a la Virgen María.',
        history: 'Se celebra en el mundo católico desde el siglo IX.',
        image: 'https://www.example.com/images/inmaculada.jpg'
    },
    {
        date: '2024-12-25',
        name: 'Navidad',
        description: 'Fiesta cristiana que celebra el nacimiento de Jesucristo.',
        history: 'Este feriado se celebra en todo el mundo cristiano desde el siglo IV.',
        image: 'https://www.example.com/images/navidad.jpg'
    }
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
        const minutesLeft = Math.floor(timeDiff / (1000 * 60)) % 60;
        const secondsLeft = Math.floor(timeDiff / 1000) % 60;
        const holiday = holidays.find(h => new Date(h.date).getTime() === nextHoliday.getTime());

        document.getElementById('days').textContent = `${daysLeft} días`;
        document.getElementById('weeks').textContent = `${weeksLeft} semanas`;
        document.getElementById('time').textContent = `${minutesLeft} minutos y ${secondsLeft} segundos`;
        document.getElementById('holiday-name').textContent = `${formatDate(nextHoliday)} - ${holiday.name}`;
        document.getElementById('holiday-description').textContent = `${holiday.description}`;
        document.getElementById('holiday-history').textContent = `Datos históricos: ${holiday.history}`;
        document.getElementById('holiday-image').src = holiday.image;
    } else {
        document.getElementById('days').textContent = 'No hay feriados futuros.';
        document.getElementById('weeks').textContent = '';
        document.getElementById('time').textContent = '';
        document.getElementById('holiday-name').textContent = '';
        document.getElementById('holiday-description').textContent = '';
        document.getElementById('holiday-history').textContent = '';
        document.getElementById('holiday-image').src = '';
    }
}

window.onload = calculateCountdown;
