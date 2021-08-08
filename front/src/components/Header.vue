<template>
   <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
    text-color="#fff"
    active-text-color="#ff9b1d"
    background-color="rgb(0, 0, 0, 0)"
    > -->
        <!-- <el-menu-item index="1">首页</el-menu-item> -->
        <!-- <el-menu-item index="2"> -->
          <!-- <router-link to="/login">登录</router-link> -->
        <!-- </el-menu-item> -->
        <!-- <el-menu-item index="3"> -->
          <!-- <router-link to="/register">注册</router-link> -->
          <!-- </el-menu-item> -->
        <!-- <el-menu-item index="4"> -->
          <!-- <router-link to="/search">搜索</router-link> -->
          <!-- </el-menu-item> -->
        <!-- <el-menu-item index="5"> -->
          <!-- <router-link to="/label">标签墙</router-link> -->
        <!-- </el-menu-item> -->
   <!-- </el-menu> -->
   <div class="nav">
     <router-link to="/home"><div class="fl">首页</div></router-link>
     <router-link to="/login"><div class="fl">登录</div></router-link>
     <router-link to="/register"><div class="fl">注册</div></router-link>
     <router-link to="/search"><div class="fl">搜索</div></router-link>
     <router-link to="/label"><div class="fl">标签</div></router-link>
   </div>
</template>

<script>
export default {
  name: 'CommonHeader'
}
</script>

<style lang="scss" scoped>

.nav {
  height: 60px;
  position: fixed;
  // display: flex;
  width: 100%;
  // padding-left: 40%;
  padding: 0 auto in !important;
  // transform: translateX();
  // transform: translateY(-50%);
  border-bottom: none;
  z-index: 100;
  // text-align: center;
  vertical-align: auto;
  background-color: rgb(0, 0, 0, .3);
  // color: #fff;
}
.fl {
  float: left;
  color: #fff;
  font-size: 14px;
  height: 100%;
  line-height: 60px;
  padding: 0 15px;
}
</style>
