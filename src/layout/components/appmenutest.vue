<template>
  <!-- 菜单主结构 -->
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    router
    :collapse="$store.state.isCollapse"
  >
    <!-- 第一个菜单 -->
    <el-menu-item index="/">
      <el-icon><House /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <!-- 第二个菜单 -->
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>管理</span>
      </template>
      <el-menu-item index="business">
        企业管理
      </el-menu-item>
      <el-menu-item>
        测试
      </el-menu-item>
      <el-menu-item>
        测试
      </el-menu-item>
    </el-sub-menu>
    <!-- 第三个菜单 -->
    <el-sub-menu index="2">
      <template #title>
        <el-icon><Setting /></el-icon>
        <span>权限管理</span>
      </template>
      <el-menu-item>
        测试
      </el-menu-item>
      <el-menu-item>
        测试
      </el-menu-item>
      <el-menu-item>
        测试
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  House,
  Location,
  Setting
} from '@element-plus/icons-vue'
</script>

<style lang="scss">
.el-menu{
  border-right:none;
}
.el-menu:not(.el-menu--collapse){
  width: 200px;
}
</style>
