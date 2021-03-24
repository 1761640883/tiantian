<template>
    <div class="container_fluid" id="introduced">
        <tabbar/>
        <div class="introduced-main" @mousewheel="handleTointroducedMainScroll">
            <div class="introduced-main-box" ref="introducedMain">
                <div class="introduced-main-background">
                    <div>Feed your eyes,</div>
                    <div>feed your soul.</div>
                </div>
                <div class="introduced-main-content">
                    <ul class="introduced-main-content-ul">
                        <li>
                            <h2>关于天天</h2>
                            <br>
                            <br>
                            <p>天天是汇聚全球优质创作者的短视频内容社区。</p>
                            <br>
                            <p>我们致力于向用户提供高级的视觉享受、传递新鲜文化和生活方式。并欢迎追求质量、审美和创造力的全球创作者的入驻，共同为用户提供美好生活方式启迪，用好内容，传递「开阔」和「向上」的精神愉悦感。</p>
                        </li>
                        <li>
                            <img src="https://home.eyepetizer.net/image/about/img-1.png" alt="加载失败">
                        </li>
                        <li>
                            <p>
                                在天天，我们拒绝泛娱乐化沉沦，珍惜每一位用户的碎片化时间，努力让每一次点击，每一段三五分钟的浏览，都能为用户打开一个新的世界，体会新的表达，引发新的思考。让前进的动力成为我们与用户彼此相伴的最核心理由。<br>
                                <br>
                                我们希望让每一位用户，通过观看、讨论、发布、和彼此结交，在这里找寻到精神伙伴和兴趣家园。
                            </p>
                        </li>
                        <li>
                            <img src="https://home.eyepetizer.net/image/about/img-2.png" alt="加载失败">
                        </li>
                        <li>
                            <img src="https://home.eyepetizer.net/image/about/img-3.png" alt="加载失败">
                        </li>
                        <li>
                            <h2>荣获奖项</h2>
                            <p>
                                豌豆荚设计奖<br>
                                小米金米奖<br>
                                OPPO 至美应用推荐<br>
                                VIVO 极光奖<br>
                                <br>
                                2016年魅斯卡奖 最佳应用<br>
                                2016年REnextop Award年度最佳传媒合作伙伴<br>
                                2017 魅族年度魅斯卡奖<br>
                                2017年Vtime新橙奖 最受欢迎精品短视频App<br>
                                2018年站酷 评审特别奖<br>
                                2018年vivo应用商店年度设计奖<br>
                                2018年oppo软件商店至美奖<br>
                                2018年知乎盐匠竞技 银奖<br>
                            </p>
                        </li>
                        <li>
                            <img src="https://home.eyepetizer.net/image/about/img-4.jpg" alt="加载失败">
                        </li>
                        <li>
                            <img src="https://home.eyepetizer.net/image/about/img-5.png" alt="加载失败">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'introduced',
    methods: {
        handleTointroducedMainScroll(ev){ // 滚动
            let introducedMain = this.$refs.introducedMain;
            let div = introducedMain.children[0].children[1];
            if(ev.wheelDeltaY < 0){
                if(-(introducedMain.offsetLeft) >= (div.offsetLeft + 2600 - introducedMain.offsetWidth)){
                    introducedMain.style.left = -(div.offsetLeft + 2600 - introducedMain.offsetWidth);
                    return;
                }
            }else{
                if(introducedMain.offsetLeft >= 0){
                    introducedMain.style.left = '0px';
                    return;
                } 
            }
            
            introducedMain.style.left = introducedMain.offsetLeft + (ev.wheelDeltaY / 3) + 'px';

        }
    }
}
</script>

<style lang="scss" scoped>
#introduced{
    display: flex;
    flex-direction: column;
    .introduced-main{
        flex: 1;
        height: 100%;
        position: relative;
        overflow: hidden;
        .introduced-main-box{
            width: 100%;
            height: 100%;
            position: relative;
            .introduced-main-background{
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                div{
                    position: absolute;
                    font: 380px/380px "华文琥珀","微软雅黑";
                    white-space:nowrap;
                    &:first-child{
                        left: 485px;
                        top: -35px;
                    }
                    &:last-child{
                        left: 2400px;
                        bottom: -80px;
                    }
                }
            }
            .introduced-main-content{
                .introduced-main-content-ul{
                    li{
                        position: absolute;
                        h2{
                            font-size: 24px;
                            font-weight: bold;

                        }
                        p{
                            font-size: 13px;
                            line-height: 25px;
                            text-align: justify;
                        }
                        img{
                            width: 320px;
                            height: 240px;
                        }
                        &:nth-of-type(1){
                            width: 320px;
                            left: 380px;
                            bottom: 60px;
                        }
                        &:nth-of-type(2){
                            left: 740px;
                            bottom: 60px;
                        }
                        &:nth-of-type(3){
                            width: 320px;
                            left: 1600px;
                            bottom: 85px;
                        }
                        &:nth-of-type(4){
                            left: 1980px;
                            bottom: 60px;
                        }
                        &:nth-of-type(5){
                            left: 2800px;
                            bottom: 130px;
                        }
                        &:nth-of-type(6){
                            left: 3600px;
                            top: 20px;
                            width: 320px;
                            h2{
                                position: absolute;
                                left: -125px;

                            }
                        }
                        &:nth-of-type(7){
                            left: 4100px;
                            top: 20px;
                        }
                        &:nth-of-type(8){
                            left: 4500px;
                            bottom: 100px;
                        }
                    }
                }
            }
        }
    }
}
</style>