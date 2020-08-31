import Swiper from '../js/lib/swiper-bundle.js';
var ms = new Swiper('.bx', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.sp-a',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.sw-n',
        prevEl: '.sw-p',
    },

    // 如果需要滚动条
    // scrollbar: {
    //     el: '.sw-r',
    // // },
    autoplay: true,
    // slidesPerView: 4,
})

var mySwiper = new Swiper('.sp-box', {
    // direction: 'vertical', // 垂直切换选项
    loop: false, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.sp-p',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.sp-n',
        prevEl: '.sp-b',
    },

    // 如果需要滚动条
    // scrollbar: {
    //     el: '.sp-s',
    // },
    autoplay: false,
    slidesPerView: 4,
})

var newthing = new Swiper('.one', {
    // direction: 'vertical', // 垂直切换选项
    loop: false, // 循环模式选项

    // 如果需要分页器
    // pagination: {
    //     el: '.two',
    // },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.four',
        prevEl: '.three',
    },

    // 如果需要滚动条
    // scrollbar: {
    //     el: '.sp-s',
    // },
    autoplay: false,
    slidesPerView: 4,
})

export { mySwiper };
export { ms };
export { newthing };