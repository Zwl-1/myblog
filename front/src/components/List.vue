<template>
    <div class="content-wrapper">
      <div class="item" v-for="(item, index) of list" :key="index">
      <!-- <div class="item"> -->
        <h2>
          <router-link :to="'/detail/' + item._id">{{ item.title }}</router-link>
        </h2>
        <div class="item-overview">
          <router-link :to="'/detail/' + item._id" class="item__h">
            {{ conversionContent(item.content) }}
          </router-link>
        </div>
        <div class="describe">
          <div>
            <i class="iconfont">&#xe60d;</i>
            <span class="describe__date">2021-5-20</span>
          </div>
          <div>
            <i class="iconfont">&#xe6ba;</i>
            <router-link :to="/tags/">情感</router-link>
          </div>
          <div>
            <i class="iconfont">&#xe608;</i>
            <span>like number</span>
          </div>
          <div>
            <i class="iconfont">&#xe611;</i>
            <span>views number</span>
          </div>
        </div>
        <div class="tran-line"></div>
      </div>
      <!-- <v-md-editor v-model="list" height="400px"></v-md-editor> -->
      <!-- <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div> -->
    </div>
</template>

<script>
export default {
  name: 'List',
  props: ['list'],
  setup () {
    const conversionContent = (content) => {
      return content.replace(/<\/?[^>]*>+/g, '').replace(/&nbsp;/ig, '').substr(0, 78) + '...'
    }
    return { conversionContent }
  }
}
</script>

<style lang="scss" scoped>
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
.item-overview {
  margin: 10px 0;
  .item__h {
      overflow: hidden;
  }
  a {
    display: block;
    line-height: 35px;
    color: #15171a;
    font-size: 18px;
    font-family: cursive;
    text-decoration: none;
  }
}
</style>
