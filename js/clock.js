const clock = document.querySelector("#clock");

function clockHandle() {
    const date = new Date();
    hour = String(date.getHours()).padStart(2, "0");
    minute = String(date.getMinutes()).padStart(2, "0");
    seconds = String(date.getSeconds()).padStart(2, "0");

    // clock.innerText = `${hour}:${minute}:${seconds}`;
    clock.innerText = hour + ":" + minute + ":" + seconds;
}

clockHandle();
setInterval(clockHandle, 1000);