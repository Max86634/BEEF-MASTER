// Подключаем ScrollTrigger из библиотеки GSAP
gsap.registerPlugin(ScrollTrigger);

// Создаем анимацию для элементов с классом ".recipe-box"
gsap.utils.toArray('.recipe-box').forEach(box => {
  gsap.from(box, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: box,
      start: 'top 80%', // Начать анимацию, когда элемент появится на 80% от верха окна
      end: 'bottom 20%', // Завершить анимацию, когда элемент окажется на 20% от низа окна
      toggleActions: 'play none none none' // Воспроизвести анимацию при прокрутке вниз, но не останавливать ее при обратной прокрутке
    }
  });
});
