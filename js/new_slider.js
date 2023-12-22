const container = document.querySelector('.new_box');
let scrollAmount = 0;

document.querySelector('.next-btn').addEventListener('click', () => {
  container.scrollLeft += container.clientWidth / 2; // Yarim konteyner kengligiga siljitish
});

document.querySelector('.prev-btn').addEventListener('click', () => {
  container.scrollLeft -= container.clientWidth / 2; // Yarim konteyner kengligiga siljitish
});