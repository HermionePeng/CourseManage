<template>
  <div class="subject">
   <!-- 表头面包屑 -->
   <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/student/subject' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>课题详情</el-breadcrumb-item>
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
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="topic"
        label="课题名称"
        width="300"
      >
      </el-table-column>
      <el-table-column
        prop="description"
        label="课题描述"
        width="500"
      >
      </el-table-column>
      <el-table-column
        prop="remain_group_num"
        label="剩余名额"
        sortable
        width="180">
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
          remain_group_num: '2'
        }, {
          tid: '5413246',
          topic: '基于Android的流量监控',
          description: '一个用安卓开发的简单的APP，可以实现流量的查询',
          remain_group_num: '0'
        }, {
          tid: '5413247',
          topic: '基于Android的流量监控',
          description: '一个用安卓开发的简单的APP，可以实现流量的查询',
          remain_group_num: '9'
        }, {
          tid: '5413248',
          topic: '基于Android的流量监控',
          description: '一个用安卓开发的简单的APP，可以实现流量的查询',
          remain_group_num: '5'
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