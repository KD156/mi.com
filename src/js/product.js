import $ from './lib/jquery.js';
import { cookie } from './lib/cookie.js';
(function() {
    let id = location.search.split('=')[1];
    // console.log(id)
    $.ajax({
        type: "get",
        url: "../../interface/getitem.php",
        data: {
            id: id
        },
        dataType: "json",
        success: function(res) {
            // console.log(res)
            let picture = JSON.parse(res.picture);

            let template = `<header id="nav">
            <div class="center">
                <div class="fr">
                    <div class="fl">
                        <a href="" class="login">登录</a>
                        <a href="" class="register">注册</a>
                    </div>
                    <span class="ml-line"></span>
                    <div class="m-help">
                        <a href="" class="ml-help">帮助中心</a>
                    </div>
                    <span class="ml-line"></span>
                    <div class="m-download">
                        <a href="" class="download"><span class="phone"></span>下载APP</a>
                    </div>
                    <span class="ml-line"></span>
                    <div class="m-live">
                        <a href="" class="live">直播</a>
                    </div>
                    <span class="ml-line"></span>
                    <div class="m-con">
                        <a href="" class="noopener">资质证照 / 协议规则<span class="down"></span>
                            <ul class="noop">
                                <li>资质证照</li>
                                <li>协议规则</li>
                            </ul>
                        </a>
    
                    </div>
    
                </div>
            </div>
        </header>
    
        <!-- 搜索 -->
    
        <div id="container">
            <div class="mi-font">
                <img src="../images/logo-font.png" alt="">
            </div>
            <ul class="list">
                <li><a href="">现实抢购</a></li>
                <li><a href="">企业采购</a></li>
            </ul>
            <a href="./cart.html" class="shopping"></a>
            <div class="search">
                <div class="box">
                    <a href="" class="glaess"></a>
                    <div class="text">
                        <input type="text" placeholder="搜一搜" class="sh">
                    </div>
                </div>
            </div>
        </div>
    
        <!-- 主体 -->
        <div id="sp-box">
            <div class="sp-xq">
                <div class="sp-xq-box">
                    <div class="sp-main">
                        <img src="..${picture[1].src}" alt="">
                    </div>
                    <div class="sp-main-yb">
                        <img src="..${picture[2].src}" alt="">
                        <img src="..${picture[3].src}" alt="">
                        <img src="..${picture[4].src}" alt="">
                        <img src="..${picture[5].src}" alt="">
                    </div>
                </div>
                <div class="sp-wz">
                    <div class="sp-wz-tilte">
                        <div class="good-name">
                            ${res.title}
                        </div>
                        <div class="good-tag">
                            有品秒杀
                        </div>
                    </div>
                    <div class="summary">
                        <span class="staticWords">洗护开学焕新季</span>
                        <span class="staticWords hyperlinkWords">好物满199减50 满299减100</span> 
                        ${res.introduction}
                    </div>
                    <div class="promotion-wrap">
                        <span class="font-zc">促销：</span>
                        <span class="gift-type">有品秒杀</span>
                        <span class="d-gift-text">商品限购20件，超出限购数量不可购买</span>
                    </div>
                    <div class="card">
                        <div class="price-line">
                            <h5 class="sku-title">售价</h5>
                            <div class="price">
                                <span class="money-symbol">¥</span><span class="value">${res.price}</span><span class="market-price">¥299</span>
                            </div>
                        </div>
                        <div class="service-line">
                            <h5 class="sku-title">服务
                                <p class="icon">!</p>
                            </h5>
                            <div class="service">
                                <div class="service-item">
                                    <a href="#" class="service-a"></a>
                                    <span>满99包邮</span>
                                </div>
                                <div class="service-item">
                                    <a href="#" class="service-a"></a>
                                    <span>第三方店</span>
                                </div>
                                <br>
                                <div class="service-item">
                                    <a href="#" class="service-a"></a>
                                    <span>支持7天无理由退货 (拆封后不支持)</span>
                                </div>
                                <div class="service-item">
                                    <a href="#" class="service-a"></a>
                                    <span>有品配送</span>
                                </div>
                                <br>
                                <div class="service-item">
                                    <a href="#" class="service-a"></a>
                                    <span>由小米有品提供配送服务，杭州梦栖谷仓商贸有限公司提供售后<span class="service-item-qualification">(查看商家资质)</span></span>
                                </div>
                            </div>
    
                        </div>
                    </div>
                    <div class="address-line">
                        配送区域 北京 北京市 海淀区 有货 修改
                    </div>
                    <div class="lin-box">
                        <div class="size-line">
                            <h5 class="sku-title">颜色</h5>
                            <div class="size-container">
                                <div class="tag-item-onSelected">
                                    黑色
                                </div>
                            </div>
                        </div>
                        <div class="size-line">
                            <h5 class="sku-title">型号</h5>
                            <div class="size-container">
                                <div class="tag-item-onSelected">
                                    AS6
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="count-line">
                        <h5 class="sku-title">数量</h5>
                        <div class="minus-btn">
                            <a href="javascript:;" class="m-icons"></a>
                        </div>
                        <input type="text" class="count-input" value="1">
                        <div class="j-btn">
                            <a href="javascript:;" class="m-icons"></a>
                        </div>
                    </div>
                    <div class="btn-line">
                        <a href="javascript:;" class="ys" id="additem">加入购物车</a>
                        <a href="javascript:;" class="gm ys">立即购买</a>
                        <div class="favor-btn ">
                            <a href="javascript:;"></a>
                            <p>收藏</p>
                        </div>
                        <div class="favor-btn ml">
                            <a href="javascript:;" class="a1"></a>
                            <p>客服</p>
                        </div>
                    </div>
                </div>
            </div>
    
    
        </div>
    
        <!-- 商品介绍 -->
    
        ${res.details}
    
        <!-- 底部 -->
    
        <div class="foot-box">
            <div class="cont">
                <img src="../images/yp.png" alt="">
                <img src="../images/f-logo.png" alt="">
                <div class="text">
                    <p>
                        <span>©xiaomiyoupin.com</span>
                        <span>苏B2-20180351 苏ICP备18025642号-1 </span>
                        <a href="" class="jing"><span><img src="../images/ghs.png" alt=""></span>京公网安备11010802020134号</a>
                    </p>
                    <p>
                        <span>企业名称：有品信息科技有限公司 </span>
                        <a href="">关于我们</a>
                        <a href="">入住有品</a>
                        <a href="">知识产权侵权投诉</a>
                    </p>
                    <p>
                        <span>
                            小米有品平台运行主体更新公告
                        </span>
                    </p>
                    <p>
                        南京市建邺区白龙江东街8号3栋9层
                    </p>
                </div>
            </div>
        </div>`;

            $('body').append(template).find('#additem').on('click', function() {
                addItem(res.id, res.price, $('.count-input').val());
            });


            $('.minus-btn').on('click', function() {
                if ($('.count-input').val() > 1) {
                    $('.count-input')[0].value = $('.count-input').val() - 1;
                }
            });
            $('.j-btn').on('click', function() {
                if ($('.count-input').val() < 20) {
                    $('.count-input')[0].value = parseInt($('.count-input').val()) + 1;
                }
            });

        }
    });


    function addItem(id, price, num) {
        let shop = cookie.get('shop');
        let product = {
            id: id,
            price: price,
            num: num
        };

        if (shop) {
            shop = JSON.parse(shop);
            if (shop.some(elm => elm.id == id)) {
                shop.forEach(elm => {
                    elm.id === id ? elm.num = num : null;
                });
            } else {
                shop.push(product);
            }
        } else {
            shop = [];
            shop.push(product);
            console.log(shop)
        }
        cookie.set('shop', JSON.stringify(shop), 1);
    }
})();