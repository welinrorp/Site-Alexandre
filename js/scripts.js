const barrs = document.getElementById("barras");
const nav = document.getElementById("nav");
const navItens = document.querySelectorAll("a")
function touchMenu (){
  nav.classList.toggle("active");

}
  barrs.addEventListener("click", touchMenu);
  navItens.forEach(item => {
    item.addEventListener("click",touchMenu)
  });

  // Function Textarea
  document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("contact-area");

    textarea.addEventListener("focus", function () {
        this.placeholder = ""; // Hide placeholder on focus
    });

    textarea.addEventListener("blur", function () {
        if (this.value === "") {
            this.placeholder = "Digite mensagem click enviar inicie whatsapp"; // Show placeholder if no text is entered
        }
    });
});
 
    

// document.getElementsByClassName("top-arrow")[0].onclick = function() {
//     for(let socialMedias of document.getElementsByClassName("social-icon")) {
//         console.log(socialMedias);

//         socialMedias.style.display = "block";
//     }
// }



localStorage.setItem("currentPosition", 0);

function showImage(index) {
    const images = document.querySelectorAll('.carousel-image');

    if (index >= images.length) {
        // currentIndex = 0;
        localStorage.setItem("currentPosition", 0);
    } else if (index < 0) {
        // currentIndex = images.length - 1;
        localStorage.setItem("currentPosition", images.length - 1);
    } else {
        // currentIndex = index;
        localStorage.setItem("currentPosition", index);
    }

    const newTranslateX = -Number(localStorage.getItem("currentPosition")) * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${newTranslateX}%)`;
}

function nextImage() {
    showImage(Number(localStorage.getItem("currentPosition")) + 1);
}

function prevImage() {
    showImage(Number(localStorage.getItem("currentPosition")) - 1);
}

// Initially show the first image
showImage(currentIndex);
