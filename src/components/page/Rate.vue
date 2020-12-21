<template>
  <div class="rate">
    <!-- 表头面包屑 -->
   <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/teacher/topic' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>小组评分</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 打分表格 -->
    <div class="rate_div">
      <el-table
        id="rate"
        :data="tableData"
        height="400"
        border
        style="width: 100%">
        <el-table-column
        prop="gid"
        label="小组编号"
        width="180">
        </el-table-column>
        <el-table-column
        prop="name"
        label="负责人姓名"
        width="180">
        </el-table-column>
        <el-table-column
        prop="rate"
        label="得分">
          <el-rate
            v-model="value"
            @change="changeValue"
            :colors="colors">
          </el-rate>
        </el-table-column>
      </el-table>
    </div>
    <!-- 提交按钮 -->
    <el-button id="button" type="primary" :plain="true" @click="open" size="medium">提交成绩</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          gid: '543612',
          name: '张三',
          rate: ''
        }, {
          gid: '543613',
          name: '李思',
          rate: ''
        }, {
          gid: '543614',
          name: '王五',
          rate: ''
        }, {
          gid: '543615',
          name: '苏雨',
          rate: ''
        }, {
          gid: '543616',
          name: '赵四',
          rate: ''
        }, {
          gid: '543617',
          name: '孙丽',
          rate: ''
        }, {
          gid: '543618',
          name: '刘文',
          rate: ''
        }, {
          gid: '543616',
          name: '赵四',
          rate: ''
        }, {
          gid: '543617',
          name: '孙丽',
          rate: ''
        }, {
          gid: '543618',
          name: '刘文',
          rate: ''
        }],
        value: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'] 
      }
    },
    methods: {
      open() {
        this.$message({
          message: '提交成功！',
          type: 'success'
        });
      }
    }
  }
</script>

<style scoped>
  .rate_div{
      width: 60%;
  }
  #rate{
      margin-top: 2%;
      margin-left: 2%;
  }
  #button{
    margin-left: 25%;
    margin-top: 2%;
  }
</style>