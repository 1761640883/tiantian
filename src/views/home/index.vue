<template>
    <div class="container_fluid" id="home" ref="home">
        <tabbar/>
        <div class="main" ref="main">

            <div class="move-box" ref="home">
                <div class="move">
                    <div class="video">
                        <video src="/img/泰特现代美术馆_ 注意这个地方(Tate Modern _ _爱给网_aigei_com.mp4" autoplay loop muted></video>
                    </div>
                    <div class="text">
                        <p>Feed your eyes,feed your soul.</p>
                        <p>天天，看更好的世界。</p>
                    </div>
                </div>
            </div>
            
            <div class="videoList" @mousewheel.stop="videoListItemScroll">
                <div ref="videoListBox" class="videoList-box">
                    <div class="videoList-header">
                        <h2>精选创意视频</h2>
                        <p> 汇聚全球优质视频内容，让你大开眼界；了解各领域全新动态，启迪你的生活灵感。</p>
                    </div>
                    <div class="videoList-itemlist" ref="itemlistBox">
                        <ul ref="videolist" >
                            <li v-for="(item, index) in itemList" :key="item.resource_id" @click="$router.push('/detail/' + item.resource_id)">
                                <img :src="item.cover_url" alt="加载失败" @mouseenter="mouseover(index)">
                                <div>
                                    <video :src="item.preview_url" @mouseleave="mouseleave(index)" autoplay loop muted></video>
                                </div>
                                <p>{{item.title}}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="videoList-item">
                        <ul ref="list">
                            <li v-for="(data, index) in itemListName" :key="index" @click="handleTovideoListItem(index)" class="none">{{data.name}}</li>
                        </ul>
                        <img src="https://home.eyepetizer.net/image/home/Scroll.png" alt="加载失败">
                    </div>
                </div>
            </div>

            <div class="community" @mousewheel.stop="communityScroll">
                <div class="box" ref="community">
                    <div class="community-background">
                        <div>Feed your eyes,</div>
                        <div>feed your soul.</div>
                    </div>
                    <div class="community-content">
                        <div class="community-content-box">
                            <img src="@/../public/img/iphone1.png" alt="加载失败">
                            <div>
                                <h2>有机社区</h2>
                                <p>优质用户及创作者的集合地。自由分享生活点滴</p>
                                <p>随时收获创作灵感，一同共建高品质内容生态。</p>
                                <p>精选话题、有奖征集，多种形式即时参与。</p>
                                <p>让你的每一刻精彩瞬间，都被看见。</p>
                            </div>
                        </div>
                        <div class="community-content-box">
                            <img src="@/../public/img/iphone2.png" alt="加载失败">
                            <div>
                                <h2>「在现场」直播</h2>
                                <p>国内外佳片展映、人文艺术领域名人直播，「在现场」邀你与艺术家一起创作，和朋友一起观展看片，来一场身临其境的愉悦体验。</p>
                            </div>
                        </div>
                        <div class="community-content-box">
                            <img src="@/../public/img/iphone3.png" alt="加载失败">
                            <div>
                               <h2>品牌墙</h2>
                                <p>网罗国内外品牌精选创意视频，用来自世界每个角落的广告创意，为你输送源源不断的创意灵感。一个创意人群不可不知的灵感素材库。</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'home',
    data(){
        return {
            isRun: true, // 判断上次运动是否结束
            itemListName: [], // 导航列表
            itemList:[], // 视频列表
        }
    },
    methods: {
        move(ev){// 首页交互
            let homeDiv = this.$refs.home;
            let mousel = ev.clientX;
            let mouset = ev.clientY;
            let centerl = homeDiv.offsetWidth / 2;
            let centert = homeDiv.offsetHeight / 2;
            let l = (mousel - centerl) / 60;
            let t = (mouset - centert) / 60;
            let moveDiv = homeDiv.getElementsByClassName('move')
            moveDiv[0].style.transform = `rotateX(${-t}deg) rotateY(${l}deg)`
        },

        buttonSwitch(ev){ // 翻页
            let mainDiv = this.$refs.main;
            // 判断向左还是向右
            if(ev.wheelDeltaY > 0){
                if(mainDiv.offsetLeft == 0){
                    return;
                }
                this.scroll("right")
            }else{
                if(mainDiv.offsetLeft == -mainDiv.offsetWidth * 2){
                    return;
                }
                this.scroll("left")
            }
        },

        scroll(direction){// 滚动（切换页面）
            // 判断上次运动是否结束
            if(!this.isRun){ 
                return
            }
            this.isRun = false

            this.itemTransiton()

            // 获取节点和节点坐标
            let mainDiv = this.$refs.main;
            let mainWidth = mainDiv.offsetWidth;
            let position = mainDiv.offsetLeft

            // 获取目的坐标
            if(direction == "left"){
                position = position - mainWidth
            }
            if(direction == "right"){
                position = position + mainWidth
            }

            // 开始运动
            clearInterval(timer)
            var timer = setInterval(() => {
                let nowposition = mainDiv.offsetLeft;
                let speed = (position - nowposition) / 8;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed) 
                if(nowposition == position){
                    this.isRun = true

                    // 视频列表定位归0
                    let ul = this.$refs.videolist;
                    ul.style.left = '0px';

                    // 介绍列表定位归0
                    let communityBox = this.$refs.community;
                    communityBox.style.left = 0 + 'px';

                    //过渡动画归0
                    if(-nowposition != mainWidth){
                        let videoListBox = this.$refs.videoListBox
                        videoListBox.id = ""
                        let lis = ul.children;
                        for(let i = 0; i < lis.length; i++){
                            lis[i].className = ""
                        }
                    }

                    clearInterval(timer)
                }else{
                    mainDiv.style.left = mainDiv.offsetLeft + speed + 'px'
                }
            }, 30);

        },

        mouseover(index){// 鼠标移入
            let ul = this.$refs.videolist;
            let img = ul.children[index].querySelector('img');
            let div = ul.children[index].querySelector('div');
            img.style.display = "none";
            div.style.display = "block";
        },
        mouseleave(index){// 鼠标移出
            let ul = this.$refs.videolist;
            let img = ul.children[index].querySelector('img');
            let div = ul.children[index].querySelector('div');
            img.style.display = "block";
            div.style.display = "none";
        },

        handleTovideoListItem(index){// 导航跳转
            let list = this.$refs.list;
            for(let i = 0; i < list.children.length; i++){
                list.children[i].className = "none"
            }
            list.children[index].className = "active";
            this.itemList = this.itemListName[index].item_list;

            this.itemTransiton() // 启动过渡动画
        },

        videoListItemScroll(ev){// 视频列表滚动
            if(!this.isRun){
                return;
            }
            let itemlistBox = this.$refs.itemlistBox;
            let boxWidth = itemlistBox.offsetWidth;// 最外层盒子宽度
            let ul = itemlistBox.children[0];
            let lis = ul.children;
            let liWidth = lis[lis.length - 1].offsetLeft + 360; // li的实际宽度
            if(-(liWidth - boxWidth + 300) > ul.offsetLeft){
                this.scroll("left");
                return;
            }
            if(ul.offsetLeft > 100){
                this.scroll("right");
                return;
            }
            ul.style.left = ul.offsetLeft + (ev.wheelDeltaY / 3) + 'px';
        },

        communityScroll(ev){// 简介滚动
            if(!this.isRun){
                return;
            }
            let communityBox = this.$refs.community;
            let boxWidth = communityBox.offsetWidth;// 最外层盒子宽度
            if(communityBox.offsetLeft > 100){
                this.scroll("right");
                return;
            }
            if(-(communityBox.offsetLeft) >= boxWidth - 800){
                if(ev.wheelDeltaY < 0){
                    return
                }
            }
            communityBox.style.left = communityBox.offsetLeft + (ev.wheelDeltaY / 3) + 'px';
        },

        itemTransiton(){// 视频的过渡动画
            let videoListBox = this.$refs.videoListBox
            videoListBox.id = "videoListBoxTransition"
            let ul = this.$refs.videolist;
            let lis = ul.children;
            for(let i = 0; i < lis.length; i++){
                setTimeout(()=>{
                    lis[i].className = "itemTransition"
                }, 300 * (i+1))
            }
        }
    },
    mounted(){
        var homeDiv = this.$refs.home;
        homeDiv.onmousemove = this.move; // 启动首页交互
        homeDiv.onmousewheel = this.buttonSwitch; // 启动翻页
        this.axios.get('https://api.eyepetizer.net/v1/activity/website/get_tab_video_list').then(res=>{ // 获取视频数据
            this.itemListName = res.data.result.item_list;
            this.itemList = res.data.result.item_list[0].item_list
            this.$nextTick(() => {
                this.handleTovideoListItem(0)
            })
        })
    }
}
</script>

<style lang="scss" scoped>
#home{
    background: black;color: white;position:relative;
    display: flex;
    flex-direction: column;
    .main{
        height: 100%;position:relative;flex: 1;
        .move-box{
            height: 100%;position: absolute;perspective: 800px;width: 100%;overflow: hidden;
            .move{
                width: 100%;height:100%;transform-style:preserve-3d;position: relative;
                .video{
                    width: 60%;height: 70%;overflow: hidden;position: absolute;
                    left: 20%;
                    top: 15%;
                    video{
                        width: 160%;height: auto;position: absolute;left: -30%;top: -30%;
                    }
                }
                .text{
                    width: 100%;position:absolute;z-index:2;top:50%;margin-top: -88px;transform: translateZ(80px);
                    p{
                        text-align: center;
                        &:nth-of-type(1){
                            font: bold 70px "微软雅黑";
                        }
                        &:nth-of-type(2){
                            font: bold 35px "微软雅黑";letter-spacing: 10px;margin-top: 12px;
                        }
                    }
                }
            }
        }
        
        .videoList{
            width: 100%;height: 100%;position: absolute;left: 100%;overflow: hidden;
            display: flex;
            align-items: center;
            .videoList-box{
                position: absolute;
                opacity: 0;
                width: 100%;height: auto;
                transition: opacity 1s linear;
            }
            .videoList-header{
                height: 80px;
                line-height: 38px;
                margin: 10px 0 10px 240px;
                h2{
                    font-size: 26px;
                    color: white;
                }
                p{
                    font-size: 14px;
                    color: white;
                }
            }
            .videoList-itemlist{
                width: 100%;
                height: 360px;
                margin-left: 240px;
                position: relative;
                ul{
                    width: 5000px;
                    height: 360px;
                    position: absolute;
                    left: 0;
                    li{
                        border-bottom: 1px solid white;
                        width: 360px;
                        margin-right: 60px;
                        float: left;
                        opacity: 0;
                        transition: opacity .5s linear;
                        img{
                            width: 360px;
                            height: 200px;
                            display: block;
                            margin: 8px 0;
                        }
                        div{
                            width: 360px;
                            height: 200px;
                            overflow: hidden;
                            display: none; 
                            margin: 8px 0;
                            video{
                                width: 360px;
                            }
                        }
                        p{
                            line-height: 30px;
                            font-size: 14px;
                        }
                        &:nth-of-type(2n+1){
                            margin-top: 0;
                        }
                        &:nth-of-type(2n){
                            margin-top: 80px;
                        }
                    }
                    .itemTransition{
                        opacity: 1;
                    }
                }
            }
            .videoList-item{
                margin-left: 220px;
                overflow: auto;
                display: flex;
                justify-content: space-between;
                img{
                    width: 130px;
                    height: auto;
                    margin-right: 240px;
                }
                ul{
                    overflow: auto;
                    li{
                        margin-left: 20px;
                        height: 22px;
                        line-height: 22px;
                        font-size: 16px;
                        color: white;
                        float: left;
                        position: relative;
                        padding-right: 40px;
                        &:last-child{
                            padding-right: 0;
                        }
                    }
                    .active{
                        font-weight: bold;
                        &::after{
                            content: '';
                            display: block;
                            width: 8px;
                            height: 8px;
                            border-radius: 50%;
                            background: white;
                            position:absolute;
                            left: -13px;
                            top: 7px;
                        }
                    }
                } 
            }
        }
        #videoListBoxTransition{
            opacity: 1;
        }

        .community{
            width: 100%;height: 100%;position: absolute;left: 200%;background: black;position: relative;
            .box{
                width: 3220px;
                height: 100%;
                position: absolute;
                left: 0;
                .community-background{
                    font:bold 200px "造字工房凌黑（非商用）","微软雅黑";
                    color:#4db5f7;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    div{
                        white-space:nowrap;
                        &:first-child{
                            position: absolute;
                            bottom: 100px;
                            left: 10px;
                        }
                        &:last-child{
                            position: absolute;
                            bottom: 0;
                            left: 1800px;
                        }
                    }
                }
                .community-content{
                    position: relative;
                    top: 0;
                    left: 0;
                    .community-content-box{
                        width: 1160px;
                        position: absolute;
                        top: 0;
                        img{
                            width: 224px;height: 490px;
                            position: absolute;
                            left: 276px;
                            top: 100px;
                        }
                        div{
                            position: absolute;
                            left: 600px;
                            top: 265px;
                            h2{
                                font-size: 28px;
                                font-weight: bold;
                                margin-bottom: 42px;
                            }
                            p{
                                font-size: 14px;
                                line-height: 26px;
                                &:nth-of-type(2){
                                    margin-bottom: 24px;
                                }
                            }
                        }
                        &:nth-of-type(2){
                            left: 1160px;
                        }
                        &:nth-of-type(3){
                            left: 2320px;
                            width: 900px;
                        }
                    }
                    
                }
            }
        }
    }
}
</style>