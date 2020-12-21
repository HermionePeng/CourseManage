<template>
  <div class="subject">
   <!-- 表头面包屑 -->
   <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/teacher/topic' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>课题列表</el-breadcrumb-item>
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
   <!-- 表单展示区域 -->
    <el-table
      ref="filterTable"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="tid"
        label="课题编号"
        sortable
        width="150"
      >
      </el-table-column>
      <el-table-column
        prop="topic"
        label="课题名称"
        width="230"
      >
      </el-table-column>
      <el-table-column
        prop="description"
        label="课题描述"
        width="450"
      >
      </el-table-column>
      <el-table-column
        prop="remain_group_num"
        label="剩余名额"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="message"
        label="详情"
        width="180">
        <el-button type="text" @click="open">详情</el-button>
      </el-table-column>
    </el-table>
    <!-- 底部分页 -->
    <div id="page_div">
      <el-pagination
        id="page"
        background
        layout="prev, pager, next"
        :total="100">
      </el-pagination>
      </div>
  </div>
</template>

<script>
export default {
   data() {
      return {
        tableData: [{
          tid: '5413245',
          topic: '基于Android的流量监控',
          description: '一个用安卓开发的简单的APP，可以实现流量的查询',
          remain_group_num: '2',
          message: ''
        }, {
          tid: '5413246',
          topic: '基于Android的流量监控',
          description: '一个用安卓开发的简单的APP，可以实现流量的查询',
          remain_group_num: '0',
          message: ''
        }, {
          tid: '5413247',
          topic: '基于Android的流量监控',
          description: '一个用安卓开发的简单的APP，可以实现流量的查询',
          remain_group_num: '9',
          message: ''
        }, {
          tid: '5413248',
          topic: '基于Android的流量监控',
          description: '一个用安卓开发的简单的APP，可以实现流量的查询',
          remain_group_num: '5',
          message: ''
        }],
        input: ''
      }
    },
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      open() {
        this.$alert('这里是课程的详细介绍。本课题包括如下任务：本项目需开发一个基于web的应用系统，对本科生的综合设计课程进行管理。系统包括用户管理、题目发布、题目选择、过程控制、文档管理、评分管理等基本功能模块，此外，还可包括评分表打印/导出、学生反馈、系统备份/恢复管理等辅助功能。整个系统要求界面美观友好，后台数据库存储方式可自行选择，服务架构应具有扩充性。系统开发过程需符合软件工程流程规范，团队成员分工应具体明确，除实现所有代码外，还需要有完善的测试环节。', '课题详情', {
          dangerouslyUseHTMLString: true
        });
      }
    }
}
</script>
<style scoped>
  #search{
    margin-top: 30px;
    margin-bottom: 10px;
    margin-left: 10px;
    width: 42%;
  }
  #page_div{
    position: relative;
  }
  #page{
    position:absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,50%);
  }
</style>