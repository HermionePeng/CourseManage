<template>
  <div class="login">
    <!-- 头部导航栏 -->
      <el-header id="el-header">
        <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">
            <img id="bar-img" src="./bar-img.jpg" alt="login_bar" height="50px" padding="0">
          </el-menu-item>
        </el-menu>
      </el-header>
      <!-- 背景图片 -->
      <div class="wrapper">
        <div class="input">
          <el-menu id="log"  background-color="rgba(255,255,255,0)" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
              <router-link to="/login/student" style="color:rgb(121, 121, 121);text-decoration:none;">学生登录</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/login/teacher" style="color:rgb(121, 121, 121);text-decoration:none;">教师登录</router-link>
            </el-menu-item>
          </el-menu>
            <div class="main">
              <router-view></router-view>
            </div>
        </div> 
      </div> 
  </div>
</template>

<script>
  export default {
   data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
<style scoped>
  .wrapper{
    height: 660px;
    background-image: url('https://idas.uestc.edu.cn/authserver/custom/images/bg.png;jsessionid=g1-EawEOLgVqWiyFU6XW8qrzZUJaKjVUnkr6RYRv8FXXQ3l4buVJ!-602428628');
  }
  .input{
    float: left;
    width: 400px;
    height: 380px;
    margin-top: 8%;
    margin-left: 35%;
    background-color: rgba(255, 255, 255, 0.445);
    border-radius: 7px;
  }
  #log{
    width: 192px;
    margin-top: 4%;
    margin-left: 24%;
  }
  .main{
    width: 320px;
  }
</style>