<template>
    <div>
        <admin-header/>
        <el-container>
          <el-aside width="288px">
            <div class="my-menu">
              <el-menu
                background-color="#18202e"
                :uniqueOpened="true"
                router
                default-active="/userAdmin"
                class="el-menu-vertical-demo"
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
              <router-link to="userEdit">
                <el-button type="primary" round>新增用户</el-button>
              </router-link>
            </div>
            <div class="table">
                <el-table
                  :data="tableData"
                  stripe
                  style="width: 100%">
                  <el-table-column
                    prop="_id"
                    label="ID"
                    width="300">
                  </el-table-column>
                  <el-table-column
                    prop="username"
                    label="用户名"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    prop="email"
                    label="邮箱"
                    width="300">
                  </el-table-column>
                  <el-table-column
                    prop="role"
                    label="角色"
                    min-width="70">
                  </el-table-column>
                  <el-table-column
                    prop="state"
                    label="状态"
                    min-width="70">
                  </el-table-column>
                  <el-table-column
                  label="操作"
                  min-width="100">
                    <router-link to="userEdit">
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
                @current-change="getTableData"
                :total="total*10">
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
import { get } from '../../utils/request'
import { reactive, toRefs } from 'vue'
import AdminHeader from '../../components/AdminHeader.vue'
export default {
  components: { AdminHeader },
  setup () {
    const data = reactive({ tableData: [], total: 0 })
    const getTableData = async (currentPage) => {
      try {
        const result = await get(`/useradmin/?page=${currentPage}`)
        // console.log(result.users)
        data.tableData = result.users
        data.total = result.total
      } catch (e) {
        console.log(e)
      }
    }
    getTableData(1)
    console.log(data.tableData)
    const { tableData, total } = toRefs(data)
    console.log(data)
    return { getTableData, total, tableData }
  }
}
</script>

<style lang="scss" scope>
// .header {
//     display: flex;
//     position: fixed;
//     height: 1rem;
//     width: 100%;
//     left: 0;
//     top: 0;
//     box-shadow: 0 1px 2px 0 rgb(40 42 49 / 16%);
//     z-index: 100;
//     &__left {
//         float: left;
//         height: 100%;
//         width: 3rem;
//         text-align: center;
//         color: #FFF;
//         font-size: .18rem;
//         font-weight: bold;
//         line-height: .72rem;
//         background-color: #1c91e7;
//     }
//     &__info {
//         flex: 1;
//         font-size: .14rem;
//         width: 1.6rem;
//         height: 100%;
//         margin-right: .5rem;

//     }
//     &__username {
//         float: right;
//     }
// }

// .header .info {
//     flex: 1;
//     margin-right: .88rem;
//     height: 72px;
//     &__dro {
//         float: right;
//         line-height: .72rem;
//     }
// }
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
.my-menu {
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
// .el-table {
//   width: 100%;
// }
.delete-icon {
  margin-left: 20px;
  font-size: 20px;
}
</style>
