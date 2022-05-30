let swiperReviews = new Swiper(".slider__main", {
    spaceBetween: 180,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".slider__main-next",
        prevEl: ".slider__main-prev",
    },
    breakpoints: {
        1024: {
        slidesPerView: 3,
        }
    }
});