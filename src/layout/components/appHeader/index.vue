<template>
  <el-icon
    @click="$store.commit('setIsCollapse', false)"
    v-show="$store.state.isCollapse"
    style="cursor: pointer;"
  >
    <Expand />
  </el-icon>
  <el-icon
    @click="$store.commit('setIsCollapse', true)"
    v-show="!$store.state.isCollapse"
    style="cursor: pointer;"
  >
    <Fold />
  </el-icon>
  <h1 class="headername">
    安全管理平台
  </h1>
</template>
<script lang="ts" setup>
import { Fold, Expand } from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
.headername{
  font-size:15px;
}
</style>
