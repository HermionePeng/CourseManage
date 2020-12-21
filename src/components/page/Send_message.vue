<template>
  <div class="send">
   <!-- 表头面包屑 -->
   <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/student/subject' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>信息反馈</el-breadcrumb-item>
   </el-breadcrumb>
   <!-- 输入文本域 -->
   <div id="input">
     <el-input
      type="textarea"
      :rows="6"
      placeholder="请输入反馈内容"
      v-model="textarea">
    </el-input>
   </div>
   <!-- 确认反馈按钮 -->
   <el-button id="button" type="primary" :plain="true" @click="open" size="medium">上传反馈</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  },
  methods: {
    open() {
        this.$message({
          message: '反馈成功！',
          type: 'success'
        });
    }
  }
}
</script>
<style scoped>
  #input{
    margin-top: 2%;
    width: 50%;
  }
  #button{
    margin-left: 20%;
    margin-top: 2%;
  }
</style>