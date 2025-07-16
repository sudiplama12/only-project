setInterval(() => {
  const currenttime = new Date();

  document.getElementById("hrs").innerHTML = String(currenttime.getHours()).padStart(2, '0');
  document.getElementById("min").innerHTML = String(currenttime.getMinutes()).padStart(2, '0');
  document.getElementById("sec").innerHTML = String(currenttime.getSeconds()).padStart(2, '0');
}, 1000);
