import './lib/jquery.js';
import { cookie } from './lib/cookie.js';
import $ from './lib/jquery.js';

(function() {
    let shop = cookie.get('shop');

    if (shop) {
        shop = JSON.parse(shop);

        let idList = shop.map(elm => elm.id).join();
        // console.log(idList);

        $.ajax({
            type: "get",
            url: "../../interface/getitems.php",
            data: {
                idList: idList
            },
            dataType: "json",
            success: function(res) {
                let template = '';
                res.forEach((elm, i) => {
                    let picture = JSON.parse(elm.picture);
                    // console.log(res)
                    let arr = shop.filter(val => val.id == elm.id);
                    // console.log(arr);
                    template += `<div class="cart-item">
                    <div class="select">
                        <span class="cheack"></span>
                    </div>
                    <div class="images">
                        <img src="..${picture[0].src}" alt=""><span></span>
                    </div>
                    <div class="name">
                        <p>${elm.title}</p>
                    </div>
                    <div class="price">
                        <span class="jiage${elm.id}">￥${elm.price}</span>
                    </div>
                    <div class="num">
                        <div class="edit">
                            <a href="javascript:;" class="left"></a>
                            <input type="text" value="${arr[0].num}" class="textt" id="${elm.id}">
                            <a href="javascript:;" class="right"></a>
                        </div>
                    </div>
                    <div class="subtotal">
                        <span class="id${elm.id}">￥${elm.price*arr[0].num}</span>
                    </div>
                    <div class="del">
                        <a href="javascript:;" id="${arr[0].id}"></a>
                    </div>
                </div>
                    `;
                });

                $('.shangpin').append(template);


                function js() {
                    let price = 0;
                    let num = 0;
                    let shop = cookie.get('shop');
                    shop = JSON.parse(shop)
                    $('.bg').each(function(i, elm) {
                        price += parseInt($(elm).parents('.cart-item').children('.subtotal').find('span').text().slice(1));
                        num += parseInt($(elm).parents('.cart-item').children('.num').children('.edit').children('.textt').val())
                    });
                    $('.total').text(`￥${price}`);
                    $('.arealy-select').text(`已选${num}件`);


                    if ($('.bg').length == shop.length) {
                        $('.lf>.cheack').addClass('bgg')
                    } else {
                        $('.lf>cheack').removeClass('bgg');
                    }
                }

                $('.lf>.cheack').on('click', function() {
                    let a = $('.lf>.cheack').attr('class').slice(7);
                    if (a == 'bgg') {
                        $('.lf>.cheack').removeClass('bgg');
                        $('.cart-item .cheack').removeClass('bg');
                        $('.shangjia>.cheack').removeClass('bgg')
                        $('.title>.cheack').removeClass('bgg')
                    } else {
                        $('.lf>.cheack').addClass('bgg');
                        $('.cart-item .cheack').addClass('bg');
                        $('.shangjia>.cheack').addClass('bgg')
                        $('.title>.cheack').addClass('bgg')
                    }
                    $('.btn').toggleClass('bc').toggleClass('bb');
                    js()
                });

                $('.shangpin').on('click', '.cheack', function() {
                    $(this).toggleClass("bg");
                    $('.btn').toggleClass("bb").toggleClass("bc");
                    js()
                });


                $('.shangpin').on('click', '.right', function() {
                    let shop = cookie.get('shop')
                    shop = JSON.parse(shop)
                    let id = $(this).prev().attr('id');
                    let a = parseInt($(this).prev().val());
                    console.log(a)
                    let b = $('.jiage' + id + '').text().slice(1);
                    if (a < 20) {
                        $(this).prev(".textt")[0].value = a + 1;
                        if (shop.some(elm => elm.id == id)) {
                            shop.forEach(elm => {
                                elm.id === id ? elm.num = a + 1 : null;
                            })
                        }
                        cookie.set('shop', JSON.stringify(shop), 1);
                        $('.id' + id + '').text(`￥${(a+1)*b}`);
                    }
                    js()
                });

                // 删除
                $('.shangpin').on('click', '.del>a', function(ev) {
                    let id = $(ev.target).attr('id')
                    let shop = cookie.get('shop')
                    shop = JSON.parse(shop)
                    shop = shop.filter(function(val) {
                        return val.id != id
                    })
                    cookie.set('shop', JSON.stringify(shop), 1)
                    ev.target.parentNode.parentNode.remove();
                })

                $('.shangpin').on('click', '.left', function() {
                    let shop = cookie.get('shop')
                    shop = JSON.parse(shop)
                    let id = $(this).next().attr('id');
                    let a = parseInt($(this).next().val());
                    let b = $('.jiage' + id + '').text().slice(1);
                    if (a > 1) {
                        $(this).next(".textt")[0].value = a - 1;
                        if (shop.some(elm => elm.id == id)) {
                            shop.forEach(elm => {
                                elm.id === id ? elm.num = a - 1 : null;
                            })
                        }
                        cookie.set('shop', JSON.stringify(shop), 1);
                        $('.id' + id + '').text(`￥${(a-1)*b}`);

                    }
                    js()

                });

            }
        });
    }
})();