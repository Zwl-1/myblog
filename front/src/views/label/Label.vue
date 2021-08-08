<template>
    <common-header></common-header>
    <home-bgc></home-bgc>
    <div class="hea">标签墙</div>
    <div class="conton-wrapper">
        <div>
            <router-link v-for="(item, index) of data.list" :key="index" :to="'/tages/'+item.label">
                <span style="vertical-align: inherit;">{{ item.label }}</span>
            </router-link>
        </div>

    </div>
    <div class="label">快乐</div>
</template>

<script>
import CommonHeader from '../../components/Header.vue'
import HomeBgc from '../../components/HomeBgc.vue'
import { reactive } from 'vue'
import { get } from '../../utils/request'

export default {
  components: {
    CommonHeader,
    HomeBgc
  },
  setup () {
    const data = reactive({ list: [] })
    const getList = async () => {
      try {
        const result = await get('/label')
        data.list = result.label
        console.log(data.list)
        // console.log(data.list[0].content.replace                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        )
      } catch (e) {
        console.log(e)
      }
    }
    getList()
    return { getList, data }
  }
}
</script>

<style lang="scss" scoped>
// .conton-wrapper {
//   max-width: 892px;
//   margin: 0 auto;
//   padding: 0 10px;
//   min-height: 30vh;
// }
.label {
    height: 66px;
}
.hea {
    margin: 10px auto;
    width: 70px;
    font-size: 23px;

}
.conton-wrapper {
  max-width: 892px;
  margin: 0 auto;
  padding: 0 10px;
  min-height: 20vh;
  background-color: hsla(0, 0%, 100%, 0.9);
  border-radius: 5px;
  color: #738a94;
  margin: 40px auto;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
  div {
    overflow: hidden;
    padding: 35px 0px;
    a {
      line-height: 20px;
      margin: 20px 35px 0;
      white-space: nowrap;
      display: block;
      color: #738a94;
      word-break: break-all;
      float: left;
      font-size: 16px;
      text-decoration: none;
    }
  }
}
</style>
