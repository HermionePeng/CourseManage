<template>
  <div class="score">
   <!-- 表头面包屑 -->
   <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/student/subject' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>小组成绩</el-breadcrumb-item>
   </el-breadcrumb>
   <!-- 成绩卡片 -->
   <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>2020-2021第一学期 综合课程设计成绩</span>
    </div>
    <div class="text item">
      <div class="word">小组编号：541325</div>
      <div class="word">小组成员：张三 李思 王武 苏雨</div>
      <div class="word">课题名称：综合课题选题系统</div>
      <div class="word">课题得分：98</div>
    </div>
  </el-card>
  </div>
</template>

<script>
export default {
  name: 'Score'
}
</script>
<style scoped>
 .box-card{
   margin-top: 3%;
   width: 33%;
 }
 .word{
   padding-bottom: 5px;
   font-size: 14px;
 }
</style>