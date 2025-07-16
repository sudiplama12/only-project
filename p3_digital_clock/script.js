setInterval(() => {
    const currenttime = new Date();

    hrs.innerHTML = String(currenttime.getHours()).padStart(2, '0');
    min.innerHTML = String(currenttime.getMinutes()).padStart(2, '0');
    sec.innerHTML = String(currenttime.getSeconds()).padStart(2, '0');
}, 1000);
