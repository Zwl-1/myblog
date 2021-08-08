<template>
    <div>
        <admin-header/>
        <el-container>
          <el-aside width="288px">
            <el-menu
              background-color="#18202e"
              :uniqueOpened="true"
              router
              default-active="/userAdmin"
              class="el-menu-vertical-demo"
              text-color="#fff">
              <el-menu-item index="/userAdmin">
                <i class="el-icon-menu"></i>
                <template #title>用户管理</template>
              </el-menu-item>
              <el-menu-item index="/articleAdmin">
                <i class="el-icon-menu"></i>
                <template #title>文章管理</template>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username" autocomplete="off" label-width="300px"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off" label-width="300px"></el-input>
              </el-form-item>
              <el-form-item label="角色">
                <el-select v-model="ruleForm.role" placeholder="角色">
                  <el-option label="普通用户" value="normal"></el-option>
                  <el-option label="超级管理员" value="admin"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="状态">
                <el-select v-model="ruleForm.state" placeholder="状态">
                  <el-option label="启用" value="0"></el-option>
                  <el-option label="禁用" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              </el-form-item>
            </el-form>
          </el-main>
        </el-container>
        <!-- <ErrMsg :msg="toastMessage" v-if="show"/> -->
    </div>

    <!-- /头部 -->
    <!-- 主体内容 -->
    <!-- /主体内容 -->
    <!-- 删除确认弹出框 -->
</template>

<script>
// import { ref } from 'vue'
import { useRouter } from 'vue-router'
// import ErrMsg, { useToastEffect } from '../../components/ErrMsg'
import AdminHeader from '../../components/AdminHeader.vue'
import { post } from '../../utils/request'
export default {
  components: { AdminHeader },
  data () {
    const router = useRouter()
    const rg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'))
      } else if (!rg.test(value)) {
        callback(new Error('邮箱格式不正确!'))
      } else {
        callback()
      }
    }
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('用户名'))
      } else {
        callback()
      }
    }
    // const { show, toastMessage, showToast } = useToastEffect()
    return {
      ruleForm: {
        username: '',
        password: '',
        email: '',
        role: '',
        state: ''
      },
      rules: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        email: [
          { validator: validateEmail, trigger: 'blur' }
        ],
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ]
      },
      router
    }
  },
  methods: {
    submitForm (formName) {
      console.log(1233)
      this.$refs[formName].validate((valid) => {
        const handleEdit = async (valid) => {
          if (valid) {
            console.log(1234)
            try {
              const result = await post('/userEdit', this.ruleForm)
              // console.log(result)
              if (result.msg) {
                alert(result.msg)
              }
              if (result.successful) {
                this.$router.push('/userAdmin')
              }
            } catch (e) {
              console.log(e)
              alert(e)
            }
          } else {
            return false
          }
        }
        handleEdit(valid)
      })
    }
    // submitForm (formName) {
    //   console.log(123)
    //   this.$refs[formName].validate((valid) => {
    //     console.log(1231243)
    //     if (valid) {
    //       alert('submit!')
    //     } else {
    //       console.log('error submit!!')
    //       return false
    //     }
    //   })
    // }
  },
  setup () {
  }
}
</script>

<style lang="scss" scope>
// .header {
//     display: flex;
//     position: fixed;
//     height: 1rem;
//     width: 100%;
//     left: 0;
//     top: 0;
//     box-shadow: 0 1px 2px 0 rgb(40 42 49 / 16%);
//     z-index: 100;
//     &__left {
//         float: left;
//         height: 100%;
//         width: 3rem;
//         text-align: center;
//         color: #FFF;
//         font-size: .18rem;
//         font-weight: bold;
//         line-height: .72rem;
//         background-color: #1c91e7;
//     }
//     &__info {
//         flex: 1;
//         font-size: .14rem;
//         width: 1.6rem;
//         height: 100%;
//         margin-right: .5rem;

//     }
//     &__username {
//         float: right;
//     }
// }

.header .info {
    flex: 1;
    margin-right: 88px;
    height: 72px;
    &__dro {
        float: right;
        line-height: 72px;
    }
}
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .decor {
    text-decoration: none;
  }
  .el-container {
    position: fixed;
    left: 0;
    right: 0;
    top: 72px;
    bottom: 0;
    z-index: 1;
  }
  .el-aside {
    background-color: #18202e;
    color: #fff;
    text-align: center;
    line-height: 200px;
  }

.el-main {
    background-color: #fafafb;;
    color: #333;
    text-align: center;
    // line-height: 160px;
  }
.el-menu {
  width: 100%;
  margin-top: 55px;
  background-color: #18202e;
}
.el-form {
    margin: 0 10px;
}
</style>
