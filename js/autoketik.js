// Inisialisasi variabel
const words = document.querySelector(".left-main h1 span");

let text = ["Beautiful", "Perfect", "Aesthetic", "Elegant"];
let j = 0; // nilai index
let i = 0; // nilai huruf dalam index

function autoKetik() {
  // memotong kata menjadi huruf
  words.innerHTML = text[j].slice(0, i);
  i++;

  //  membatasi huruf yang muncul
  if (i > text[j].length) {
    i = 0;
    j++;

    // membatasi nilai index
    if (j === text.length) {
      j = 0;
    }
  }
}

// memanggil fungsi dalam interval yang ditetapkan
setInterval(() => {
  autoKetik();
}, 250);
