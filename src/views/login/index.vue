<template>
  <h1>登录</h1>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { adminloginApi } from '../../api/user'

onMounted(() => {
  adminloginApi({ password: '123456', username: 'admin' }).then(res => {
    console.log(res.data)
  })
})
</script>

<style lang="scss" scoped>

</style>
