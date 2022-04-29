<template>
  <h1>首頁</h1>
</template>

<script lang="ts" setup>
import { useStore } from '../../store/index'
const store = useStore()
console.log(store.state.count)
</script>

<style lang="scss" scoped></style>
