import React, { Component } from 'react'
import { Row, Col } from 'antd';
import echarts from "echarts"
import {EchartsContent} from "./styled"
export default class Home extends Component {
    render() {
        return (
            <EchartsContent>
               <Row>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}
                        style={{background:'#c33',height:'200px'}}
                    >
                    访问量
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}
                     style={{background:'#c33',height:'200px'}}
                    >
                   阅读量
                    </Col>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}
                     style={{background:'#c33',height:'200px'}}
                    >
                    下载量
                    </Col>
                </Row>

                <div>
                     <div ref="echartsContent" style={{"width": "900px","height":"400px"}}></div>
                     <div ref="echartsContent2" style={{"width": "400px","height":"400px"}}></div>
                </div>
            </EchartsContent>
        )
    }
    componentDidMount(){
        var myChart = echarts.init(this.refs.echartsContent);
        var myChart2 = echarts.init(this.refs.echartsContent2);
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            legend: {
                data:['访问量','阅读量','下载量']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月','2月','3月','4月'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '人数',
                  
                    interval: 50,
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                {
                    type: 'value',
                    name: '人数',
                    interval: 5,
                    axisLabel: {
                        formatter: '{value}'
                    }
                }
            ],
            series: [
                {
                    name:'访问量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2]
                },
                {
                    name:'阅读量',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4]
                },
                {
                    name:'下载量',
                    type:'bar',
                    yAxisIndex: 1,
                    data:[2.0, 2.2, 3.3, 4.5]
                }
            ]
        };

       var  option2 = {
            backgroundColor: '#2c343c',
        
            title: {
                text: 'Customized Pie',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },
        
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
        
            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:274, name:'联盟广告'},
                        {value:235, name:'视频广告'},
                        {value:400, name:'搜索引擎'}
                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
        
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        };





        myChart2.setOption(option2);
        myChart.setOption(option);
    }
}
