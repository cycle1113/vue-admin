<template>
  <div id="container">
    地图
  </div>
</template>

<script lang="ts" setup>
import AMapLoader from '@amap/amap-jsapi-loader'
import { companyLocation } from '../api/user'
import { onMounted } from 'vue'
const inimap = () => {
  AMapLoader.load({
    key: '3c4fb29c493274e432d5439f8a381478', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [''] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  }).then((AMap) => {
    const map = new AMap.Map('container', { // 设置地图容器id
      viewMode: '3D', // 是否为3D地图模式
      zoom: 12, // 初始化地图级别
      center: [105.602725, 37.076636] // 初始化地图中心点位置
    })
    companyLocation().then(res => {
      if (res.data.code === 200) {
        if (res.data.data) {
          const fileldss = res.data.data
          for (const k of fileldss) {
            const companynamer = k.fields.companyname
            const latitude = k.fields.latitude
            const longitude = k.fields.longitude
            const marker = new AMap.Marker({
              position: new AMap.LngLat(latitude, longitude),
              title: companynamer
            })
            map.add(marker)
          }
        }
      }
    })
  }).catch(e => {
    console.log(e)
  })
}
onMounted(() => {
  inimap()
})

</script>

<style lang="scss" scoped>
    #container{
        padding:0px;
        margin: 0px;
        width: 100%;
        height: 800px;
    }
</style>
