<template>
    <div>
        <admin-header/>
        <el-container>
          <el-aside width="288px">
            <div class="el-menu-container">
              <el-menu
                background-color="#18202e"
                :uniqueOpened="true"
                router
                default-active="/articleAdmin"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                text-color="#fff">
                <el-menu-item index="/userAdmin">
                  <i class="el-icon-menu"></i>
                  <template #title>用户管理</template>
                </el-menu-item>
                <el-menu-item index="/articleAdmin">
                  <i class="el-icon-menu"></i>
                  <template #title>文章管理</template>
                </el-menu-item>
              </el-menu>
            </div>
          </el-aside>
          <el-main>
            <div class="title">
              <h4 class="user">用户</h4>
              <span class="find-user">一共有n个用户</span>
              <!-- <el-button type="primary" plain>主要按钮</el-button> -->
              <el-button type="primary" round>发布新文章</el-button>
            </div>
            <div class="table">
                <el-table
                  :data="tableData"
                  stripe
                  style="width: 100%">
                  <el-table-column
                    prop="_id"
                    label="ID"
                    min-width="300">
                  </el-table-column>
                  <el-table-column
                    prop="title"
                    label="标题"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="date"
                    label="发布时间"
                    min-width="300">
                  </el-table-column>
                  <el-table-column
                    prop="author"
                    label="作者"
                    min-width="120">
                  </el-table-column>
                  <el-table-column
                  label="操作"
                  width="100">
                    <router-link to="/userEdit">
                      <span class="iconfont">&#xe657;</span>
                    </router-link>
                      <span class="iconfont delete-icon">&#xe67e;</span>
                  </el-table-column>
                </el-table>
            </div>
            <div class="page">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="100">
              </el-pagination>
            </div>
          </el-main>
        </el-container>
    </div>

    <!-- /头部 -->
    <!-- 主体内容 -->
    <!-- /主体内容 -->
    <!-- 删除确认弹出框 -->
</template>

<script>
import { ref } from 'vue'
import AdminHeader from '../../components/AdminHeader.vue'
export default {
  components: { AdminHeader },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  setup () {
    const active = ref(false)
    const changeDro = () => {
      active.value = !active.value
      console.log(active)
    }
    return { active, changeDro }
  }
}
</script>

<style lang="scss" scope>
.header .info {
    flex: 1;
    margin-right: 88px;
    height: 72px;
    &__dro {
        float: right;
        line-height: 72px;
    }
}
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .decor {
    text-decoration: none;
  }
  .el-container {
    position: fixed;
    left: 0;
    right: 0;
    top: 72px;
    bottom: 0;
    z-index: 1;
  }
  .el-aside {
    background-color: #18202e;
    color: #fff;
    text-align: center;
    line-height: 200px;
  }

.el-main {
    background-color: #fafafb;;
    color: #333;
    text-align: center;
    // line-height: 160px;
  }
.el-menu-container {
  width: 100%;
  margin-top: 55px;
  background-color: #18202e;
}
.title {
  font-size: 14px;
  position: relative;
  margin-bottom: 40px;
}
.el-main .user {
  margin: 0;
  font-size: 25px;
  color: #000;
  text-align: left;
  line-height: 26px;
}
.find-user {
  display: block;
  font-size: 16px;
  margin-top: 4px;
  color: #787e8f;
  text-align: left;
  line-height: 20px;
}
.el-button {
  position: absolute;
  right: 0;
  top: 0;
  background-color: #337ab7;
}
.delete-icon {
  margin-left: 20px;
  font-size: 20px;
}
</style>
