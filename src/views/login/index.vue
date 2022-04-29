<template>
  <h1>登录</h1>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { gettoken } from '../../api/user'

onMounted(() => {
  gettoken().then(res => {
    console.log(res)
  })
})
</script>

<style lang="scss" scoped>

</style>
