const container = document.querySelector('.new_box');
let scrollAmount = 0;

document.querySelector('.next-btn').addEventListener('click', () => {
  container.scrollLeft += container.clientWidth * 0.525; // Yarim konteyner kengligiga siljitish
});

document.querySelector('.prev-btn').addEventListener('click', () => {
  container.scrollLeft -= container.clientWidth * 0.525; // Yarim konteyner kengligiga siljitish
});


function scrollContainer(scrollAmount) {
    container.scrollLeft += scrollAmount;
  }
  
  document.querySelector('.next-btn').addEventListener('click', () => {
    // Agar ekranning kengligi 960px dan kam bo'lsa, 100% ga siljitish
    const scrollAmount = window.matchMedia("(max-width: 960px)").matches
      ? container.clientWidth
      : container.clientWidth * 0.525;
    scrollContainer(scrollAmount);
  });
  
  document.querySelector('.prev-btn').addEventListener('click', () => {
    // Agar ekranning kengligi 960px dan kam bo'lsa, 100% ga siljitish
    const scrollAmount = window.matchMedia("(max-width: 960px)").matches
      ? -container.clientWidth
      : -container.clientWidth * 0.525;
    scrollContainer(scrollAmount);
  });


  function scrollContainer(scrollAmount) {
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      // Agar konteyner oxiriga yetgan bo'lsa, boshiga qaytarish
      container.scrollLeft = 0;
    } else {
      // Aks holda, keyingi karta o'zgarishi
      container.scrollLeft += scrollAmount;
    }
  }
  
  // Har 3 soniyada kartalarni aylantirish
  setInterval(() => {
    const scrollAmount = window.matchMedia("(max-width: 960px)").matches
      ? container.clientWidth
      : container.clientWidth * 0.525;
    scrollContainer(scrollAmount);
  }, 4000);