<template>
  <div class="table-container">
    <el-form
      :inline="true"
      class="form-inline"
    >
      <el-form-item label="审批人">
        <el-input
          placeholder="审批人"
        />
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select
          placeholder="活动区域"
        >
          <el-option
            label="区域一"
            value="shanghai"
          />
          <el-option
            label="区域二"
            value="beijing"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="query"
        >
          查询
        </el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="state.tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        label="Date"
        width="180"
      />
      <el-table-column
        prop="name"
        label="Name"
        width="180"
      />
      <el-table-column
        prop="address"
        label="Address"
      />
      <el-table-column
        prop="tag"
        label="Tag"
      />
    </el-table>
    <el-button
      type="primary"
      @click="setToken"
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const setToken = (token: string) => {
  localStorage.setItem('token', token)
}
const state = reactive({
  tableData: [
    {
      date: '2016-05-07',
      name: '白小白',
      address: '上海市普陀区金沙江路 1518 弄',
      tag: '家'
    },
    {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      tag: '家'
    },
    {
      date: '2016-05-04',
      name: '李小胖',
      address: '上海市普陀区金沙江路 1517 弄',
      tag: '公司'
    },
    {
      date: '2016-05-01',
      name: '王老五',
      address: '上海市普陀区金沙江路 1519 弄',
      tag: '家'
    },
    {
      date: '2016-07-03',
      name: '王麻子',
      address: '上海市普陀区金沙江路 1516 弄',
      tag: '公司'
    },
    {
      date: '2016-07-07',
      name: '白小白',
      address: '上海市普陀区金沙江路 1518 弄',
      tag: '家'
    },
    {
      date: '2016-07-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      tag: '家'
    },
    {
      date: '2016-07-04',
      name: '李小胖',
      address: '上海市普陀区金沙江路 1517 弄',
      tag: '公司'
    },
    {
      date: '2016-07-01',
      name: '王老五',
      address: '上海市普陀区金沙江路 1519 弄',
      tag: '家'
    }
  ],
  currentPage: 1,
  pageSize: 5,
  search: ''
})
const query = () => {
  console.log('123')
}
</script>

<style lang="scss" scoped>
// .el-main{
//   line-height: 20px;
// }
.table-container{
    .form-inline{
        margin:15px;
        text-align:left;
    }
    .table-list{
        margin:15px;
    }

}
</style>
