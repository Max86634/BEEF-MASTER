// Создаем массив цитат
console.log("dsds");
var quoteS = [
  "Шашлык – это не только еда, это философия жизни! - Неизвестный гурман",
  "Можно лишь сказать, что во вселенной существует два абсолютных понятия: бесконечность Вселенной и количество шашлыка, которое я могу съесть за один ужин. - Оскар Уайльд",
  "Шашлык — это как жизнь: нужно хорошенько прожарить, но не пересушить. - Джордж Бернард Шоу",
  "Когда мир кажется слишком сложным, достаточно лишь немного шашлыка, чтобы все стало ясно. - Альберт Эйнштейн"
];

// Функция для изменения цитаты в заголовке
function changeQuote() {
  // Получаем случайный индекс из массива цитат
  var randomIndex = Math.floor(Math.random() * quoteS.length);
  // Получаем случайную цитату
  var randomQuote = quoteS[randomIndex];
  // Устанавливаем цитату в заголовок страницы
  document.querySelector('.showcase__header').textContent = randomQuote;
}

// Вызываем функцию изменения цитаты через каждые 5 секунд
setInterval(changeQuote, 10000);

// document.addEventListener("DOMContentLoaded", function() {
//   setInterval(changeQuote, 100);
// });
