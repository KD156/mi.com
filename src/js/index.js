import $ from './lib/jquery.js';
import { mySwiper, ms, newthing } from '../js/banner.js';

(function() {
    $.ajax({
        type: "get",
        url: "../../interface/getproduct.php",
        dataType: "json",
        success: function(res) {
            console.log(res);
            let temp = '';
            res.forEach((elm, i) => {
                let picture = JSON.parse(elm.picture);

                temp += `
                <div class="pro-item">
            <a href="./product.html?id=${elm.id}">
                <div class="img-container">
                    <img src="..${picture[0].src}" alt="">
                </div>
                <p class="title">${elm.introduction}</p>
                <div class="cate">
                    <div class="m-goods">
                        <span class="tejia">特价</span>
                    </div>
                    <div class="yunmi">${elm.title}</div>
                    <p class="qian"><span class="pro-unit">¥</span><span class="m-num">${elm.price}</span><span class="fg">起</span></p>
                </div>
            </a>
        </div>
            `;
            });
            $('.product-list').append(temp);
        }
    });
})();