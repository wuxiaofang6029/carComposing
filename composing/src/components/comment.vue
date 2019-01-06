<template>
  <div class='comment_list'>
    <h5 class='comment_nav mar'>
      <p>
        <span>2016</span>
        <span>2017</span>
        <span>2018</span>
      </p>
      <p>年份</p>
    </h5>
    <h5 class='comment_nav'>
      <p>
        <span>数据理论</span>
        <span>涨姿势</span>
        <span>市场动态</span>
        <span>原创</span>
      </p>
      <p>分类</p>
    </h5>
    <div class="comment_main">
      <dl>
        <dt>
          <img src="http://picture.eclicks.cn/g2/l/2018/12/29/8b64b3c45968151c_482_315.png" alt="">
        </dt>
        <dd>
          <h4>2018中国驾驶教练员生存状态大数据报告</h4>
          <p><span>市场动态</span><span>原创</span></p>
          <p>教练员的真实生存状态和工作现状</p>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="http://picture.eclicks.cn/g2/l/2018/10/19/4620dced279f6e97_433_302.png" alt="">
        </dt>
        <dd>
          <h4>如何用数字化手段对汽车行业的销售运营进行改造和升级</h4>
          <p><span>市场动态</span><span>原创</span></p>
          <p>多种数字化手段在汽车行业销售运营中的应用</p>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="http://picture.eclicks.cn/g2/l/2018/09/27/48b9dd8a100461b0_482_315.jpg" alt="">
        </dt>
        <dd>
          <h4>2018新能源消费趋势洞察</h4>
          <p><span>市场动态</span><span>原创</span></p>
          <p>2018年新能源车主及潜在消费者偏好洞察</p>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="http://picture.eclicks.cn/g1/l/2018/07/31/c58dcb0ad39a7efc_482_315.jpg" alt="">
        </dt>
        <dd>
          <h4>2018年二手车市场分析</h4>
          <p><span>市场动态</span><span>原创</span></p>
          <p>对高速增长阶段的二手车市场进行分析</p>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="http://picture.eclicks.cn/g1/l/2018/07/11/db351821e9548571_482_315.jpg" alt="">
        </dt>
        <dd>
          <h4>人口迁徙下的城市车主新生活</h4>
          <p><span>市场动态</span><span>原创</span></p>
          <p>外牌车主的城市生活</p>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="http://picture.eclicks.cn/g1/l/2018/06/11/eeac912cd03a6684_482_315.jpg" alt="">
        </dt>
        <dd>
          <h4>2018 车主生活满意度调查——停车难</h4>
          <p><span>市场动态</span><span>原创</span></p>
          <p>不同城市停车难问题的现状和解决方法</p>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="http://picture.eclicks.cn/g1/l/2018/05/30/8bdd9d87bd65fe41_640_452.jpg" alt="">
        </dt>
        <dd>
          <h4>你知道车企掌握了多少车主数据吗？</h4>
          <p><span>市场动态</span><span>原创</span></p>
          <p>如何更好地管理车联网隐私数据</p>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="http://picture.eclicks.cn/g1/l/2018/04/02/c0654ccb5f348274_482_315.jpg" alt="">
        </dt>
        <dd>
          <h4>2018年汽车消费趋势</h4>
          <p><span>市场动态</span><span>原创</span></p>
          <p>回顾和总结17年汽车消费趋势基础上对18年的市场走向进行预测</p>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="http://picture.eclicks.cn/g1/l/2018/03/22/2e74a5a37e60d1a5_640_426.jpg" alt="">
        </dt>
        <dd>
          <h4>车联网信息安全和区块链技术应用Ⅱ——“个人信息安全”</h4>
          <p><span>市场动态</span><span>原创</span></p>
          <p>解读《个人信息安全规范》，并提出应对措施</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
</script>

<style>
    .comment_list {
        width: 100%;
    }
    
    .comment_nav {
        width: 100%;
        height: 28px;
        line-height: 32px;
        display: flex;
        justify-content: flex-end;
        padding: 0 15px;
        box-sizing: border-box;
        font-size: 14px;
        font-weight: 400;
    }
    
    .comment_nav p:nth-of-type(1) {
        margin-right: 15px;
        color: #42b0fa;
    }
    
    .comment_nav p:nth-of-type(1) span {
        margin-left: 10px;
    }
    
    .mar {
        margin-top: 10px;
    }
    
    .comment_main {
        width: 100%;
    }
    
    .comment_main dl {
        width: 100%;
        display: Flex;
        padding: 10px 15px;
        box-sizing: border-box;
    }
    
    .comment_main dl dt {
        width: 100px;
        height: 80px;
        flex-basis: 1;
        flex-shrink: 0;
        border-radius: 10px;
        overflow: hidden;
    }
    
    .comment_main dl dt img {
        width: 100%;
        height: 100%;
    }
    
    .comment_main dl dd {
        flex: 1;
        margin-left: 10px;
        border-bottom: 1px solid #ccc;
    }
    
    .comment_main dl dd h4 {
        font-weight: 400;
        line-height: 2;
    }
    
    .comment_main dl dd p {
        color: #666;
        line-height: 1.5;
        font-size: 12px;
    }
    
    .comment_main dl dd p span {
        font-size: 12px;
    }
    
    .comment_main dl dd p span:nth-of-type(1) {
        color: orange;
        border: 1px solid orange;
    }
    
    .comment_main dl dd p span:nth-of-type(2) {
        color: #f50;
        border: 1px solid #f50;
        margin-left: 10px;
    }
</style>