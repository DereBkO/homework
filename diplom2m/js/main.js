(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        // if (document.documentElement.clientWidth > 999999) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // =============== Swiper

    const swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        spaceBetween: 40,
        loop: true,

        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
    });

})()