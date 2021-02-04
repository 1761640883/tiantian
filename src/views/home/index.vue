<template>
    <div class="container_fluid" id="home" ref="home">
        <tabbar/>
        <div class="main">
            <div class="move">
                <div class="video">
                    <video src="/img/泰特现代美术馆_ 注意这个地方(Tate Modern _ _爱给网_aigei_com.mp4" autoplay loop muted controls></video>
                </div>
                <div class="text">
                    <p>Feed your eyes,feed your soul.</p>
                    <p>天天，看更好的世界。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import tabbar from '@/components/tabbar'

export default {
    name: 'home',
    components: {
        tabbar
    },
    methods: {
        move(ev){
            var homeDiv = this.$refs.home;
            var mousel = ev.clientX;
            var mouset = ev.clientY;
            var centerl = homeDiv.offsetWidth / 2;
            var centert = homeDiv.offsetHeight / 2;
            var l = (mousel - centerl) / 60;
            var t = (mouset - centert) / 60;
            // console.log(l, t)
            var moveDiv = homeDiv.getElementsByClassName('move')
            moveDiv[0].style.transform = `rotateX(${-t}deg) rotateY(${l}deg)`
        }
    },
    mounted(){
        var homeDiv = this.$refs.home;
        homeDiv.onmousemove = this.move
    }
}
</script>

<style lang="scss" scoped>
#home{
    background: black;color: white;position:relative;
    .main{
        height: 100%;position: relative;perspective: 800px;
        .move{
            width: 100%;height:100%;transform-style:preserve-3d;
            .video{
                width: 800px;height: 500px;overflow: hidden;position: absolute;left:50%;top: 50%;margin: -300px -400px;
                video{
                    width: auto;height: 140%;position: absolute;left: 50%;top: 50%;margin: -350px -612px;
                }
            }
            .text{
                width: 100%;position:absolute;z-index:2;top:50%;margin-top: -120px;transform: translateZ(80px);
                p{
                    text-align: center;
                    &:nth-of-type(1){
                        font: bold 60px "微软雅黑";
                    }
                    &:nth-of-type(2){
                        font: bold 30px "微软雅黑";letter-spacing: 10px;margin-top: 12px;
                    }
                }
            }
        }
    }
}
</style>