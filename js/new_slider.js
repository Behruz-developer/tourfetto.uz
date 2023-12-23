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