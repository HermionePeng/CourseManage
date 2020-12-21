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
            <el-menu-item index="2-2">
              <i class="el-icon-user"></i>
              <router-link to="/teacher/topic" style="color:rgb(121, 121, 121);text-decoration:none;">我的课题</router-link>              
            </el-menu-item>
            <el-menu-item index="2-3">
              <i class="el-icon-back"></i>
              <router-link to="/login/teacher" style="color:rgb(121, 121, 121);text-decoration:none;">退出登录</router-link> 
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
              <router-link to="/teacher/topic" style="color:rgb(121, 121, 121);text-decoration:none;">课题列表</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-user"></i>
              <router-link to="/teacher/group" style="color:rgb(121, 121, 121);text-decoration:none;">指导小组</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-set-up"></i>
              <router-link to="/teacher/produce" style="color:rgb(121, 121, 121);text-decoration:none;">课题流程控制</router-link>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-thumb"></i>
              <router-link to="/teacher/rate" style="color:rgb(121, 121, 121);text-decoration:none;">小组评分</router-link>
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