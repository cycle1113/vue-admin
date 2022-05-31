<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <AppMenu />
      </el-aside>
      <el-container>
        <el-header>
          <AppHeader />
        </el-header>
        <el-main>
          <!-- 子路由出口 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import AppMenu from './components/appmenutest.vue'
import AppHeader from './components/appHeader/index.vue'
</script>

<style lang="scss" scoped>
.el-header{
  background-color: #b3c0d1;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-aside{
    width: auto;
    background-color: #304156;
    color: #333;
    text-align: center;
    line-height: 60px;
}
.el-header{
    background-color: #D3DCE6;
    color: #333;
}
.el-main{
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
.el-container{
    height: 100vh;
}
</style>
