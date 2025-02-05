import Splide from '@splidejs/splide';

export const slidersModule = () => {
    const sliders = document.querySelectorAll('.splide')

    sliders.forEach(slider => {
        new Splide(slider, {
            autoWidth: true,
            focus: 0,
            omitEnd: true,
            destroy: true,
            prev  : 'account-types__arrow__left',
            next  : 'splide__arrow--next your-class-next',
            breakpoints: {
                991: {
                    destroy: false,
                    padding: { left: 40 },
                    gap: '20px'
                },

                767: {
                    padding: { left: 15 }
                },
            }
        }).mount();
    })
}   