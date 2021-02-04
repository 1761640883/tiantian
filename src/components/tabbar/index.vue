<template>
    <div id="navigation" class="container">
        <div class="l">
            天天<span>tiantian</span>
        </div>
        <div class="r">
            <ul>
                <router-link tag="li" to="/home">首页</router-link>
                <router-link tag="li" to="/introduced">关于我们</router-link>
                <router-link tag="li" to="/author">作者入口</router-link>
                <router-link tag="li" to="/join">加入我们</router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tabbar'
}
</script>

<style lang="scss" scoped>
#navigation{
    height: 60px;
    div.l{
        font: 28px/60px '造字工房凌黑（非商用）','微软雅黑';cursor: pointer;
    }
    ul{
        li{
            padding: 0 30px;float: left;font: 16px/60px '微软雅黑';
            &:last-child{
                padding-right: 0;
            }
        }
        .router-link-active{
            font-weight: bold;
        }
    }
}
</style>