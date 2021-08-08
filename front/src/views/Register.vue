<template>
    <div class="bgcimg">
      <div class="wrapper">
        <a href="#/home" class="wrapper__back">
            <p>返回首页</p>
        </a>
        <div class="wrapper__head">注册</div>
        <div class="wrapper__input">
            <input
               v-model="data.username"
               class="wrapper__input__content"
               placeholder="请输入用户名"
               />
        </div>
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
        <div class="wrapper__input">
            <input
            v-model="data.repassword"
               class="wrapper__input__content"
               placeholder="请再次密码" type="password"
            />
        </div>
        <div class="wrapper__login-button" @click="handleReg()" >注册</div>
      </div>
    </div>
    <ErrMsg :msg="toastMessage" v-if="show"/>
</template>

<script>
import { reactive } from 'vue'
import { post } from '../utils/request'
import { useRouter } from 'vue-router'
import ErrMsg, { useToastEffect } from '../components/ErrMsg'
export default {
  name: 'Register',
  components: { ErrMsg },
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()
    const data = reactive({
      username: '',
      email: '',
      password: '',
      repassword: ''
    })
    const router = useRouter()
    const rg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
    const handleReg = async () => {
      console.log(data)
      let mar1 = true
      let mar2 = true
      let mar3 = true
      console.log(data.username.trim().length === 0)
      if (data.username.trim().length === 0 || data.email.trim().length === 0 || data.password.trim().length === 0) {
        showToast('请完善个人信息')
        console.log(1344)
        mar1 = false
      }
      if (mar1 && !rg.test(data.email)) {
        showToast('请输入正确的邮箱格式')
        mar2 = false
      }
      // console.log(data.password != data.repassword)
      if (mar1 && mar2 && data.password !== data.repassword) {
        showToast('两次的密码不一致')
        mar3 = false
      }
      if (mar1 && mar2 && mar3) {
        try {
          const result = await post('/register', {
            username: data.username,
            email: data.email,
            password: data.password
          })
          // console.log(result)
          if (result.msg) {
            showToast(result.msg)
          }
          console.log(result.successful)
          if (result.successful) {
            router.push({ name: 'Home' })
          }
        } catch (e) {
          showToast(e)
        }
      }
    }
    return { data, handleReg, show, toastMessage, showToast }
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
        &__name {
            float: left;
            font-size: 16px;
            // padding-right: .16rem;
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
    }
    a {
        text-decoration: none;
        color: #777;
    }
</style>
