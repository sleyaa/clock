// script.js

function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Actualiza el reloj cada segundo
setInterval(updateClock, 1000);

// Llama a la función una vez para inicializar el reloj inmediatamente
updateClock();
