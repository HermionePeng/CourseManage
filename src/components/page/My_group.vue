<template>
  <div class="group">
    <!-- 表头面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/teacher/topic' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>指导小组</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 小组列表的查看 -->
    <div id="table">
    <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
            <el-table-column
            label="小组编号"
            prop="gid">
            </el-table-column>
            <el-table-column
            label="负责人姓名"
            prop="name">
            </el-table-column>
            <el-table-column>
            <template slot="header" slot-scope="scope">
                <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="open">查看详情</el-button>
            </template>
        </el-table-column>
        </el-table>
    </div>
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
          gid: '543612',
          name: '张三',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          gid: '543613',
          name: '李思',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          gid: '543614',
          name: '王五',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          gid: '543615',
          name: '苏雨',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: ''
      }
    },
    methods: {
      open() {
        this.$alert('这里是小组成员的详细介绍。本课题包括如下任务：本项目需开发一个基于web的应用系统，对本科生的综合设计课程进行管理。系统包括用户管理、题目发布、题目选择、过程控制、文档管理、评分管理等基本功能模块，此外，还可包括评分表打印/导出、学生反馈、系统备份/恢复管理等辅助功能。整个系统要求界面美观友好，后台数据库存储方式可自行选择，服务架构应具有扩充性。系统开发过程需符合软件工程流程规范，团队成员分工应具体明确，除实现所有代码外，还需要有完善的测试环节。', '课题详情', {
          dangerouslyUseHTMLString: true
        });
      }
    },
  }
</script>

<style scoped>
    #table{
        width: 70%;
        margin-top: 2%;
        margin-left: 2%;
    }
    #page_div{
        position: relative;
    }
    #page{
        position:absolute;
        top: 50%;
        left: 50%;
        transform:translate(-100%,80%);
    }
</style>