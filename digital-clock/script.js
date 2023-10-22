let isDayMode = true;

function toggleMode() {
    isDayMode = !isDayMode;
    const moonIcon = document.getElementById('moonIcon');
    const sunIcon = document.getElementById('sunIcon');

    if (isDayMode) {
        moonIcon.style.display = 'inline-block';
        sunIcon.style.display = 'none';
        document.body.className = 'light-mode';
    } else {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline-block';
        document.body.className = 'dark-mode';
    }
}

function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = timeString;
}

function updateDate() {
    const dateElement = document.getElementById('date');
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    dateElement.textContent = dateString;
}

function updateDay() {
    const dayElement = document.getElementById('day');
    const now = new Date();
    const options = { weekday: 'long' };
    const dayString = now.toLocaleDateString('en-US', options);
    dayElement.textContent = dayString;
}

setInterval(updateClock, 1000);
setInterval(updateDate, 1000);
setInterval(updateDay, 1000);