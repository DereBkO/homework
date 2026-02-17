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

    // =============== Size

    document.querySelectorAll('.size-options input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const sizeValue = e.target.value;

            document.getElementById('selected-value').textContent = sizeValue;

            document.getElementById('size-toggle').checked = false;
        });
    });

    // =============== Slider

    const swiper = new Swiper('.slider-sneakers', {
        slidesPerView: 3,
        spaceBetween: 40,
        loop: true,

        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
    });

    // =============== Loop

    const loop = new Swiper('.loop', {
        loop: true,
        speed: 5000,
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 239,
        loopedSlides: 4,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });

    const loop2 = new Swiper('.loop2', {
        loop: true,
        speed: 5000,
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 239,
        loopedSlides: 4,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
        },
    });

})()