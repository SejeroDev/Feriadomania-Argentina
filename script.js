const users = {}; // Objeto para almacenar usuarios y contraseñas

function showRegister() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'block';
}

function showLogin() {
    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}

document.getElementById('show-register').addEventListener('click', (e) => {
    e.preventDefault();
    showRegister();
});

document.getElementById('show-login').addEventListener('click', (e) => {
    e.preventDefault();
    showLogin();
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (users[username] && users[username] === password) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('app').style.display = 'flex';
        document.getElementById('user-info').innerText = `Bienvenido, ${username}`;
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value.trim();
    const password = document.getElementById('register-password').value.trim();

    if (!users[username]) {
        users[username] = password;
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        showLogin();
    } else {
        alert('El usuario ya existe.');
    }
});

// Lista de feriados
const holidays = [
    { date: '2024-01-01', name: 'Año Nuevo', description: 'Celebración del inicio del nuevo año.', history: 'Se celebra desde el siglo XVI.' },
    { date: '2024-02-12', name: 'Carnaval', description: 'Desfiles previos a la Cuaresma.', history: 'Tradición católica.' },
    { date: '2024-03-24', name: 'Día de la Memoria', description: 'Homenaje a las víctimas de la dictadura.', history: 'Se estableció en 2006.' },
    { date: '2024-04-02', name: 'Día de Malvinas', description: 'Recuerdo de la guerra de Malvinas.', history: 'Se celebra desde 2000.' },
    { date: '2024-05-25', name: 'Revolución de Mayo', description: 'Conmemoración de la Revolución.', history: 'Desde 1810.' }
    // Agregar más feriados aquí
];

// Renderiza los feriados
function renderHolidays() {
    const holidayList = document.getElementById('holidayList');
    holidays.forEach(holiday => {
        const holidayDiv = document.createElement('div');
        holidayDiv.className = 'holiday';
        holidayDiv.innerHTML = `<h3>${holiday.name}</h3><p>${holiday.description}</p><p><strong>Historia:</strong> ${holiday.history}</p>`;
        holidayList.appendChild(holidayDiv);
    });
}

// Calcula y muestra el tiempo hasta el próximo feriado
function updateCountdown() {
    const now = new Date();
    let nextHoliday = null;

    for (const holiday of holidays) {
        const holidayDate = new Date(holiday.date);
        if (holidayDate > now) {
            if (!nextHoliday || holidayDate < new Date(nextHoliday.date)) {
                nextHoliday = holiday;
            }
        }
    }

    if (nextHoliday) {
        const nextHolidayDate = new Date(nextHoliday.date);
        const timeDiff = nextHolidayDate - now;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para el ${nextHoliday.name} (${nextHoliday.date}).`;
    } else {
        document.getElementById('countdown').innerHTML = 'No hay más feriados en el año.';
    }
}

function addComment() {
    const comment = document.getElementById('comment').value.trim();
    const userInfo = document.getElementById('user-info').innerText;

    if (!userInfo) {
        alert('Por favor, inicie sesión para comentar.');
        return;
    }

    if (comment) {
        const commentSection = document.getElementById('comments');
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `<p class="comment-author">${userInfo}</p><p>${comment}</p>`;
        commentSection.appendChild(commentDiv);

        // Guardar comentarios en Local Storage
        localStorage.setItem('comments', commentSection.innerHTML);

        // Limpiar el campo de entrada
        document.getElementById('comment').value = '';
    }
}

function loadComments() {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
        document.getElementById('comments').innerHTML = savedComments;
    }
}

// Cargar comentarios y feriados al iniciar la página
window.onload = () => {
    renderHolidays();
    loadComments();
    updateCountdown();
    setInterval(updateCountdown, 1000); // Actualiza cada segundo
};
