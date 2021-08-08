<template>
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
</template>

<script>
import Utils from '../utils/index'

export default {
  setup () {
    const handleScrolldown = () => {
      var scrollY = document.documentElement.clientHeight || document.body.clientHeight
      Utils.ScrollTop(scrollY, 100)
    }
    return { handleScrolldown }
  }
}
</script>

<style lang="scss" scoped>
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
//   -webkit-animation: kenburns-bottom-left 7s ease-out both;
//   animation: kenburns-bottom-left 7s ease-out both;
}
.content {
  position: absolute;
  max-width: 892px;
  left: 40%;
  top: 40%;
  transform: translate(-50%,-50%);
  font-size: 70px;
  color: #fff;
//   -webkit-animation: focus-in-contract-bck 4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
//   animation: focus-in-contract-bck 4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
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
/////动画效果
// @-webkit-keyframes bg-pan-bottom {
//   0% {
//     background-position: 50% 0%;
//   }
//   100% {
//     background-position: 50% 100%;
//   }
// }
// @keyframes bg-pan-bottom {
//   0% {
//     background-position: 50% 0%;
//   }
//   100% {
//     background-position: 50% 100%;
//   }
// }

//文字动画效果
// @-webkit-keyframes focus-in-contract-bck {
//   0% {
//     letter-spacing: 1em;
//     -webkit-transform: translateZ(300px);
//             transform: translateZ(300px);
//     -webkit-filter: blur(12px);
//             filter: blur(12px);
//     opacity: 0;
//   }
//   100% {
//     -webkit-transform: translateZ(12px);
//             transform: translateZ(12px);
//     -webkit-filter: blur(0);
//             filter: blur(0);
//     opacity: 1;
//   }
// }
// @keyframes focus-in-contract-bck {
//   0% {
//     letter-spacing: 1em;
//     -webkit-transform: translateZ(300px);
//             transform: translateZ(300px);
//     -webkit-filter: blur(12px);
//             filter: blur(12px);
//     opacity: 0;
//   }
//   100% {
//     -webkit-transform: translateZ(12px);
//             transform: translateZ(12px);
//     -webkit-filter: blur(0);
//             filter: blur(0);
//     opacity: 1;
//   }
// }
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
