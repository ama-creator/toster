// Таймер
let time = 17476;
const countDownEl = document.querySelector(".timer-count");

setInterval(updateCountDown, 1000);

function updateCountDown() {
  let hours = Math.floor(time / 60 / 60);
  let minutes = Math.floor(time / 60 - hours * 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  hours = hours < 10 ? "0" + hours : hours;

  countDownEl.innerHTML = `${hours}:${minutes}:${seconds}`;
  if (!time) {
    countDownEl.innerHTML = "0:00";
    return clearInterval(updateCountDown);
  }
  time--;
}
updateCountDown();

// Устанавливает рейтинг товара
const setRating = () => {
  const ratingStars = document.querySelectorAll(".rate-star");
  const currentRates = Array.from(ratingStars).reverse();
  const rateItemStatus = "rate-star--active";

  currentRates.forEach((item, index) => {
    item.addEventListener("click", () => {
      if (item.classList.contains(rateItemStatus)) {
        for (let i = 0; i < currentRates.length; i++) {
          currentRates[i].classList.remove(rateItemStatus);
        }
      }

      for (let i = 0; i <= index; i++) {
        currentRates[i].classList.add(rateItemStatus);
      }
    });
  });
};
setRating();

// Галерея
const switchGalleryPicture = () => {
  const galleryBtns = document.querySelectorAll(".product-gallery__items-btn");
  const currentPicture = document.querySelector(
    ".product-gallery__current-image"
  );
  let currentPictureSrc;

  galleryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentPicture.classList.remove("img-smoth");
      if (btn.classList.contains("product--active")) return;

      document
        .querySelector(".product--active")
        .classList.remove("product--active");
      btn.classList.add("product--active");

      setTimeout(() => {
        currentPicture.src = btn.querySelector(".product-image").src;
        currentPicture.classList.add("img-smoth");
      }, 20);
    });
  });
};
switchGalleryPicture();

// Custom Select
const handleSelect = () => {
  const selectBtns = document.querySelectorAll(".filter-select__item");

  selectBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let selectedItem = btn.querySelector(".select-current__title");
      btn.classList.toggle("select--active");

      if (event.target.classList.contains("select-list__item")) {
        btn
          ?.querySelector(".select-list__item--active")
          ?.classList.remove("select-list__item--active");

        selectedItem.innerText = event.target.innerHTML;
        event.target.classList.add("select-list__item--active");
      }
    });
  });
};
handleSelect();
