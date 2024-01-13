const qrBox = document.getElementById("qrBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (qrText.value.length > 0) {
    generateQR();
    qrBox.classList.add("show-img");
    refreshInput();
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
});
qrText.addEventListener("keydown", (event) => {
  if (qrText.value.length > 0 && event.key === "Enter") {
    generateQR();
    qrBox.classList.add("show-img");
    refreshInput();
  }
});

function generateQR() {
  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    qrText.value;
}

function refreshInput() {
  const newValue = "";
  qrText.value = newValue;
}
