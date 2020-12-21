<template>
  <div class="manage">
   <!-- 表头面包屑 -->
   <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/student/subject' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>组队管理</el-breadcrumb-item>
   </el-breadcrumb>
   <!-- 成员选择 -->
   <el-transfer
      id="select"
      style="text-align: left; display: inline-block"
      v-model="value"
      filterable
      :titles="['全部', '我的组队']"
      :button-texts="['取消邀请','确认邀请']"
      @change="handleChange"
      :data="data">
      <p slot="left-footer" id="tips">Tips：请选择至多6名同学。</p>
      <el-button class="transfer-footer" :plain="true" @click="open" slot="right-footer" size="small">确认组队</el-button>
    </el-transfer>
  </div>
</template>

<script>
export default {
  name: 'Manage',
  data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 10; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1],
        value4: [1],
        renderFunc(h, option) {
          return <span>{ option.key } - { option.label }</span>;
        }
      };
    },

    methods: {
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      },
      open() {
        this.$message({
          message: '组队成功！',
          type: 'success'
        });
      }
    }
}
</script>
<style scoped>
  #select{
    margin-top: 2%;
    margin-left: 2%;
  }
  .transfer-footer {
    margin-left: 65px;
    padding: 6px 5px;
  }
  #tips{
    font-size: 12px;
    margin-left: 20px;
    color: #409EFF;
  }
</style>