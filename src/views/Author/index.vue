<template>
    <div id="author">
        <tabbar/>
        <div class="author-header">
            <h2>天天</h2>
            <h4>tiantian</h4>
            <h6>天天作者开放平台</h6>
            <h3>马上成为开眼作者，创造更多优质短视频内容</h3>
            <div class="author-header-button">成为作者</div>
            <p>
                <span>
                    已有作者帐号登录
                </span>
            </p>
            <div class="author-header-background">
                <img src="http://open.eyepetizer.net/static/img/bg_1.dc09b7b.jpg" alt="加载失败">
            </div>
        </div>
        <div class="author-content">
            <h2>轻松成为天天作者</h2>
            <h4>想要成为天天作者，只需完成以下三步操作</h4>
            <ul class="author-content-tutorial-one">
                <li>
                    <img src="data:image/png;base64,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" alt="加载失败">
                </li>
                <li>
                    <img src="data:image/png;base64,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" alt="加载失败">
                </li>
                <li>
                    <img src="data:image/png;base64,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" alt="加载失败">
                </li>
            </ul>
            <ol class="author-content-tutorial-two">
                <li>
                    <img src="http://open.eyepetizer.net/static/img/slide1.20d26de.png" alt="加载失败">
                </li>
                <li>
                    <img src="http://open.eyepetizer.net/static/img/slide2.bf767da.png" alt="加载失败">
                </li>
                <li>
                    <img src="http://open.eyepetizer.net/static/img/slide3.b0bc6e8.png" alt="加载失败">
                </li>
                <li>
                    <img src="http://open.eyepetizer.net/static/img/slide4.99ed1fe.png" alt="加载失败">
                </li>
            </ol>
            <h2>天天作者专享权利</h2>
            <h4>您将会拥有专属的作者主页，更完备的视频发布服务和更多的曝光</h4>
            <div class="author-content-posters">
                <img src="http://open.eyepetizer.net/static/img/pc.956474b.png" alt="加载失败">
            </div>
            <h2>众多优质视频作者已入驻</h2>
            <h4>成为其中的一员，让创作的价值被更多人看到</h4>
            <ul class="author-content-nav one">
                <li>NOWNESS</li>
                <li>瞎看什么</li>
                <li>VICE 中国</li>
            </ul>
            <ul class="author-content-nav two">
                <li>彩虹合唱团</li>
                <li>柯首映</li>
                <li>二更视频</li>
            </ul>
        </div>
        <div class="author-footer">
            <h2>天天</h2>
            <h4>tiantian</h4>
            <h6>马上成为天天作者，我们期待您的加入</h6>
            <h3>创意、运动、美食、剧情、动画，等等... 我们欢迎不同类型的作者和作品</h3>
            <div class="author-footer-button">成为作者</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'author'
}
</script>

<style lang="scss" scoped>
#author{
    background: #e9eaef;
    height: 100%;
    overflow: auto;
    .author-header{
        text-align: center;
        h2{
            font-size: 56px;
            font-weight: bold;
            margin-top: 60px;
        }
        h4{
            font-family: '造字工房凌黑（非商用）','微软雅黑';
            font-size: 27px;
            margin-top: -10px;
            margin-bottom: 58px;
        }
        h6{
            font: bold 36px/36px '微软雅黑';
            color: #444342;
        }
        h3{
            font: 20px/20px;
            color: #3b3a49;
            margin-top: 30px;
        }
        .author-header-button{
            width: 200px;
            height: 60px;
            border: 1px solid #c5c5c5;
            font-size:20px;
            font-weight: bold;
            line-height: 60px;
            margin: 42px auto 0;
            transition:all .3s ease-in;
            cursor: pointer;
            &:hover{
                color: white;
                background: #444444;
                border: 1px solid #444444;
            }
        }
        p{
            margin-top: 26px;
            font-size: 16px;
            line-height: 16px;
            color: #353348;
            font-weight: bold;
            padding-bottom: 50px;
            span{
                cursor: pointer;
               &:hover{
                    color: #337ab7;
                } 
            }
        }
        .author-header-background{
            width: 100%;
            img{
                width: 100%;
                height: auto;
            }
        }
    }
    .author-content{
        background: white;
        h2{
            font-size: 28px;
            line-height: 28px;
            padding-top: 70px;
            margin-bottom:24px;
            font-weight: bold;
            text-align: center;
            color: #444;
        }
        h4{
            font-size: 20px;
            line-height: 22px;
            text-align: center;
            color: #888;
        }
        .author-content-tutorial-one{
            display: flex;
            justify-content: center;
            margin: 140px 0;
            li{
                flex: 0.2;
                img{
                    width: 50%;
                    height: auto;
                    margin: auto;
                }
            }
        }
        .author-content-tutorial-two{
            position: relative;
            li{
                animation: contentTutorialAnimation 12s ease infinite;
                width: 65%;
                margin: 0 auto;
                opacity: 0;
                img{
                    width: 100%;
                    height: auto;
                }
                &:nth-of-type(1){
                    position: relative;
                    top: 0;
                }
                &:nth-of-type(2){
                    animation-delay:3s;
                    position: absolute;
                    top: 0;
                    left: 17.5%;
                }
                &:nth-of-type(3){
                    animation-delay:6s;
                    position: absolute;
                    top: 0;
                    left: 17.5%;
                }
                &:nth-of-type(4){
                    animation-delay:9s;
                    position: absolute;
                    top: 0;
                    left: 17.5%;
                }
            }
            @keyframes contentTutorialAnimation {
                0%{opacity: 0;transform: translateY(50px);z-index: 2;}
                6%{opacity: 1;transform: translateY(0);}
                25%{opacity: 1;}
                26%{z-index: 1;}
                31%{opacity: 0;}
                
            }
        }
        .author-content-posters{
            img{
                width: 65%;
                height: auto;
                margin: 70px auto 0;
            }
        }
        .author-content-nav{
            display: flex;
            li{
                flex: 1;
                height: 300px;
                line-height: 300px;
                text-align: center;
                font-size: 24px;
                color: white;
                letter-spacing: 8px;
                background-position: center center;
                background-size: auto 100%;
                background-repeat: no-repeat;
            }
        }
        .author-content-nav.one{
            margin-top: 100px;
            li{
                &:nth-of-type(1){
                    background-image: url(http://open.eyepetizer.net/static/img/1.a47644f.png);
                }
                &:nth-of-type(2){
                    background-image: url(http://open.eyepetizer.net/static/img/2.edce0db.png);
                }
                &:nth-of-type(3){
                    background-image: url(http://open.eyepetizer.net/static/img/3.2294095.png);
                }
            }
        }
        .author-content-nav.two{
            li{
                &:nth-of-type(1){
                    background-image: url(http://open.eyepetizer.net/static/img/4.a2b4afc.png);
                }
                &:nth-of-type(2){
                    background-image: url(http://open.eyepetizer.net/static/img/5.e9637dc.png);
                }
                &:nth-of-type(3){
                    background-image: url(http://open.eyepetizer.net/static/img/6.3f0fab5.png);
                }
            }
        }
    }
    .author-footer{
        text-align: center;
        background: white;
        padding-bottom: 100px;
        h2{
            font-size: 56px;
            font-weight: bold;
            padding-top: 60px;
        }
        h4{
            font-family: '造字工房凌黑（非商用）','微软雅黑';
            font-size: 27px;
            margin-top: -10px;
            margin-bottom: 58px;
        }
        h6{
            font: bold 36px/36px '微软雅黑';
            color: #444342;
        }
        h3{
            font: 20px/20px;
            color: #3b3a49;
            margin-top: 30px;
        }
        .author-footer-button{
            width: 200px;
            height: 60px;
            border: 1px solid #c5c5c5;
            font-size:20px;
            font-weight: bold;
            line-height: 60px;
            margin: 42px auto 0;
            transition:all .3s ease-in;
            cursor: pointer;
            &:hover{
                color: white;
                background: #444444;
                border: 1px solid #444444;
            }
        }
    }
}
</style>