<template>
    <div class="register-container">
        <!-- 注册内容 -->
        <div class="register">
            <h3>
                注册新用户
                <span class="go">
                    我有账号，去
                    <a href="login.html" target="_blank">登陆</a>
                </span>
            </h3>
            <div class="content">
                <label>手机号:</label>
                <ValidationProvider rules="required|length|phone" v-slot="{ errors }">
                    <input type="text" placeholder="请输入你的手机号" v-model="user.phone" />
                    <span class="error-msg">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div class="content">
                <label>验证码:</label>
                <ValidationProvider rules="codes" v-slot="{ errors }">
                    <input type="text" placeholder="请输入验证码" v-model="user.code" />
                    <img ref="code" src="http://182.92.128.115/api/user/passport/code" alt="code" />
                    <span class="error-msg">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>

            <div class="content">
                <label>登录密码:</label>
                <input type="text" placeholder="请输入你的登录密码" v-model="user.password" />
            </div>
            <div class="content">
                <ValidationProvider rules="repasswords" v-slot="{ errors }">
                    <label>确认密码:</label>
                    <input type="text" placeholder="请输入确认密码" v-model="user.rePassword" />
                    <span class="error-msg">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div class="controls">
                <input name="m1" type="checkbox" v-model="user.isAgree" />
                <span>同意协议并注册《尚品汇用户协议》</span>
                <span class="error-msg">错误提示信息</span>
            </div>
            <div class="btn">
                <button @click="ttest">完成注册</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

extend('required', {
    ...required,
    message: '手机号必须要填',
})

extend('length', {
    validate(value) {
        return value.length === 11
    },
    message: '长度必须要11位数字',
})

extend('phone', {
    validate(value) {
        return /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/.test(
            value,
        )
    },
    message: '手机号不符合规范',
})

extend('codes', {
    validate(value) {
        return value.length === 4
    },
    message: '验证码必须4位',
})

extend('repasswords', {
    validate(value) {
        return value === this.user.rePassword
    },
    message: '两次输入不一致',
})
export default {
    name: 'Register',
    data() {
        return {
            user: {
                phone: '',
                password: '',
                rePassword: '',
                code: '',
                isAgree: false,
            },
        }
    },
    methods: {
        register() {
            const { phone, password, rePassword, code, isAgree } = this
            if (!isAgree) {
                this.alert('请同意用户协议')
                return
            }
            if (!password !== rePassword) {
                alert('两次不一致')
                return
            }
            console.log(phone, code)
        },
        refresh(e) {
            e.target.src = 'http://182.92.128.115/api/user/passport/code'
        },
        ttest() {
            console.log(this.user.password, this.user.rePassword)
        },
    },
    components: {
        ValidationProvider,
    },
}
</script>

<style lang="less" scoped>
.register-container {
    .register {
        width: 1200px;
        height: 445px;
        border: 1px solid rgb(223, 223, 223);
        margin: 0 auto;

        h3 {
            background: #ececec;
            margin: 0;
            padding: 6px 15px;
            color: #333;
            border-bottom: 1px solid #dfdfdf;
            font-size: 20.04px;
            line-height: 30.06px;

            span {
                font-size: 14px;
                float: right;

                a {
                    color: #e1251b;
                }
            }
        }

        div:nth-of-type(1) {
            margin-top: 40px;
        }

        .content {
            padding-left: 390px;
            margin-bottom: 18px;
            position: relative;

            label {
                font-size: 14px;
                width: 96px;
                text-align: right;
                display: inline-block;
            }

            input {
                width: 270px;
                height: 38px;
                padding-left: 8px;
                box-sizing: border-box;
                margin-left: 5px;
                outline: none;
                border: 1px solid #999;
            }

            img {
                vertical-align: sub;
            }

            .error-msg {
                position: absolute;
                top: 100%;
                left: 495px;
                color: red;
            }
        }

        .controls {
            text-align: center;
            position: relative;

            input {
                vertical-align: middle;
            }

            .error-msg {
                position: absolute;
                top: 100%;
                left: 495px;
                color: red;
            }
        }

        .btn {
            text-align: center;
            line-height: 36px;
            margin: 17px 0 0 55px;

            button {
                outline: none;
                width: 270px;
                height: 36px;
                background: #e1251b;
                color: #fff !important;
                display: inline-block;
                font-size: 16px;
            }
        }
    }
}
</style>