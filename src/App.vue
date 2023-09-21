<template>
  <div class="nav">
    <el-scrollbar>
      <el-menu router>
        <MyMenu :routes="routes"></MyMenu>
      </el-menu>
    </el-scrollbar>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
</template>


<script setup>
// 引入路由配置(建议仓库中)
// import routes from './router/routesPlus'
import routes from './router/routes'

function changeClassName() {

}
</script>

<style >
.nav {
  float: left;
  width: 220px;
  height: 100vh;
  padding: 10px;
  margin: 0;
  background-color: #e88;
  box-sizing: border-box;
}

.content {
  float: left;
  height: 100vh;
  width: calc(100% - 240px);
  padding: 10px;
  background-color: rgb(61, 119, 119);
  box-sizing: border-box;
}

.content img {
  width: 100%;
  background-size: cover;
}

/* >>>.el-scrollbar__thumb {
  display: none;
} */

button {
  margin: 5px;
  /* 清除默认边框 */
  border: 2px rgb(63, 8, 95) solid;
  outline: none;
  /*清除默认背景 */
  background-color: rgba(67, 25, 95, 0.8);
  color: white;
  padding: 4px 10px;
  border-radius: 10% 20%;
  box-shadow: 0 0 10px black;
  transition: all 1s ease;
}

button:hover {
  background-color: rgba(67, 25, 95, 1);
  color: rgb(255, 187, 0);
  box-shadow: 0 0 10px rgb(255, 239, 95);
}
</style>
