<template>
  <div class="page">
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="getList"
      :total="total*10">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: ['getList']
}
</script>

<style lang="scss" scoped>
.page {
  text-align: center;
  // margin: 0 auto;
  height: 30px;
}
</style>
