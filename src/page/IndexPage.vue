<template>
    <div class="index-wrap">
        <img class="logo" src="static/cn/fit-logo.png" alt="">
        <img class="des" src="static/cn/fit-des2.png" alt="">
        <img @click="toLandingPage" src="static/cn/fit-btn.png" alt="" class="btn">
        <a href="http://pure.51xzxz.com/fitness-en"><img class="lang-btn" src="../assets/cn/fit-en.png" alt=""></a>
    </div>
</template>
<script>
export default {
    mounted () {
        this.$_wechat.initWXShare()
    },
    methods: {
        toLandingPage () {
            this.$router.push({
                path: '/landing'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.index-wrap{
    width: 100%;
    height: 100%;
    max-width: 750px;
    margin: 0 auto;
    background-image: url(/static/cn/fit-bg2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .logo{
        position: absolute;
        width: 270px;
        left: 25px;
        top: 25px;
    }
    .des{
        position: absolute;
        
        width: 608px;
        left: 0px;
        top: 610px;
        // width: 530px;
        // top: 650px;
        // left: 25px;
    }
    .btn{
        position: absolute;
        width: 464px;
        bottom: 80px;
        left: 143px;
    }
    .lang-btn{
        width: 75px;
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 2;
    }
}
</style>
