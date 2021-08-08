<template>
    <div class="bgcimg">
      <div class="wrapper">
        <a href="#/home" class="wrapper__back">
            <p>返回首页</p>
        </a>
        <div class="wrapper__head">登录</div>
        <div class="wrapper__input">
            <input
               v-model="data.email"
               class="wrapper__input__content"
               placeholder="请输入邮箱"
               />
        </div>
        <div class="wrapper__input">
            <input
               v-model="data.password"
               class="wrapper__input__content"
               placeholder="请输入密码" type="password"
            />
        </div>
        <div class="wrapper__forget">
            <router-link to="/forgetpassword">忘记密码?</router-link>
        </div>
        <div class="wrapper__login-button"  @click="handleLog()">登录</div>
        <div class="wrapper__login-register" >
            <router-link to="/register">立即注册</router-link>
        </div>
      </div>
    </div>
    <ErrMsg :msg="toastMessage" v-if="show"/>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../utils/request'
import ErrMsg, { useToastEffect } from '../components/ErrMsg'
export default {
  name: 'Login',
  components: { ErrMsg },
  setup () {
    const router = useRouter()
    const { show, toastMessage, showToast } = useToastEffect()
    const data = reactive({ email: '', password: '', showToast: false, ToastErr: '' })
    // var { email, password, ToastErr } = toRefs(data)
    const handleLog = async () => {
      if (data.email.trim().length === 0 || data.password.trim().length === 0) {
        alert('请输入密码或邮箱')
        return false
      }
      try {
        const result = await post('/login', {
          email: data.email,
          password: data.password
        })
        // console.log(result)
        if (result.role === 'admin') {
          localStorage.isLogin = true
          router.push({ name: 'Home' })
          console.log(result)
        }
        if (result.msg) {
          showToast(result.msg)
        }
        // if (result.msg) q(result.msg)
      } catch (e) {
        showToast(e)
      }
    }
    return { handleLog, data, show, toastMessage, showToast }
  }
}
</script>

<style lang="scss">
    .bgcimg {
        min-height: 100vh;
        background: url('../imgs/loginBgc.jpg') no-repeat;
        background-position: center center;
        background-size: cover;
        background-attachment: fixed;
    }
    .wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 500px;
        padding: 50px 50px 30px 50px;
        transform: translateX(-50%) translateY(-50%);
        background-color: #fff;
        border-radius: 10px;
        &__back {
            display: block;
            font-size: 20px;
            color: #777;
            text-decoration: none;
        }
        &__head {
           font-size: 60px;
           text-align: center;
           color: #333;
           margin-bottom: 40px;
        }
        &__input {
            margin: 0 40px 16px 40px;
            padding-left: 16px;
            height: 48px;
            width: 400px;
            background: #F9F9F9;
            border: 1px solid rgba(0,0,0,0.10);
            border-radius: 6px;
            border-radius: 6px;
            &__content {
                float: left;
                border: none;
                outline: none;
                width: 100%;
                height: 40px;
                // background: none;
                font-size: 16px;
                &::placeholder {
                    color: #777;
                }
            }
        }
        &__forget {
            font-size: 16px;
            text-decoration: none;
            text-align: right;
            margin-right: 40px;
        }
        &__login-button {
        margin: 32px 40px 16px 40px;
        background: #0091FF;
        box-shadow: 0 4px 8px 0 #777;
        border-radius: 4px;
        border-radius: 4px;
        text-align: center;
        font-size: 16px;
        line-height: 48px;
        color: #fff;
        cursor: pointer;
        }
        &__login-register {
            text-align: center;
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            color: #777;
        }
    }
    a {
        text-decoration: none;
        color: #777;
    }
</style>
