<template>
<html>
  <div class="home">
    <admin-header/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <myEditor v-model="value" placeholder="我是placeholder"></myEditor>
    <br />
    <button @click="getValue">获取文本内容</button>
    <br />
    <div v-html="value" class="html"></div>
    <!-- <button @click="">展示数据</button> -->
  </div>
</html>
</template>

<script>
// @ is an alias to /src
import { reactive, toRefs, onMounted } from 'vue'
import HelloWorld from '../components/HelloWorld'
import myEditor from '../components/myEditor'
import AdminHeader from '../components/AdminHeader.vue'

export default {
  name: 'Editor',
  components: {
    HelloWorld,
    myEditor,
    AdminHeader
  },
  setup (props) {
    const state = reactive({
      value: ''
    })

    onMounted(() => {
      setTimeout(() => {
        state.value = '请输入博客内容'
      }, 500)
    })

    function getValue () {
      console.log(state.value)
    }
    return {
      ...toRefs(state),
      getValue
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
    font-size: 16px;
}
</style>
