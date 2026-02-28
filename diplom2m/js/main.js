(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')
        const overlay = e.target.closest('.overlay')

        if (!burgerIcon && !burgerNavLink && !overlay) return
        // if (document.documentElement.clientWidth > 900) return

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
        slidesPerView: 1,
        spaceBetween: 40,
        loop: true,

        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },

        breakpoints: {
            601: {
                slidesPerView: 1.5,
            },
            1001: {
                slidesPerView: 2,
            },
            1301: {
                slidesPerView: 3,
            }
        }
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

    // =============== Logos

    const logos = new Swiper('.logos__main', {
        loop: true,
        speed: 5000,
        slidesPerView: 'auto',
        spaceBetween: 80,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });

})()