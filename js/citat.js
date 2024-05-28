// Определение массива цитат
console.log('its okey!');
const quotes = [
  "Жизнь — это то, что с тобой происходит, пока ты строишь планы.",
  "Успех — это способность идти от одной неудачи к другой, не теряя энтузиазма.",
  "Чтобы добиться успеха, ваше желание обязано быть больше вашего страха неудачи.",
  "Будьте смелыми и готовы к чему угодно. Скорее всего, это и случится.",
  "Не бойтесь переходов. Они приносят с собой новые возможности.",
];

// Функция для генерации случайной цитаты
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.querySelector('.quote-text').textContent = quote;
}

// Добавление обработчика события к кнопке
document.querySelector('.generate-btn').addEventListener('click', generateQuote);

// Генерация цитаты при загрузке страницы
generateQuote();

// Обработчик события прокрутки страницы
window.addEventListener('scroll', function() {
  // Получаем значение вертикальной прокрутки страницы
  let scrollPosition = window.pageYOffset;

  // Применяем параллакс к фону шоу-кейса, смещая его позицию вертикально
  document.querySelector('.showcase').style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
});

