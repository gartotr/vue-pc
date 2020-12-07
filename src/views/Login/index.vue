<template>
    <div class="login_outer">
        <div class="login_inner">
            <div class="login_images"></div>
            <div class="login_form">
                <div class="login_tab">
                    <p>账户登录</p>
                </div>

                <div class="login_input">
                    <ValidationProvider rules="required" v-slot="{ errors }">
                        <input
                            type="text"
                            id="login_username"
                            placeholder="手机号"
                            v-model="user_phone"
                        />
                        <span>{{ errors[0] }}</span>
                        <input
                            type="password"
                            id="login_userpass"
                            placeholder="密码"
                            v-model="user_password"
                            @keyup.enter="login"
                        />
                    </ValidationProvider>

                    <div>
                        <label>
                            <input type="checkbox" v-model="isAutoLogin" />
                            自动登录
                        </label>
                        <p href="#">忘记密码</p>
                    </div>
                    <button :plain="true" @click="submit">登&nbsp;录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import { ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
// import { reqLogin } from '@api/user'

extend('required', required)

export default {
    name: 'Login',
    data() {
        return {
            user_phone: '',
            user_password: '',
            isLogining: false,
            isAutoLogin: true,
        }
    },
    created() {
        if (this.token) {
            this.$router.replace('/')
        }
    },
    computed: {
        ...mapState({
            token: (state) => state.user.token,
            name: (state) => state.user.name,
        }),
    },
    methods: {
        async submit() {
            const { user_phone: phone, user_password: password } = this
            if (!phone && !password) {
                this.$message.error('请输入用户名密码')
                return
            }
            try {
                if (this.isLogining) return
                this.isLogining = true
                this.$store.dispatch('login', { phone, password })

                if (this.isAutoLogin) {
                    localStorage.setItem('name', this.name)
                    localStorage.setItem('token', this.token)
                }

                this.$router.replace('/')
            } catch {
                this.isLogining = false
                this.$message.error('输入错误请重新输入')
            }
        },

        /* login() {
            const { user_phone: phone, user_password: password } = this
            if (!phone && !password) {
                this.$message.error('请输入用户名密码')
                return
            }   
            reqLogin(phone, password)
                .then(() => {
                    this.$router.push('/')
                })
                .catch(() => {
                    this.$message.error('输入错误请重新输入')
                })
        }, */
    },
    components: {
        ValidationProvider,
    },
}
</script>

<style lang="less">
.login_outer {
    width: 100%;
    background-color: #e93854;
}
.login_inner {
    width: 990px;
    height: 460px;
    margin: 0 auto;
    background-color: #ccc;
    background: url('./images/5aa68632Nd7790d0c.png');
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
}

.login_form {
    width: 340px;
    height: 380px;
    background-color: #ffffff;
    position: absolute;
    top: 20px;
    right: 0;
}
.login_tab {
    height: 54px;
    font-size: 18px;
    font-weight: bold;
    color: #e4393c;
    text-align: center;

    line-height: 54px;
    border-bottom: 1px solid #f4f4f4;
}
.login_input {
    width: 300px;
    height: 200px;
    margin: 0 auto;
    div {
        display: flex;
        justify-content: space-between;
    }
    p {
        text-align: right;
        margin-bottom: 20px;
        a {
            color: #666;
        }
    }
    #login_username,
    #login_userpass {
        margin: 20px 0;
        width: 300px;
        height: 38px;
        outline: none;
        box-sizing: border-box;
        border: 2px solid #bdbdbd;
        padding: 5px;
    }
    button {
        outline: none;
        border: none;
        background-color: #e4393c;
        width: 300px;
        height: 30px;
        font-size: 18px;
        color: #fff;
        cursor: pointer;
    }
}
</style>