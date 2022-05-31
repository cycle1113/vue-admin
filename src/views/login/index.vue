<template>
  <h1>登录</h1>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { adminloginApi, adminInfo } from '../../api/user'

onMounted(() => {
  adminloginApi({ password: '123456', username: 'admin' }).then(res => {
    if (res.data) {
      localStorage.setItem('token', res.data.tokenHead + res.data.token)
      console.log(res.data)
      adminInfo().then(res => {
        console.log(res.code)
      })
    }
  })
})
</script>

<style lang="scss" scoped>

</style>
