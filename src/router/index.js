import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/page/Login'
import Login_student from '../components/page/Login_student'
import Login_teacher from '../components/page/Login_teacher'

import Student from '../components/page/Student'
import Subject from '../components/page/Subject'
import Group_manage from '../components/page/Group_manage'
import Topic_select from '../components/page/Topic_select'
import Upload from '../components/page/Upload'
import Group_score from '../components/page/Group_score'
import Update_information from '../components/page/Update_information'
import Send_message from '../components/page/Send_message'

import Teacher from '../components/page/Teacher'
import My_topic from '../components/page/My_topic'
import My_group from '../components/page/My_group'
import Produce from '../components/page/Produce'
import Rate from '../components/page/Rate'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      children:[
        {path: 'student', component: Login_student},  //学生登陆
        {path: 'teacher', component: Login_teacher},  //教师登陆
      ]
    },
    {
      path: '/student',
      name: 'Student',
      component: Student,
      children:[
        {path: 'subject', component: Subject},  //查看课题详情
        {path: 'manage', component: Group_manage},  //组队
        {path: 'topic', component: Topic_select},  //选题
        {path: 'upload', component: Upload},  //上传报告
        {path: 'score', component: Group_score},  //查看成绩
        {path: 'update', component: Update_information},  //更改个人信息
        {path: 'send', component: Send_message}  //发送反馈信息
      ]
    },
    {
      path: '/teacher',
      name: 'Teacher',
      component: Teacher,
      children:[
        {path: 'topic', component: My_topic},  //查看个人指导的课题列表
        {path: 'group', component: My_group},  //查看个人指导的小组
        {path: 'produce', component: Produce},  //课题进度控制
        {path: 'rate', component: Rate},  //给小组评分+查看成绩
      ]
    }
  ]
})
