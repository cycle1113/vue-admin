<template>
  <h1>首頁</h1>
  <el-button @click="upcompany">
    测试
  </el-button>
  <MapContainer />
</template>

<script lang="ts" setup>
import { useStore } from '../../store/index'
import { newCompany } from '../../api/user'
import MapContainer from '../../components/MapContainer.vue'
const store = useStore()
console.log(store.state.count)
const upcompany = () => {
  newCompany({ companyname: '测试1', creditcode: '1231', legalperson: '张三1', phone: '1234561' }).then(res => {
    console.log(res.data.code)
    if (res.data.code === 200) {
      console.log(res.data.message)
    }
  })
}
</script>

<style lang="scss" scoped></style>
