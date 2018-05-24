<template>
    <div class="from-wrap cn">
        <div class="logo-s"><img src="../../static/cn/logo-s.png" alt=""></div>
        <div class="reg"><img src="../../static/cn/reg.png" alt=""></div>
        <hr class="line">
        <div class="form-box">
            <div class="location-wrap">
                <span class="icon"><img src="../../static/cn/icon.png" alt=""></span>
                <div class="select-box">
                    <select name="" id="select-area" v-model="address">
                        <option value="" disabled="false">选择的地点</option>
                        <option v-for="(item,index) in selectCNData" :key="index" value="item.value">{{item.value}}</option>
                    </select>
                </div>
                <span class="must"><img src="../../static/cn/must.png" alt=""></span>
            </div>
            <div class="input">
                <div>
                    <div class="label name"><img src="../../static/cn/name.png" alt=""></div>
                    <input class="half" v-model="name" type="text" maxlength="4" placeholder="姓名">
                </div>
                <div>
                    <div class="label mobile"><img src="../../static/cn/mobile.png" alt=""></div>
                    <input class="half" v-model="mobile" type="text" maxlength="11" placeholder="联系电话">
                </div>
            </div>
            <div class="input">
                <div>
                    <div class="label email"><img src="../../static/cn/email.png" alt=""></div>
                    <input class="half" v-model="email" maxlength="30" type="text" placeholder="电子邮箱">
                </div>
                <div>
                    <div class="label wechat"><img src="../../static/cn/wechat.png" alt=""></div>
                    <input class="half" v-model="wechat" type="text" placeholder="微信账号">
                </div>
            </div>
            <div class="input">
                <div>
                    <div class="label note"><img src="../../static/cn/note.png" alt=""></div>
                    <input class="half all" v-model="note" type="text" maxlength="120" placeholder="备注">
                </div>
            </div>
            <div class="radio-box">
                <div>
                    <div class="vip-tag"><img src="../../static/cn/vip-tag.png" alt=""></div>
                    <div class="radio-group">
                        <li :class="vipState ? 'active' : ''" @click="isVip">是</li>
                        <li :class="!vipState ? 'active' : ''" @click="notVip">否</li>
                    </div>
                </div>
            </div>
            <div class="input">
                <div>
                    <div class="label vip-num"><img src="../../static/cn/vip-num.png" alt=""></div>
                    <input class="half all" v-model="vNumber" type="text" maxlength="120" placeholder="请在此输入会员号">
                </div>
            </div>
            <div class="accept-wrap">
                <span class="accept-icon" :class="isAccept ? 'active' : ''" @click="changeAccept"></span>
                <div class="accept-des"><img src="../../static/cn/accept.png" @click="changeAccept" alt=""></div>
            </div>
            <div class="verifiy-wrap">
                <div class="ver-img"><img src="../../static/cn/ver.png" alt=""></div>
                <div class="ver-input"><input class="half" v-model="verCode" type="text" maxlength="4" placeholder="请输入图片中的文字"></div>
            </div>
        </div>
        <hr class="line">

        <div class="recommend-wrap">
            <div class="recommend-h2"><img src="../../static/cn/recommend.png" alt=""></div>
            <div class="input r-input">
                <div>
                    <div class="label"><img src="../../static/cn/fn.png" alt=""></div>
                    <input class="half" type="text" maxlength="4" placeholder="好友姓名">
                </div>
                <div>
                    <div class="label"><img src="../../static/cn/fm.png" alt=""></div>
                    <input class="half" type="text" maxlength="11" placeholder="联系电话">
                </div>
            </div>
            <div class="input">
                <div>
                    <div class="label"><img src="../../static/cn/fn.png" alt=""></div>
                    <input class="half" type="text" maxlength="4" placeholder="好友姓名">
                </div>
                <div>
                    <div class="label"><img src="../../static/cn/fm.png" alt=""></div>
                    <input class="half" type="text" maxlength="11" placeholder="联系电话">
                </div>
            </div>
            <div class="input">
                <div>
                    <div class="label"><img src="../../static/cn/fn.png" alt=""></div>
                    <input class="half" type="text" maxlength="4" placeholder="好友姓名">
                </div>
                <div>
                    <div class="label"><img src="../../static/cn/fm.png" alt=""></div>
                    <input class="half" type="text" maxlength="11" placeholder="联系电话">
                </div>
            </div>
            <div class="input">
                <div>
                    <div class="label"><img src="../../static/cn/fn.png" alt=""></div>
                    <input class="half" type="text" maxlength="4" placeholder="好友姓名">
                </div>
                <div>
                    <div class="label"><img src="../../static/cn/fm.png" alt=""></div>
                    <input class="half" type="text" maxlength="11" placeholder="联系电话">
                </div>
            </div>
            <div class="input">
                <div>
                    <div class="label"><img src="../../static/cn/fn.png" alt=""></div>
                    <input class="half" type="text" maxlength="4" placeholder="好友姓名">
                </div>
                <div>
                    <div class="label"><img src="../../static/cn/fm.png" alt=""></div>
                    <input class="half" type="text" maxlength="11" placeholder="联系电话">
                </div>
            </div>
            <div class="input">
                <div>
                    <div class="label"><img src="../../static/cn/fn.png" alt=""></div>
                    <input class="half" type="text" maxlength="4" placeholder="好友姓名">
                </div>
                <div>
                    <div class="label"><img src="../../static/cn/fm.png" alt=""></div>
                    <input class="half" type="text" maxlength="11" placeholder="联系电话">
                </div>
            </div>
        </div>

        <div class="submit" @click="submitUserInfo"><img src="../../static/cn/submit.png" alt=""></div>

        <div class="post">
            <img src="../../static/cn/post.png" alt="">
        </div>
        
    </div>
</template>
<script>
export default {
    data () {
        return {
            address: '',
            name: '',
            mobile: '',
            email: '',
            wechat: '',
            note: '',
            vNumber: '',
            verCode: '',
            isAccept: false,
            vipState: true,
            selectCNData: [
                {id:1, value: '上海iapm环贸广场'},
                {id:2, value: '上海世纪汇广场'},
            ],
            selectENData: [
                {id:1, value: 'Shanghai iapm ICC'},
                {id:2, value: 'Shanghai Century Exchange Plaza'},
            ],
            recommendMode: [
                
            ]
        }
    },
    mounted () {
    },
    methods: {
        isVip () {
            this.vipState = true
        },
        notVip () {
            this.vipState = false
        },
        changeAccept () {
            this.isAccept = !this.isAccept
        },
        checkUserInfo () {
            // 验证地点
            if (this.address == '') {
                alert('请选择地点')
                return false
            }
            // 验证姓名
            if (this.name == '') {
                alert('请填写姓名')
                return
            }
            // 验证电话
            if (this.mobile == '' || !this.utils.checkMobile(this.mobile)) {
                alert('请填写正确的电话')
                return
            }
            // 验证邮箱
            if (this.email == '' || !this.utils.checkEmail(this.email)) {
                alert('请填写正确的邮箱')
                return
            }
            // 验证会员号
            if (this.vipState) {
                if (this.vNumber == '') {
                    alert('请输入会员号')
                    return
                }
            }
            // 验证图形验证码
            if (this.verCode == '' || this.verCode.length < 4) {
                alert('请输入正确的验证码')
                return
            }
            this.toResultPage()
        },
        toResultPage () {
            this.$router.push({
                path: '/res'
            })
        },
        submitUserInfo () {
            // this.checkUserInfo()
            this.toResultPage()
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variable.scss';
.logo-s{
    width: 174px;
    margin: 48px 0 0 56px;
}
.reg{
    width: 193px;
    margin: 50px 0 0 56px;
}
.line{
    width: 650px;
    border: 1px solid #ed1b23;
    margin-top: 35px;
}
.form-box{
    width: 650px;
    margin-left: 52px;
}
.location-wrap{
    @extend %flex-v-center-h-between;
    margin-top: 30px;
}
.icon{
    width: 50px;
    display: inline-block;
    img{
        width: 100%;
    }
}
.select-box{
    display: inline-block;
    width: 302px;
    height: 54px;
    background-color: #d6d5d5;
    border-radius: 10px;
    margin-left: -130px;
}
#select-area{
    -webkit-appearance: none;
    width: 100%;
    border: none;
    height: 100%;
    padding: 0 20px;
    margin: 0;
    background: none;
    option{
        width: 100%;
        text-align: center;
        background-color: #f50;
    }
}
.must{
    display: inline-block;
    width: 123px;
}
.input{
     @extend %flex-v-center-h-between;
     margin-top: 30px;
}
.input:first-child{
    margin-top: 45px;
}
.label{
     width: 123px;
}
.cn{
    .label.name{
        width: 67px;
    }
    .label.mobile{
        width: 125px;
    }
    .label.email{
        width: 122px;
    }
    .label.wechat{
        width: 114px;
    }
    .label.note{
        width: 56px;
    }
}

.half{
    width: 308px;
    height: 70px;
    line-height: 70px;
    display: flex;
    -webkit-appearance: none;
    padding: 0;
    margin: 0;
    border: 4px solid #eee;
    border-radius: 10px;
    padding: 0 20px;
    font-size: 26px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
}
.all{
    width: 650px;
}
.radio-box{
    margin-top: 30px;
}
.vip-tag{
    width: 546px;
}
.radio-group{
    width: 650px;
    height: 70px;
    
    font-size: 26px;
    margin-top: 10px;
    display: flex;
    box-sizing: border-box;
    li{
        width: 50%;
        height: 100%;
        display: inline-block;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ccc;
        border-radius: 10px;
        // border: 4px solid #eee;
        background-color: #eee;
        
    }
    li:first-child{
        border-right: none;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }
    li:last-child{
        border-left: none;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }
    li.active{
        background-color: #ed1b23;
        color: #fff;
        // border-top-left-radius: 10px;
        // border-bottom-left-radius: 10px;
    }
}
.vip-num{
    width: 642px;
}
.accept-wrap{
     @extend %flex-v-center-h-between;
     justify-content: flex-start;
     margin-top: 50px;
}
.accept-icon{
    width: 32px;
    height: 32px;
    display: inline-block;
    border-radius: 50%;
    border: 1px solid #d6d5d5;
    
}
.accept-icon::after{
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #d6d5d5;
    margin: 5px 0 0 5px;
}
.accept-icon.active::after{
    background-color: #ed1b23;
}
.accept-des{
    width: 392px;
    display: inline-block;
    margin-left: 15px;
}
.verifiy-wrap{
    @extend %flex-v-center-h-between;
    margin-top: 50px;
}
.ver-img{
    display: inline-block;
    width: 284px;
}
.ver-input{
    display: inline-block;
}
.recommend-wrap{
    width: 650px;
    margin-left: 52px;

    .recommend-h2{
        width: 296px;
        margin-top: 60px;
    }
    .input{
        margin-top: 15px;
    }
    .r-input{
        margin-top: 40px;
    }
}

.submit{
    width: 342px;
    margin: 50px 0 0 204px;
}
.post{
    width: 500px;
    margin: 30px 125px;
    padding-bottom: 20px;
}

</style>
