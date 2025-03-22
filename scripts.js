function updateClock(clockElement) {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function startClock() {
    const footerClock = document.getElementById('footer-clock');
    setInterval(() => updateClock(footerClock), 1000);
}

document.addEventListener('DOMContentLoaded', startClock);