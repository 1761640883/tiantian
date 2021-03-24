<template>
    <div class="detail">
        <div class="back">
            <span @click="$router.back()">返回首页</span>
        </div>
        <div class="detailVideo">
            <video :src="data.preview_url" controls></video>
        </div>
        <div class="detailText" v-if="data.duration">
            <h2>{{data.title}}</h2>
            <h4>{{data.category}} / {{data.duration.text}}</h4>
            <p>{{data.description}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Detail",
    props: ['id'],
    data(){
        return {
            data: {}
        }
    },
    mounted(){
        this.axios.get(`https://api.eyepetizer.net/v1/activity/website/get_item_detail?resource_id=${this.id}&resource_type=pgc_video`).then(res=>{
            this.data = res.data.result.item_detail;
            console.log(this.data)
        })
    }
}
</script>

<style lang="scss" scoped>
.detail{
    background: black;
    overflow: auto;
    height: 100%;
    &::-webkit-scrollbar {
	    display: none
	}
    .back{
        height: 64px;width: 80%;line-height: 64px;color: white;font-size: 14px;margin: auto;
    }
    .detailVideo{
        width: 70%;
        height: auto;
        overflow:hidden;
        margin: 30px auto;
        video{
            width: 100%;height: 100%;
        }
    }
    .detailText{
        color: white;width: 70%;margin: 0 auto;
        h2{
            font-size: 20px;
            line-height: 28px;
        }
        h4{
            font-size: 14px;
            line-height: 24px;
        }
        p{
            font-size: 12px;
            line-height: 22px;
            margin-top: 22px;
            margin-bottom: 70px;
        }
    }
}
</style>