// inisialisasi input dan icon password
const mata = document.querySelector(".eye i");
const pw = document.querySelector("#pw");

// inisialisasi input dan icon remember password
const mataRemember = document.querySelectorAll(".eye i")[1];
const pwRemember = document.querySelectorAll("#pw")[1];

// penambahan event click pada icon mata password
mata.addEventListener("click", () => {
  if (pw.type == "password") {
    pw.type = "text";
    mata.classList = "fa-solid fa-eye";
  } else {
    pw.type = "password";
    mata.classList = "fa-solid fa-eye-slash";
  }
});

// penambahan event click pada icon mata remember password
mataRemember.addEventListener("click", () => {
  if (pwRemember.type == "password") {
    pwRemember.type = "text";
    mataRemember.classList = "fa-solid fa-eye";
  } else {
    pwRemember.type = "password";
    mataRemember.classList = "fa-solid fa-eye-slash";
  }
});
