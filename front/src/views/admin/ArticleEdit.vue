<template>
  <admin-header/>
  <div class="m-container">
    <div class="m-content">
      <el-form ref="editForm" status-icon :model="editForm" :rules="rules" label-width="80px">
        <el-form-item label="标题" prop="title">
          <el-input v-model="editForm.title"></el-input>
        </el-form-item>
        <el-form-item label="标签" prop="label">
          <el-input v-model="editForm.label"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
            <!-- <mavon-editor/> -->
          <myEditor v-model="editForm.content" placeholder="请输入博客内容"></myEditor>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getContent">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import AdminHeader from '../../components/AdminHeader.vue'
import myEditor from '../../components/myEditor'
import { post } from '../../utils/request'
// import { reactive, toRefs } from 'vue'

export default {
  name: 'ArticleEdit',
  components: {
    AdminHeader,
    myEditor
  },
  // setup (props) {
  //   const state = reactive({
  //     content: ''
  //   })
  //   // onMounted(() => {
  //   //   setTimeout(() => {
  //   //     state.value = '请输入博客内容'
  //   //   }, 500)
  //   // })
  //   return {
  //     ...toRefs(state)
  //   }
  // },
  data () {
    return {
      editForm: {
        title: '',
        content: '',
        date: '',
        author: '',
        label: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
        ],
        label: [
          { required: true, message: '请输入标签', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async getContent () {
      this.editForm.date = new Date()
      // console.log(this.editForm.content, this.editForm.date)
      try {
        const result = await post('/article-add', this.editForm)
        // console.log(result)
        if (result) {
          console.log(result)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
//   methods: {
//     submitForm () {
//       const _this = this
//       this.$refs.editForm.validate((valid) => {
//         if (valid) {
//           this.$axios.post('/blog/edit', this.editForm, {
//             headers: {
//               'Authorization': localStorage.getItem('token')
//             }
//           }).then((res) => {
//             _this.$alert('操作成功', '提示', {
//               confirmButtonText: '确定',
//               callback: action => {
//                 _this.$router.push('/blogs')
//               }
//             })
//           })
//         } else {
//           console.log('error submit!!')
//           return false
//         }
//       })
//     }
//   }
}
</script>

<style lang="scss" scoped>
.m-container {
  margin-top: 90px;
}
.header .info {
    flex: 1;
    margin-right: 88px;
    height: 72px;
    &__dro {
        float: right;
        line-height: 72px;
    }
}
.info__dro {
  float: left;
  line-height: 72px;
}
</style>
