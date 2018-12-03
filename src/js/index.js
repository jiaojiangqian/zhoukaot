new Swiper('.swiper-container', {
    autoplay: true,
    loop: true,
    pagination: {
        el: "#pageTion",
        clickable: true
    },
    slidesPerView: 1,
    slidesPerGroup: 1
})

new window.BScroll('.list', {
    scrollY: true,
    click: true,
    probeType: 2
})