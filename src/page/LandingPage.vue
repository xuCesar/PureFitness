<template>
    <div class="landing-wrap">
        <div class="landing" v-if="lang == 'cn'">
            <div v-for="(item,index) in landingCNData" v-if="index == 3" @click="toFormPage" :class="item.className" :key="index">
                <img :src="item.imageUrl" alt="">
            </div>
            <div v-else :class="item.className" :key="index">
                <img :src="item.imageUrl" alt="">
            </div>
        </div>
        <div class="landing" v-else>
            <div v-for="(item,index) in landingENData" v-if="index == 3" @click="toFormPage" :class="item.className" :key="index">
                <img :src="item.imageUrl" alt="">
            </div>
            <div v-else :class="item.className" :key="index">
                <img :src="item.imageUrl" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            lang: 'cn',
            landingCNData: [
                {id:1, className: 'cover', imageUrl: '../../static/cn/cover.jpg'},
                {id:2, className: 'logo', imageUrl: '../../static/cn/logo.png'},
                {id:3, className: 'des', imageUrl: '../../static/cn/des.png'},
                {id:4, className: 'btn', imageUrl: '../../static/cn/btn.png'},
            ],
            landingENData: [
                {id:1, className: 'cover', imageUrl: '../../static/en/cover.jpg'},
                {id:2, className: 'logo', imageUrl: '../../static/en/logo.png'},
                {id:3, className: 'des', imageUrl: '../../static/en/des.png'},
                {id:4, className: 'btn', imageUrl: '../../static/en/btn.png'},
            ],
        }
    },
    watch: {
    },
    methods: {
        toFormPage () {
            // this.lang = 'en'
            this.$router.push({
                path: '/form'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variable.scss';
.cover{
    width: 750px;
    img{
        width: 100%;
    }
}
.logo{
    width: 314px;
    margin: -50px 0 0 57px;
}
.des{
    width: 612px;
    margin: 76px 0 0 58px;
}
.btn{
    width: 342px;
    margin: 0 auto;
    margin-top: 90px;
}
</style>
