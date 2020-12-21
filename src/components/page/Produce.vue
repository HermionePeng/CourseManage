<template>
  <div class="produce">
    <!-- 表头面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/teacher/topic' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>流程控制</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 流程控制条 -->
    <div class="bar">
      <el-steps :active="active" finish-status="success" simple>
        <el-step title="编辑课题"></el-step>
        <el-step title="发布课题"></el-step>
        <el-step title="下载报告"></el-step>
      </el-steps>
      <img id="img" src="https://element.eleme.cn/static/theme-index-blue.c38b733.png" width="500px"/>
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div> 
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>

<style scoped>
  .bar{
      padding: 2%;
  }
  #img{
      margin-top: 2%;
      margin-bottom: 2%;
  }
</style>