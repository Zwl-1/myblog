<template>
  <Header></Header>
  <div class="bgcbox">
    <div class="kenburns-bottom-left">
      <!-- <img  class="kenburns-bottom-left" src="../../src/imgs/venezia-bw.jpg" alt=""> -->

    </div>
    <div class="content" >
      阿良的个人博客
      <div class="content__min">Welcome your visit </div>
    </div>
    <div class="scrolldown-icon" @click="handleScrolldown">
      <i class="iconfont chang__iconfont__size">&#xe633;</i>
    </div>
    <el-backtop>

    </el-backtop>
  </div>
  <List :list='list'> </List>
  <div class="page">
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="getList"
      :total="total*10">
    </el-pagination>
  </div>
  <div>123</div>
</template>

<script>
import Utils from '../utils/index'
import Header from '../components/Header.vue'
import List from '../components/List.vue'
import { get } from '../utils/request'
import { reactive, toRefs } from 'vue'
export default {
  name: 'Home',
  components: {
    List,
    Header
  },
  setup () {
    const data = reactive({ list: [], total: 0 })
    const getList = async (currentPage) => {
      try {
        const result = await get(`home/?page=${currentPage}`)
        data.list = result.article
        data.total = result.total
        // console.log(data.list[0].content.replace                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        )
      } catch (e) {
        console.log(e)
      }
    }
    const handleScrolldown = () => {
      var scrollY = document.documentElement.clientHeight || document.body.clientHeight
      // window.console.log('顶部header', scrollY)
      Utils.ScrollTop(scrollY, 100)
    }
    getList(1)
    // console.log(data.tableData)
    const { list, total } = toRefs(data)
    // console.log(list[0].content)

    return { getList, total, list, handleScrolldown }
  },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      articleList: []
    }
  }
}
</script>

<style lang="scss" scoped>

.el-menu {
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
  // color: #fff;
}
.el-menu-item {
  a {
    text-decoration: none;
  }
}
// .nav_border {
//   text-align: center;
// }
.bgcbox {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.kenburns-bottom-left {
  position:absolute;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  min-width: 1000px;
  z-index:-10;
  zoom: 1;
  overflow: hidden;
  background: url('../../src/imgs/homebgc2.jpg') no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  -webkit-animation: kenburns-bottom-left 7s ease-out both;
  animation: kenburns-bottom-left 7s ease-out both;
}
.content {
  position: absolute;
  max-width: 892px;
  left: 40%;
  top: 40%;
  transform: translate(-50%,-50%);
  font-size: 70px;
  color: #fff;
  -webkit-animation: focus-in-contract-bck 4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: focus-in-contract-bck 4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  &__min {
  font-size: 30px;
  }
}
.scrolldown-icon {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 3s;
  animation: bounce 3s infinite;
  color: #fff;
}
.chang__iconfont__size {
  font-size: 30px;
}
i:hover {
  cursor: pointer;
  color: white;
}
.el-backtop {
  color: #fff;
  background-color: #666;
}
.tran-line {
  width: 100%;
  height: 60px;
}
.content-wrapper {
  max-width: 892px;
  margin: 0 auto;
  padding: 0 10px;
  min-height: 30vh;
}
.item {
  border-bottom: 1px solid #f0f2f7;
  padding: 20px;
  h2 {
    margin: 0;
    a {
        color: #15171a;
        font-size: 24px;
        line-height: 24px;
        font-weight: bold;
        font-family: fantasy;
        text-decoration: none;
    }
  }
}
h2 {
  font-size: 24px;
  line-height: 24px;
}
.describe {
  font-size: 13px;
  &__date {
  }
  div {
    display: inline-block;
    margin-right: 15px;
  }
}
//背景类
.kenburns-bottom-left {
  -webkit-animation: kenburns-bottom-left 5s ease-out both;
  animation: kenburns-bottom-left 5s ease-out both;
}
.page {
  text-align: center;
  // margin: 0 auto;
  height: 30px;
}
//背景动画图
@-webkit-keyframes kenburns-bottom-left {
  0% {
    -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 16% 84%;
            transform-origin: 16% 84%;
  }
  100% {
    -webkit-transform: scale(1.25) translate(-20px, 15px);
            transform: scale(1.25) translate(-20px, 15px);
    -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
  }
}
@keyframes kenburns-bottom-left {
  0% {
    -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 16% 84%;
            transform-origin: 16% 84%;
  }
  100% {
    -webkit-transform: scale(1.25) translate(-20px, 15px);
            transform: scale(1.25) translate(-20px, 15px);
    -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
  }
}

//////

@-webkit-keyframes bg-pan-bottom {
  0% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 50% 100%;
  }
}
@keyframes bg-pan-bottom {
  0% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 50% 100%;
  }
}

//文字动画效果
@-webkit-keyframes focus-in-contract-bck {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(300px);
            transform: translateZ(300px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(12px);
            transform: translateZ(12px);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
@keyframes focus-in-contract-bck {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(300px);
            transform: translateZ(300px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(12px);
            transform: translateZ(12px);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
//向下的箭头
@keyframes bounce {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(0, 5px);
  }
  50% {
    transform: translate(0, 10px);
  }
  75% {
    transform: translate(0, 5px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
