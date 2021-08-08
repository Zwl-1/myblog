<template>
    <common-header></common-header>
    <div class="article">
        <div class="container">
            <h2 v-html="data.article.title" class="article-title"></h2>
            <div class="article-info">
                <span class="author">{{ data.article.author }}</span>
                <span class="date">{{ data.article.publishDate }}</span>
            </div>
            <div v-html="data.article.content" class="html">
            </div>
            <el-divider></el-divider>
            <div class="article-comment">
                <h4>评论</h4>
                <form action="">
                    <textarea class="comment" v-model="data.commentValue" id="content"></textarea>
                    <div class="item">
                        <button @click="handlePostComment">发布</button>
                    </div>
                </form>
                <div v-for="(item, index) of data.comment" :key="index">
                    <div>
                        <span>{{ item.content }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CommonHeader from '../../components/Header.vue'
import { get, post } from '../../utils/request'
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
const getComment = async (articleId) => {
  const data = reactive({ comment: [] })
  const result = await get(`/get-comment/?id=${articleId}`)
  data.comment = result.comment
  console.log('我是data.comment', data.comment)
  const { comment } = toRefs(data)
  console.log('我是comment', comment.value)
  return comment
}

export default {
  name: 'Detail',
  components: { CommonHeader },
  setup () {
    const route = useRoute()
    const data = reactive({ article: {}, commentValue: '', comment: [] })
    const getArticle = async () => {
      try {
        const result = await get(`/detail/?id=${route.params.id}`)
        data.article = result.article
        console.log(result)
      } catch (e) {
        console.log(e)
      }
    }
    getArticle()
    getComment(route.params.id).then(res => {
      data.comment = res
    })
    console.log('函数结果', data.comment)
    const handlePostComment = () => {
      post('/submit-Comment', {
        comment: data.commentValue,
        articleId: route.params.id
      })
      getComment(route.params.id).then(res => {
        data.comment = res
      })
      data.commentValue = ''
      // console.log('content', document.getElementById('content').value)
    }
    return { data, handlePostComment }
  }
}
</script>

<style lang="scss" scoped>
.article {
  background-color: #f5f5f5;
  padding: 20px 0;
}
.container {
    max-width: 1000px;
    min-height: 1500px;
    margin: 0px auto;
    padding: 0px 10px 20px 10px;
    min-height: 30vh;
    background: #FFF;
    border-radius: 10px;
}
.article-title {
    display: block;
    text-align: center;
    padding-top: 20px;
    margin: 0 auto;
}
.article-info {
    text-align: center;
    font-size: 12px;
}
.article-comment {
    margin-top: 15px;
}
.article-comment .comment {
    width: 100%;
    height: 100px;
    display: block;
    border-radius: 15px;

}
input, textarea {
    border: 1px solid hsla(0,0%,50.2%,.67);
    outline: none;
    color: #555;
    font-family: inherit;
}
textarea {
    resize: none;
}
.item {
    overflow: hidden;
    margin: 10px 0;
}
</style>
