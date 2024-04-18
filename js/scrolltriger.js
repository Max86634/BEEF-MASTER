// SCROLL

// Обработчик события прокрутки страницы
window.addEventListener('scroll', function() {
  // Получаем значение вертикальной прокрутки страницы
  let scrollPosition = window.pageYOffset;

  // Применяем параллакс к фону шоу-кейса, смещая его позицию вертикально
  document.querySelector('.showcase').style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
});
