const message = `happy birthday, aku ngga lupa kok semua tentang mu masi tertata rapi disini aku juga ngga lupa kok hari ulang tahun kamu walaupun kita udah seasing ini.\n\nI just want you to know, semoga hal baik selalu beriringan denganmu, semoga semesta senantiasa berpihak padamu, semoga jalanmu untuk mencapai masa depan yang cerah dipermudahkan, teruslah tumbuh, teruslah melangkah & berbahagialah.\n\nAku akan selalu bangga atas setiap proses yang sudah kamu lalui.\n\nSelamat berkelana… I will always support u from afar,\n\nAnyway, I hope you know, I will always choose you.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}