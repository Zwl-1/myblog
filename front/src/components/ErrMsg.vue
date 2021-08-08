<template>
    <div class="totast">{{msg}}</div>
  <!-- <el-alert
    title="错误提示的文案"
    type="error"
    center
    show-icon>
    {{msg}}
  </el-alert> -->
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'ErrMsg',
  props: ['msg']
}
export const useToastEffect = () => {
  const toastData = reactive({
    show: false,
    toastMessage: ''
  })

  const showToast = (message) => {
    toastData.show = true
    toastData.toastMessage = message
    setTimeout(() => {
      toastData.show = false
      toastData.toastMessage = ''
    }, 2000)
  }
  const { show, toastMessage } = toRefs(toastData)
  return { showToast, show, toastMessage }
}

</script>

<style lang="scss" scope>
  .totast{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    background: rgba(200, 2, 2, 0.5);
    border-radius: 5px;
    color: #fff;
    font-size: 12px;
  }
</style>
