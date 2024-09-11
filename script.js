document.addEventListener("DOMContentLoaded", function () {
    const galleryInner = document.querySelector(".gallery-inner");
    const items = document.querySelectorAll(".gallery-item");
    const itemWidth = items[0].offsetWidth;
    const totalItems = items.length;

    for (let i = 0; i < totalItems; i++) {
    const clone = items[i].cloneNode(true);
    galleryInner.appendChild(clone);
    }

    galleryInner.style.width = `${itemWidth * (totalItems * 2)}px`;

    let index = 0;
    const moveCarousel = (direction) => {
    index = (index + direction + totalItems) % totalItems;
    galleryInner.style.transform = `translateX(${-itemWidth * index}px)`;
    };

    document
    .querySelector(".btn-next")
    .addEventListener("click", () => moveCarousel(1));
    document
    .querySelector(".btn-prev")
    .addEventListener("click", () => moveCarousel(-1));
    
    const headerHeight = document.querySelector('header').offsetHeight;
    document.querySelector('main').style.paddingTop = `${headerHeight}px`;
});