<template>
  <div class="topic">
   <!-- 表头面包屑 -->
   <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/student/subject' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>课题选择</el-breadcrumb-item>
   </el-breadcrumb>
   <!-- 搜索框 -->
   <div id="search">
     <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="课题编号" value="1"></el-option>
        <el-option label="课题名称" value="2"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
   </div>
   <!-- 展示课题 -->
   <el-tabs type="border-card" id="topic">
    <el-tab-pane>
      <span slot="label">
        <i class="el-icon-edit-outline"></i>
        课题详情
      </span>
      <div id="words">
        <p>综合课题选题系统</p>
        <p>本课题包括如下任务：本项目需开发一个基于web的应用系统，对本科生的综合设计课程进行管理。系统包括用户管理、题目发布、题目选择、过程控制、文档管理、评分管理等基本功能模块，此外，还可包括评分表打印/导出、学生反馈、系统备份/恢复管理等辅助功能。整个系统要求界面美观友好，后台数据库存储方式可自行选择，服务架构应具有扩充性。系统开发过程需符合软件工程流程规范，团队成员分工应具体明确，除实现所有代码外，还需要有完善的测试环节。</p>
      </div>
      <img src="https://element.eleme.cn/static/theme-index-blue.c38b733.png" width="300px"/>
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label">
        <i class="el-icon-data-board"></i>
        开设方向
      </span>
      互联网安全
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label">
        <i class="el-icon-paperclip"></i>
        任务书下载
      </span>
      <el-button type="primary">点击下载</el-button>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Topic_select'
}
</script>
<style scoped>
  #search{
    margin-top: 30px;
    margin-bottom: 10px;
    margin-left: 10px;
    width: 42%;
  }
  #topic{
    width: 90%;
    margin-left: 10px;
    margin-top: 2%;
  }
  #words{
    color: rgb(121, 121, 121);
  }
</style>