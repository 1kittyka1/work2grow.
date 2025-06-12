// const promoImage = document.querySelector('.promo-image');
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');
// const slides = Array.from(promoImage.querySelectorAll('img'));
// const slideCount = slides.length;
// let slideIndex = 0;

// prevButton.addEventListener('click', () => {
//   slideIndex = (slideIndex - 1 + slideCount) % slideCount;
//   slide();
// });

// nextButton.addEventListener('click', () => {
//   slideIndex = (slideIndex + 1) % slideCount;
//   slide();
// });

// const slide = () => {
//   const imageWidth = slider.clientWidth;
//   const slideOffset = -slideIndex * imageWidth;
//   promoImage.style.transform = `translateX(${slideOffset}px)`;
// }

// window.addEventListener('load', () => {
//   slide();
// });
// let btn = document.querySelector('.btn')
// function sortByPrice() {
//   // Получаем контейнер с карточками
//   const list = document.getElementById('product-list');

//   // Преобразуем HTMLCollection в массив
//   const products = Array.from(list.querySelectorAll('.product'));

//   // Сортируем карточки по цене из <strong>
//   products.sort((a, b) => {
//     const priceA = +a.querySelector('strong').innerText.replace(/\D/g, '');
//     const priceB = +b.querySelector('strong').innerText.replace(/\D/g, '');
//     return priceA - priceB;
//   });

//   // Очищаем контейнер
//   list.innerHTML = '';

//   // Добавляем карточки заново в отсортированном порядке
//   products.forEach(product => list.appendChild(product));
// }
document.addEventListener("DOMContentLoaded", function () {
  const select = document.querySelector(".sorting_select");
  const container = document.querySelector(".products-container"); // контейнер всех карточек
  const items = Array.from(container.querySelectorAll(".product"));

  select.addEventListener("change", function () {
    const value = this.value;
    let sortedItems = [];

    switch (value) {
      case "price_asc":
        sortedItems = items.sort((a, b) => +a.dataset.price - +b.dataset.price);
        break;
      case "price_desc":
        sortedItems = items.sort((a, b) => +b.dataset.price - +a.dataset.price);
        break;
      case "name_asc":
        sortedItems = items.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
        break;
      case "name_desc":
        sortedItems = items.sort((a, b) => b.dataset.name.localeCompare(a.dataset.name));
        break;
      default:
        sortedItems = items; // по умолчанию без сортировки
    }

    // перерисовка карточек
    container.innerHTML = "";
    sortedItems.forEach(item => container.appendChild(item));
  });
});