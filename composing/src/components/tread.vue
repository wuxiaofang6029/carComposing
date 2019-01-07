<template>
  <div class='tread'>
    <div id="myChart" :style="{width: '1000px', height: '500px'}"></div>
  </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                    // 绘制图表
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['吉利博越', '冠道', '本田XR', '哈弗H6', '途观', '全新途胜', '本田CR-V', '缤智', '奔驰CLA级', '汉兰达']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: {
                                show: true
                            },
                            dataView: {
                                show: true,
                                readOnly: false
                            },
                            magicType: {
                                show: true,
                                type: ['line', 'bar', 'stack', 'tiled']
                            },
                            restore: {
                                show: true
                            },
                            saveAsImage: {
                                show: true
                            }
                        }
                    },
                    calculable: true,
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        data: ['Jan/18', 'Mar/18', 'May/18', 'Jul/18', 'Sep/18', 'Nov/18']
                    }],
                    yAxis: [{
                        type: 'value',
                        splitArea: {
                            show: true
                        }

                    }],
                    series: [{
                        name: '吉利博越',
                        type: 'line',
                        stack: '总量',
                        data: [1300, 1000, 4321, 4567, 4789, 3000, 4765]
                    }, {
                        name: '冠道',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    }, {
                        name: '本田XR-V',
                        type: 'line',
                        stack: '总量',
                        data: [150, 1000, 201, 154, 190, 2000, 410]
                    }, {
                        name: '哈弗H6',
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 2000, 390, 330, 320]
                    }, {
                        name: '途观',
                        type: 'line',
                        stack: '总量',
                        data: [820, 400, 901, 934, 1290, 1330, 1320]
                    }, {
                        name: '全新途胜',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }, {
                        name: '本田CR-V',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 560, 934, 1290, 1330, 987]
                    }, {
                        name: '缤智',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }, {
                        name: '奔驰CLA级',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }, {
                        name: '汉兰达',
                        type: 'line',
                        stack: '总量',
                        data: [2500, 2456, 3456, 2000, 2350, 3456, 3578]
                    }]
                })
            }
        }
    }
</script>

<style>
    .tread {
        width: 100%;
    }
    
    @media screen and (max-width:1000px) {
        .tread {
            width: 100%;
        }
        #myChart {
            overflow-x: scroll;
        }
    }
    
    @media screen and (min-width:1000px) {
        #myChart {
            margin: 0 auto;
        }
    }
</style>