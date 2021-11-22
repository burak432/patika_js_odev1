let isim = prompt("isminizi girin");
let user = document.querySelector("#user");
user.innerHTML = isim;
let saat = document.querySelector("#saat");

function saatfunc() {
  const simdi = new Date();
  let saa = simdi.getHours();
  let dkk = simdi.getMinutes();
  let sny = simdi.getSeconds()
  let gun = simdi.getDay();

  switch (gun) {
    case 0:
      gun = "pazar";
      break;
    case 1:
      gun = "pazartesi";
      break;
    case 2:
      gun = "salı";
      break;
    case 3:
      gun = "çarşamba";
      break;
    case 4:
      gun = "perşembe";
      break;
    case 5:
      gun = "cuma";
      break;
    case 6:
      gun = "cumartesi";
      break;
 }

  saa = kontrol(saa);
  dkk = kontrol(dkk);
  sny = kontrol(sny);

  saat.innerHTML = `${saa}:${dkk}:${sny} ${gun}`;
  setTimeout(saatfunc, 1000);
}

function kontrol(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}


saatfunc();
