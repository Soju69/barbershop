document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".ShowM").forEach(btnShowMore => {
        const parentBlock = btnShowMore.closest(".man, .wom");


        const hiddenBlocks = parentBlock.querySelectorAll(".service_card.hidden");


        const btnHide = document.createElement("button");
        btnHide.textContent = "Скрыть";
        btnHide.className = "hideServices"; 
        btnHide.style.display = "none"; 
        btnShowMore.parentNode.appendChild(btnHide); // Добавляем кнопку в DOM

        let index = 0; 

        btnShowMore.addEventListener("click", function () {
            if (index < hiddenBlocks.length) {
                hiddenBlocks[index].classList.remove("hidden"); 
                index++; 
            }

           
            if (index >= hiddenBlocks.length) {
                btnShowMore.style.display = "none"; 
                btnHide.style.display = "block"; 
            }
        });


        btnHide.addEventListener("click", function () {
            hiddenBlocks.forEach(block => block.classList.add("hidden")); 
            btnShowMore.style.display = "block"; 
            btnHide.style.display = "none";
            index = 0; 
        });
    });
});

document.querySelectorAll('.scroll-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const wrapper = btn.closest('.services-container').querySelector('.scroll-wrapper');
        const cardWidth = document.querySelector('.service-card').offsetWidth + 30;
        
        wrapper.scrollBy({
            left: btn.classList.contains('prev') ? -cardWidth * 3 : cardWidth * 3,
            behavior: 'smooth'
        });
    });
});

const modal = document.getElementById("servicesModal");
const btn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close");
const step1 = document.getElementById("step-1");

function openModal() {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.display = "none";
  step1.style.display = "block";
  document.body.style.overflow = ""; // ❗ верни как было
}

btn.onclick = openModal;
closeBtn.onclick = closeModal;

window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
}

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    setTimeout(function() {

        preloader.classList.add('fade-out');
        
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 500); 
    }, 2000);
});
