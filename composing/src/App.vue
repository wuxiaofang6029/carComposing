<template>
  <div id="app">
    <div class="m_header">
      <p><img src="./assets/header_logo.jpg" alt=""></p>
      <p><img src="./assets/header_liebiao.png" alt=""></p>
    </div>
    <div class="ban">
      <img src="http://picture.eclicks.cn/g1/l/2018/04/17/2e324eb8e740788b_2633_960.png" alt="">
    </div>
    <div class="nav_tab">
      <router-link to='/comment'><span class='nav_active'>分析评论</span></router-link>
      <router-link to=''><span>趋势榜单</span></router-link>
      <router-link to=''><span>研究报告</span></router-link>
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
    
    ul,
    ol,
    li {
        list-style: None;
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
    
    .nav_tab .nav_active {
        border-bottom: 3px solid #3aaffd;
    }
</style>