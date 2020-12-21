<template>
  <div class="student">
    <el-container id="container">
      <!-- 头部导航栏 -->
      <el-header id="el-header">
        <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">
            <img id="bar-img" src="./bar-img.jpg" alt="login_bar" height="50px" padding="0">
          </el-menu-item>
          <el-submenu id="item2" index="2">
            <template slot="title">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </template>
            <el-menu-item index="2-1">
              <i class="el-icon-edit-outline"></i>
              <router-link to="/student/update" style="color:rgb(121, 121, 121);text-decoration:none;">修改信息</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-user"></i>
              <router-link to="/student/manage" style="color:rgb(121, 121, 121);text-decoration:none;">我的组队</router-link>              
            </el-menu-item>
            <el-menu-item index="2-3">
              <i class="el-icon-back"></i>
              <router-link to="/login/student" style="color:rgb(121, 121, 121);text-decoration:none;">退出登录</router-link> 
            </el-menu-item>
          </el-submenu>
          <el-menu-item id="item3" index="3">
            消息
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <!-- 左侧选择导航栏 -->
        <el-aside width="250px" id="aside">
          <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#fff"
            text-color="#000"
            active-text-color="#409EFF">
            <el-menu-item index="1">
              <i class="el-icon-reading"></i>
              <router-link to="/student/subject" style="color:rgb(121, 121, 121);text-decoration:none;">查看课题详情</router-link>
              <!-- <span slot="title">查看课题详情</span> -->
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-ship"></i>
              <router-link to="/student/manage" style="color:rgb(121, 121, 121);text-decoration:none;">我的组队</router-link>
              <!-- <span slot="title">我的组队</span> -->
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-edit"></i>
              <router-link to="/student/topic" style="color:rgb(121, 121, 121);text-decoration:none;">课题选择</router-link>
              <!-- <span slot="title">课题选择</span> -->
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-upload2"></i>
              <router-link to="/student/upload" style="color:rgb(121, 121, 121);text-decoration:none;">报告上传</router-link>
              <!-- <span slot="title">报告上传</span> -->
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-finished"></i>
              <router-link to="/student/score" style="color:rgb(121, 121, 121);text-decoration:none;">成绩查询</router-link>
              <!-- <span slot="title">成绩查询</span> -->
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-chat-line-square"></i>
              <router-link to="/student/send" style="color:rgb(121, 121, 121);text-decoration:none;">信息反馈</router-link>
              <!-- <span slot="title">信息反馈</span> -->
            </el-menu-item>
            <div id="block"></div>
          </el-menu>
        </el-aside>
        <!-- 主体部分用于展示二级路由 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <!-- 底部 -->
      <el-footer id="el-footer">
        <div id="foot">
          <div id="rights">©2020 Created By HermionePeng All Rights Reserved.</div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'student',
  data () {
    return {
      
    }
  }
}
</script>
<style scoped>
  .student{
    height: 100%;
  }
  #container{
    height: 100%;
  }
  #item2,#item3{
    float: right;
  }
  #aside{
    margin-top: 1px;
    padding-left: 4%;
  }
  .el-menu-vertical-demo{
    height: 100%;
  }
  #block{
    height: 250px;
  }
  #el-footer,#el-header{
    padding: 0;
  }
  #foot{
    position: relative;
    height: 100%;
    width: 100%;
    background-color: rgb(219, 219, 219);
  }
  #rights{
    font-size: 12px;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>