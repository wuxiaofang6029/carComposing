<template>
  <div id="app">
    <div class="m_header">
      <p><img src="./assets/header_logo.jpg" alt=""></p>
      <p><img src="./assets/header_liebiao.png" alt=""></p>
    </div>
    <div class="ban">
      <img src="./assets/ban.png" alt="">
    </div>
    <div class="nav_tab">
      <span>分析评论</span>
      <span>趋势榜单</span>
      <span>研究报告</span>
    </div>
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
        display: flex;
        flex-direction: column;
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
    }
    
    .ban img {
        width: 100%;
        display: block;
    }
    
    .nav_tab {
        width: 100%;
        height: 50px;
        padding: 0 15px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #999;
        font-weight: 800;
    }
</style>