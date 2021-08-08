<template>
    <!-- <admin-header></admin-header> -->
    <div class="input-container">
        <input type="text" class="input-style" v-model="data.searchContent"><span class="search" @click="postSearch(1)">搜索</span>
    </div>
    <div class="gradient"></div>
    <List :list="data.list" v-if="!data.control"></List>
    <div v-if="data.control">
        <div class="blank-content">
            您搜索的内容空空如也
        </div>
    </div>
    <div class="page">
        <el-pagination
          background
          layout="prev, pager, next"
          @current-change="getList"
          :total="data.total*10"
          v-if="!data.control">
        </el-pagination>
    </div>
</template>

<script>
import List from '../../components/List.vue'
import { reactive } from 'vue'
import { get, post } from '../../utils/request'
// import AdminHeader from '../../components/AdminHeader.vue'
export default {
  components: {
    List
  },
  setup () {
    const data = reactive({ list: [], total: 0, searchContent: '', control: 0 })
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
    const postSearch = async (currentPage) => {
      const result = await post('/search', {
        findWord: data.searchContent,
        page: currentPage

      })
      data.list = result.article
      data.total = result.total
      console.log('阿萨', result.article)
      console.log('article', result)
      data.control = result.article.length === 0 ? 1 : 0
      console.log('contorl', data.control)
    }
    getList(1)
    return { data, getList, postSearch }
  }
}
</script>

<style lang="scss" scoped>
.gradient {
    height: 20px;
    background: linear-gradient(135deg, transparent 0, transparent 49.5%, #0091FF 49.5%, #0091FF 50.5%, transparent 50.5%, transparent 100%),
                    linear-gradient(45deg, transparent 0, transparent 49.5%, red 49.5%, red 50.5%, transparent 50.5%, transparent 100%);
    background-size: 18px 18px;

}
.input-container {
    text-align: center;
    margin: 20px 0;
}
.input-style {
font-size: 14px;
display: inline-block;
width: 400px;
height: 32px;
line-height: inherit;
outline: 0;
background: #f5f6f7;
color: #222226;
vertical-align: top;
text-indent: 16px;
border: 1px solid #0091FF;
-webkit-box-sizing: border-box;
box-sizing: border-box;
border-radius: 4px 0 0 4px;
}
.search {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    padding: 0 5px;
    background-color: #0091FF;
    color: #fff;
    cursor:pointer;
    border-radius: 0 4px 4px 0;
}
.page {
  text-align: center;
  // margin: 0 auto;
  height: 30px;
}
.blank-content {
    margin: 0 auto;
    width: 100%;
}
</style>
