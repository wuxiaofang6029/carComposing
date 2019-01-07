<template>
  <div class='study'>
    <div class='s_list'>
      <dl>
        <dt><img src="../assets/t_1.jpg" alt=""></dt>
        <dd>
          <p>2018中国家是教练员生存状态大数据报告</p>
          <p>2018/12/29</p>
          <button>立即查看</button>
        </dd>
      </dl>
      <dl>
        <dt><img src="../assets/t_2.png" alt=""></dt>
        <dd>
          <p>2018中国家是教练员生存状态大数据报告</p>
          <p>2018/12/29</p>
          <button>立即查看</button>
        </dd>
      </dl>
      <dl>
        <dt><img src="../assets/t_3.png" alt=""></dt>
        <dd>
          <p>2018中国家是教练员生存状态大数据报告</p>
          <p>2018/12/29</p>
          <button>立即查看</button>
        </dd>
      </dl>
      <dl>
        <dt><img src="../assets/t_4.jpg" alt=""></dt>
        <dd>
          <p>2018中国家是教练员生存状态大数据报告</p>
          <p>2018/12/29</p>
          <button>立即查看</button>
        </dd>
      </dl>
      <dl>
          <dt><img src="../assets/t_5.png" alt=""></dt>
          <dd>
            <p>2018中国家是教练员生存状态大数据报告</p>
            <p>2018/12/29</p>
            <button>立即查看</button>
          </dd>
        </dl>
        <dl>
            <dt><img src="../assets/t_6.jpg" alt=""></dt>
            <dd>
              <p>2018中国家是教练员生存状态大数据报告</p>
              <p>2018/12/29</p>
              <button>立即查看</button>
            </dd>
          </dl>
    </div>
  </div>
</template>

<script>
</script>

<style>
    .study {
        width: 1000px;
        margin: 0 auto;
    }
    
    .s_list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    
    .s_list dl {
        width: 33%;
        display: flex;
        padding: 10px 0;
        box-sizing: border-box;
    }
    
    .s_list dl dt {
        width: 130px;
    }
    
    .s_list dl dt img {
        width: 100%;
    }
    
    @media screen and (min-width:1000px) {
        .s_list dl dd {
            flex: 1;
            margin-left: 6px;
            position: relative;
        }
        .s_list dl dd p {
            line-height: 1.5;
        }
        .s_list dl dd p:nth-of-type(2) {
            font-size: 12px;
            color: #666;
            line-height: 2;
        }
        .s_list dl dd button {
            width: 60px;
            height: 24px;
            border: none;
            background: #3aaffd;
            color: #fff;
            font-size: 12px;
            position: absolute;
            bottom: 10px;
        }
    }
    
    @media screen and (max-width:1000px) {
        .study {
            width: 100%;
            margin: 0 auto;
        }
        .s_list {
            justify-content: space-around;
        }
        .s_list dl {
            width: 40%;
            flex-direction: column;
        }
        .s_list dl dt {
            width: 100%;
        }
        .s_list dl dt img {
            width: 100%;
        }
        .s_list dl dd button {
            width: 100%;
            height: 40px;
            border: none;
            background: #3aaffd;
            color: #fff;
        }
        .s_list dl dd p {
            line-height: 2;
        }
        .s_list dl dd p:nth-of-type(2) {
            font-size: 12px;
            color: #666;
            line-height: 2;
        }
    }
</style>