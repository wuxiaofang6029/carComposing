<template>
  <div id="app">
    <div class="m_header min">
      <p><img src="./assets/header_logo.jpg" alt=""></p>
      <p><img src="./assets/header_liebiao.png" alt=""></p>
    </div>
    <div class="m_p_header max">
      <p><img src="./assets/h_login.jpg" alt=""></p>
      <ul class='t_l'>
        <li>产品</li>
        <li>关于我们</li>
        <li>大数据</li>
        <li>新闻</li>
        <li>招聘</li>
        <li>商城</li>
        <li>登录/注册</li>
      </ul>
    </div>
    <div class="ban min">
      <img src="./assets/ban.png" alt="">
    </div>
    <div class="m_p_ban max">
            <img src="./assets/max_bg.jpg" alt="">
          </div>
    <div class="nav_tab">
      <router-link to='/comment'><span class='nav_active'>分析评论</span></router-link>
      <router-link to='/tread'><span>趋势榜单</span></router-link>
      <router-link to='/study'><span>研究报告</span></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    
    a {
        text-decoration: none;
        color: #666;
    }
    
    html,
    body {
        width: 100%;
        height: 100%;
        font-size: 14px;
    }
    
    #app {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
    .m_header {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
    }
    
    .ban {
        width: 100%;
        height: 260px;
    }
    
    .ban img {
        width: 100%;
        height: 100%;
        display: block;
    }
    
    .nav_tab {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #999;
        font-weight: 800;
        border-bottom: 1px solid #ccc;
    }
    
    .nav_tab span {
        display: inline-block;
        height: 100%;
        line-height: 50px;
    }
    
    .router-link-exact-active {
        border-bottom: 3px solid #3aaffd;
    }
    
    @media screen and (max-width:1000px) {
        .max {
            display: none;
        }
    }
    
    @media screen and (min-width:1000px) {
        .min {
            display: none;
        }
        .m_p_header {
            width: 100%;
            height: 100px;
            background: #5a7ffd;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid #666;
        }
        .nav_tab {
            height: 70px;
        }
        .t_l {
            display: flex;
            list-style: none;
            margin-left: 100px;
        }
        .t_l li {
            margin: 0 20px;
            font-size: 16px;
        }
        .m_p_header p img {
            vertical-align: middle;
        }
        .m_p_ban {
            width: 100%;
        }
        .m_p_ban img {
            width: 100%;
            display: flex;
            height: auto;
        }
        .nav_tab {
            margin: 0 auto;
            width: 1000px;
        }
    }
</style>