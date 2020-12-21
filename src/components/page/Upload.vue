<template>
  <div class="upload">
   <!-- 表头面包屑 -->
   <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/student/subject' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>报告上传</el-breadcrumb-item>
   </el-breadcrumb>
   <!-- 上传部分 -->
   <el-upload
     class="upload-demo"
     drag
     :file-list="fileList"
     action="https://jsonplaceholder.typicode.com/posts/"
     multiple>
     <i class="el-icon-upload"></i>
     <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
   </el-upload>
   <!-- 确认上传按钮 -->
   <el-button id="button" type="primary" :plain="true" @click="open" size="medium">提交</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
        this.$message({
          message: '上传成功！',
          type: 'success'
        });
      }
  }
}
</script>
<style scoped>
  .upload-demo{
    margin-top: 2%;
    margin-left: 30%;
  }
  #button{
    margin-left: 42%;
    margin-top: 2%;
  }
</style>