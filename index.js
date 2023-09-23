const imageContainerEl = document.querySelector(".image-container");
let x = 0;
let timer;

const nextEl = document.getElementById("next");

nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
})
const prevEl = document.getElementById("prev");

prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
})

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

  timer = setTimeout(() => {
    x = x - 45;
    //alert(x);
    updateGallery();
  }, 3000
  
  )
} 

updateGallery(); 