// let hrs=document.getElementById("hrs")
// let min=document.getElementById("min")
// let sec=document.getElementById("sec")
// let currentTime = new Date();
// console.log(currentTime.getHours());
// hrs.innerHTML = currentTime.getHours();
// hrs.innerHTML = currentTime.getMinutes();
// hrs.innerHTML = currentTime.getSeconds();
function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    document.getElementById("hrs").textContent = hours;
    document.getElementById("min").textContent = minutes;
    document.getElementById("sec").textContent = seconds;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the time immediately
updateClock();
