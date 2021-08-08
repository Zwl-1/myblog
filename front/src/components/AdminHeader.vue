<template>
    <div class="header">
      <div class="logo fl">
        <div class="logo fl">
          阿良 <i>ZHAO</i>
        </div>
      </div>
    <!-- /网站标志 -->
    <!-- 用户信息 -->
      <div class="info">
            <el-dropdown trigger="click" class="info__dro">
              <span class="el-dropdown-link">
                admin<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <template #dropdown>
              <el-dropdown-menu>
                <router-link to="/userEdit" class="decor">
                  <el-dropdown-item>个人资料</el-dropdown-item>
                </router-link>
                <router-link to="/home" class="decor">
                  <el-dropdown-item>退出登录</el-dropdown-item>
                </router-link>
              </el-dropdown-menu>
              </template>
            </el-dropdown>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AdminHeader'
}
</script>

<style lang="scss" scoped>
.fr {
    float: right;
}
.header {
    display: flex;
    height: 72px;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    box-shadow: 0 1px 2px 0 rgba(40,42,49,.16);
    z-index: 1000;
}
.header .logo {
    height: 72px;
    width: 288px;
    line-height: 72px;
    text-align: center;
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
    background-image: linear-gradient(100deg,#1c5de7,#1c91e7);
}
.header .logo i {
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
}
.header .info {
    flex: 1;
    margin-right: 88px;
    height: 72px;
}
.header  .info__dro {
  float: right;
  line-height: 72px;
  height: 72px;
}
.header .info .profile {
    width: 160px;
    height: 72px;
    cursor: pointer;
    transition: all .2s;
    margin-right: 50px;
}

.header .info .profile .btn {
    width: 100%;
    height: 72px;
    line-height: 72px;
    text-align: right;
    padding-right: 26px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #333333;
    font-size: 15px;
    text-decoration: none;
  }
::v-deep .info__dro {
        float: right;
        line-height: 72px;
    }
</style>
