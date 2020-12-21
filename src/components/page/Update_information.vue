<template>
  <div class="update">
   <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
    <el-form-item label="姓名">
      <el-input v-model="sizeForm.name"></el-input>
    </el-form-item>
    <el-form-item label="学号">
      <el-input v-model="sizeForm.name"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="sizeForm.resource" size="medium">
        <el-radio border label="男"></el-radio>
        <el-radio border label="女"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="入学时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="学位性质">
      <el-checkbox-group v-model="sizeForm.type">
        <el-checkbox-button label="本科生" name="type"></el-checkbox-button>
        <el-checkbox-button label="研究生" name="type"></el-checkbox-button>
        <el-checkbox-button label="博士生" name="type"></el-checkbox-button>
      </el-checkbox-group>
    </el-form-item>
    
    <el-form-item size="large">
      <el-button type="primary" @click="onSubmit">保存修改</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
export default {
   data() {
      return {
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>
<style scoped>
  .update{
    width: 30%;
    margin: auto;
    margin-top: 3%;
  }
</style>