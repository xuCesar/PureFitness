<template>
    <div class="result-wrap" v-if="lang == 'cn'">
        <div class="r-cover">
            <img src="static/cn/r-cover.jpg" alt="">
        </div>
        <div class="r-01">
            <img src="../assets/cn/r-01.png" alt="">
        </div>
        <div class="r-02">
            <img src="../assets/cn/r-02.png" alt="">
        </div>
        <div class="r-btn-group">
            <div class="r-btn r-btn-1"><a href="http://pure.51xzxz.com/yoga"><img src="../assets/cn/r-03.png" alt=""></a></div>
            <div class="r-btn r-btn-2" @click="shareHandle"><img src="../assets/cn/r-04.png" alt=""></div>
        </div>
        <div class="r-05">
            <img src="static/cn/r-05.png" alt="">
        </div>
        <div class="box"></div>
        <transition name="fade">
            <div class="share-wrap" @click="cancelShare" v-if="isShare">
                <img src="static/cn/share-tag.png" alt="">
            </div>
        </transition>
    </div>
    <div class="result-wrap" v-else>
        en
    </div>
</template>
<script>
export default {
    data () {
        return {
            lang: 'cn',
            isShare: false
        }
    },
    created () {
        this.lang = this.$route.query.lang ? this.$route.query.lang : this.lang
    },
    mounted () {
        this.$_wechat.initWXShare()
    },
    methods: {
        toYogaPage () {
        },
        shareHandle () {
            this.isShare = true
        },
        cancelShare () {
            this.isShare = false
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/styles/_variable.scss';
.result-wrap{
    @extend %wh;
    position: relative;
}
.r-cover{
    width: 750px;
    img{
        width: 100%;
    }
}
.r-01{
    width: 434px;
    margin: 60px 0 0 158px;
}
.r-02{
    width: 460px;
    margin: 40px 0 0 145px;
}
.r-btn-group{
    @extend %flex-v-center-h-between;
    padding: 0 23px;
    margin-top: 45px;
    .r-btn{
        width: 340px;
    }
}
.r-05{
    width: 638px;
    margin: 50px 0 0 56px;
}
.box{
    width: 100%;
    height: 15px;
    position: absolute;
    bottom: 0;
    background-color: #de2c32;
}
.share-wrap{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.8);
    position: absolute;
    top: 0;
    left: 0;
    img{
        width: 632px;
        margin: 20px 0 0 66px;
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
