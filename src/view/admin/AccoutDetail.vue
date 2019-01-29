<template>
	<div class="content">
			<div class="kuang bankuang">
				<el-row>
					<el-col :span="5" class="tableZh">
						<div class="left">
							<img class="userImg" :src="details.headImg"  style="margin-top: 10px;"/>
						</div>
					</el-col>
					<el-col :span="19" class="tableZh">
						<div class="right" style="margin-top: 10px;">
							<div class="name" style="font-size: 18px">
								<img style="display: inline-block;vertical-align: middle;width: 16px;" class="erweimamin" src="../../assets/weixinico.png" />
								{{details.name}}
								<span style="display: inline-block;margin-right: 3px;" v-for="(item,index) in details.tags" v-if="index<=1" class="tag">{{item.tagName}}</span>
								<div  class="erweima">
									<img class="erweimamin" src="../../../static/icon/meitirenzhen/erweima.png" />
									<img class="erweimaMax" :src="details.qrCode" />
								</div>
							</div>
							<p style="margin-top: 10px;">粉丝数:{{details.fans}}</p>
							<p>分 <span style="margin-left: 7px;">类</span>:{{details.categoryModel}}</p>
							<p>简 <span style="margin-left: 7px;">介</span>:{{details.description}}</p>
							<el-button style="margin-top: 32px;" type="primary" class="reset-login-btn" @click="addCar()">加入选号车</el-button>
						</div>
					</el-col>
				</el-row>
			</div>
			<div class="kuang bankuang" style="margin-left: 10px;">
				<el-row>
					<el-col :span="4" class="tableZh">
						<div class="name" style="font-size: 18px;color: #333333;display: inline-block;margin-top: 10px;">
							账号报价
						</div>
					</el-col>
					<el-col :span="20" class="tableZh" style="margin-top: 10px;">
						<p>报价有效期:{{details.validityTime}}</p>
						<div class="echarts">
							<div class="echarts-left">
								<div id="headlinesContainer" class="echarts-dom"></div>
								<div class="echarts-title">
									<p>阅读量</p>
									<span>{{details.viewCount}}</span>
								</div>
								<div class="offer" style=";margin-top: 6px;">头条</div>
								<div class="offer" style=";margin-top: 12px;">报价：<span>￥{{details.mainPrice?details.mainPrice.toFixed(2):'0.00'}}</span></div>
							</div>
							<div class="echarts-right">
								<div id="timesArticleContainer" class="echarts-dom"></div>
								<div class="echarts-title">
									<p>阅读量</p>
									<span>{{details.subViewCount}}</span>
								</div>
								<div class="offer" style=";margin-top: 6px;">次条</div>
								<div class="offer" style=";margin-top: 12px;">报价：<span>￥{{details.subPrice?details.subPrice.toFixed(2):'0.00'}}</span></div>
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
			<div class="kuang">
				<div class="leftTitle">
					基础数据
					<span>更具历史文章的阅读量，点赞数可判断账号的传播力及粉丝粘性，从而判断账号的广告价值</span>
				</div>
				<el-radio-group class="radioGroup" v-model="radioGroup" size="mini">
					<el-radio-button label="平均阅读数" key="1">平均阅读数</el-radio-button>
					<el-radio-button label="平均点赞数" key="2">平均点赞数</el-radio-button>
				</el-radio-group>
				<el-table v-if="dataList.length>0" :data="dataList" style="width: 100%;margin-top: 20px;">
					<el-table-column v-for="(item,index) in Object.keys(dataList[0])" :key="index" :prop="item" :label="item">
					</el-table-column>
				</el-table>
				<div id="dataListContainer" class="echarts-datalist"></div>
			</div>
			<div class="kuang">
					<div class="leftTitle">
						发文习惯
						<span>根据账号的发文时间及次数可判断其是否活跃；根据其每次发文篇数、发文时段等判断账号的发文习惯，为了广告效果最大化，建议尽量按照账号已有的发文习惯投放广告</span>
					</div>
					<el-row class="updatenumber">
						<el-col :span="12" class="tableZh">
							<div class="subTitle">更新次数
							</div>
							<div id="senderActivitieContainer" class="echarts-senderActivitie"></div>
						</el-col>
						<el-col :span="12" class="tableZh">
							<div class="subTitle">图文热词
								<span>图文热词反映了账号的粉丝兴趣，可以此判断该账号与广告内容是否匹配</span>
							</div>
							<div>
								<div id="hotWordsContainer" class="echarts-hotWords"></div>
							</div>
						</el-col>
					</el-row>
			</div>
			<div class="kuang">
				<div class="leftTitle">
					历史文章
				</div>
				<el-table :data="articleList" style="width: 100%;margin-top: 12px;">
					<el-table-column prop="title" label="文章标题">
					</el-table-column>
					<el-table-column prop="location" label="位置">
					</el-table-column>
					<el-table-column prop="viewCount" label="阅读量">
					</el-table-column>
					<el-table-column prop="likeCount" label="点赞数">
					</el-table-column>
					<el-table-column prop="pubDate" label="发布时间">
					</el-table-column>
				</el-table>
			</div>
			<el-dialog title="加入选号车" :visible.sync="dialogFormVisible">
				<el-form>
					<el-form-item label="请选择广告位">
						<el-select v-model="adType" placeholder="请选择广告位">
							<el-option label="头条" :value="1"></el-option>
							<el-option label="次条" :value="2"></el-option>
						</el-select>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="comfig">确 定</el-button>
				</div>
			</el-dialog>
		</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
var echarts = require('echarts');
require('echarts-wordcloud');
let dataListChart = null;
let senderActivitieChart = null;
let hotWordsContainer = null;
let dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
        //         shadowBlur: 40,
        //         shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
};
let placeHolderStyle = {
    normal: {
        color: '#e8e8e8', //未完成的圆环的颜色
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: '#e8e8e8' //未完成的圆环的颜色
    }
};
let echartsOption = {
    //     title: {
    //         text: '阅读量<br/>',
    //         x: 'center',
    //         y: 'center',
    //         textStyle: {
    //             fontWeight: 'normal',
    //             color: "#666666",
    //             fontSize: 14
    //         }
    //     },
    // backgroundColor: '#011128',
    color: ['#eb644b', '#313443', '#fff'],
    tooltip: {
        show: false,
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        show: false,
        // itemGap: 12,
        data: ['02']
    },
    toolbox: {
        show: false,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: [
        {
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [50, 45],
            itemStyle: dataStyle,
            hoverAnimation: false,

            data: [
                {
                    value: 0,
                    name: '01',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.RadialGradient(0, 0.3, 1, [
                                {
                                    color: '#f27219',
                                    offset: 0
                                },
                                {
                                    color: '#dd2025',
                                    offset: 1
                                }
                            ]),
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    }
                },
                {
                    value: 10000,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }
            ]
        }
    ]
};
export default {
    data() {
        return {
            radioGroup: '平均阅读数',
            dialogFormVisible: false,
            isShowI18n: false,
            adType: 1,
            yytfParams: {},
            details: {},
            dataList: [],
            articleList: []
        };
    },
    created() {
        //创建虚拟dom后
        var self = this;
        self.increment({ val: '2', type: 2 }); //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
        self.increment({ val: '1', type: 3 }); //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
    },
    async mounted() {
        let self = this;
        self.SLS();
        self.language = self.getLanguage();
        dataListChart = echarts.init(document.getElementById('dataListContainer'));
        senderActivitieChart = echarts.init(document.getElementById('senderActivitieContainer'));
        hotWordsContainer = echarts.init(document.getElementById('hotWordsContainer'));

        await self.getWechatProfileInfo();
        await self.getWechatBaseList();
        await self.getWechatAnalysisList();
        await self.getWechatArticleList();
        //         self.getGGZInfo();
        //         for (var item in self.rules) {
        //             self.rules[item].message = self.language.writeOk;
        //         }
        //         self.bgImage = self.API.captchaApi;
        //         console.log(self.getUserInfo);
    },
    watch: {
        radioGroup(val) {
            this.getWechatBaseList();
        }
    },
    computed: {
        // 使用对象展开运算符将 getters 混入 computed 对象中
        ...mapGetters([
            'getLoginFlag',
            'getNavList',
            'getUserInfo'
            // ...
        ])
    },
    methods: {
        ...mapActions([
            'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
            'decrement',
            'setloginflag',
            'setuserinfo'
        ]),
        loadReadEcharts() {
            let self = this;
            let headlinesChart = echarts.init(document.getElementById('headlinesContainer'));
            let timesArticleChart = echarts.init(document.getElementById('timesArticleContainer'));

            let headlinesOption = JSON.parse(JSON.stringify(echartsOption));
            let timesArticleOption = JSON.parse(JSON.stringify(echartsOption));
            // 绘制图表
            headlinesOption.series[0].data[0].value = self.details.viewCount;
            timesArticleOption.series[0].data[0].value = self.details.subViewCount;

            headlinesChart.setOption(headlinesOption);
            timesArticleChart.setOption(timesArticleOption);
        },
        addCar() {
            //加入选号车
            let self = this;
            self.title = '加入选号车';
            self.dialogFormVisible = true;
            self.yytfParams = {
                type: 2,
                platformId: 1,
                accountId: self.details.id,
                adType: self.adType
            };
        },
        comfig() {
            //预约投放
            let self = this;
            self.yytfParams.adType = self.adType;
            self.$http.post(self.API.addAccountCarAPI, self.yytfParams).then(
                response => {
                    // 响应成功回调
                    self.dialogFormVisible = false;
                    if (response.data.status == 0) {
                        //添加购物车成功
                        self.$message({
                            message: '加入选号车成功！',
                            type: 'success'
                        });
                    } else {
                        self.$message.error(response.data.msg);
                    }
                },
                response => {
                    self.dialogFormVisible = false;
                }
            );
        },
        getWechatBaseList() {
            let self = this;
            self.$http
                .get(self.API.analysisListAPI + self.$route.query.uid + '/article/base/info')
                .then(
                    response => {
                        // 响应成功回调
                        if (response.data.status == 0) {
                            let tempData = response.data.data;
                            let tempObj = [{ ' ': '头条' }, { ' ': '次条' }];
                            // self.dataList = [{' ':'头条'},{' ':'次条'}];
                            if (self.radioGroup == '平均阅读数') {
                                tempData.viewInfo.dateStr.forEach((item, index) => {
                                    tempObj[0][item] =
                                        tempData.viewInfo.viewData[0].viewCount[index];
                                    tempObj[1][item] =
                                        tempData.viewInfo.viewData[1].viewCount[index];
                                    // viewData
                                });
                            } else {
                                tempData.likeInfo.dateStr.forEach((item, index) => {
                                    tempObj[0][item] =
                                        tempData.likeInfo.likeData[0].likeCount[index];
                                    tempObj[1][item] =
                                        tempData.likeInfo.likeData[1].likeCount[index];
                                    // viewData
                                });
                            }
                            self.dataList = tempObj;
                            self.formatDataListData(response.data.data);
                        }
                    },
                    response => {}
                );
        },
        getWechatArticleList() {
            let self = this;
            self.articleList = [];
            self.$http.get(self.API.analysisListAPI + self.$route.query.uid + '/article/list').then(
                response => {
                    // 响应成功回调
                    if (response.data.status == 0) {
                        self.articleList = response.data.data;
                    }
                },
                response => {}
            );
        },
        senderActivitie(data) {
            let self = this;
            let option = {
                title: [
                    {
                        text: '近7天发稿总量',
                        textStyle: {
                            color: '#666666',
                            fontSize: 14,
                            align: 'center'
                        },
                        bottom: 0,
                        left: '28'
                    },
                    {
                        text: '近7天发稿频率',
                        textStyle: {
                            color: '#666666',
                            fontSize: 14,
                            align: 'center'
                        },
                        bottom: 0,
                        left: '168'
                    },
                    {
                        text: '近7天日均发稿量',
                        textStyle: {
                            color: '#666666',
                            fontSize: 14,
                            align: 'center'
                        },
                        bottom: 0,
                        left: '308'
                    }
                ],
                series: [
                    {
                        name: '近7天发稿总量',
                        type: 'pie',
                        radius: ['35', '45'],
                        center: ['80', '70'],
                        startAngle: 225,
                        color: [
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#f3eb18'
                                },
                                {
                                    offset: 1,
                                    color: '#f27219'
                                }
                            ]),
                            'transparent'
                        ],
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: {
                            normal: {
                                position: 'center',
                                verticalAlign: 'middle'
                            }
                        },
                        data: [
                            {
                                value: 75,
                                name: '近7天发稿总量',
                                label: {
                                    normal: {
                                        textStyle: {
                                            color: 'transparent'
                                        }
                                    }
                                }
                            },
                            {
                                value: 25,
                                label: {
                                    position: 'center',
                                    verticalAlign: 'middle',
                                    normal: {
                                        formatter: '35',
                                        textStyle: {
                                            color: '#f27219',
                                            fontSize: 21
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    {
                        name: '近7天发稿频率',
                        type: 'pie',
                        radius: ['35', '45'],
                        center: ['220', '70'],
                        startAngle: 225,
                        color: [
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#e766f3'
                                },
                                {
                                    offset: 1,
                                    color: '#4b48dc'
                                }
                            ]),
                            'transparent'
                        ],
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: {
                            normal: {
                                position: 'center',
                                verticalAlign: 'middle'
                            }
                        },
                        data: [
                            {
                                value: 75,
                                name: '近7天发稿频率',
                                label: {
                                    normal: {
                                        textStyle: {
                                            color: 'transparent'
                                        }
                                    }
                                }
                            },
                            {
                                value: 25,
                                label: {
                                    position: 'center',
                                    verticalAlign: 'middle',
                                    normal: {
                                        formatter: '35',
                                        textStyle: {
                                            color: '#4b48dc',
                                            fontSize: 21
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    {
                        name: '近7天日均发稿量',
                        type: 'pie',
                        radius: ['35', '45'],
                        center: ['360', '70'],
                        startAngle: 225,
                        color: [
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#3367fe'
                                },
                                {
                                    offset: 1,
                                    color: '#acfffc'
                                }
                            ])
                            // ,'transparent'
                        ],
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: {
                            normal: {
                                position: 'center',
                                verticalAlign: 'middle'
                            }
                        },
                        data: [
                            {
                                value: 75,
                                name: '近7天日均发稿量',
                                label: {
                                    normal: {
                                        textStyle: {
                                            color: 'transparent'
                                        }
                                    }
                                }
                            },
                            {
                                value: 25,
                                label: {
                                    position: 'center',
                                    verticalAlign: 'middle',
                                    normal: {
                                        formatter: '35',
                                        textStyle: {
                                            color: '#3367fe',
                                            fontSize: 21
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ]
            };

            option.series[0].data[1].label.normal.formatter = data.periodCount + '';
            option.series[1].data[1].label.normal.formatter = data.periodFrequency + '';
            option.series[2].data[1].label.normal.formatter = data.dailyCount + '';
            senderActivitieChart.setOption(option);
        },
        getWechatAnalysisList() {
            let self = this;
            self.$http
                .get(self.API.analysisListAPI + self.$route.query.uid + '/article/analysis')
                .then(
                    response => {
                        // 响应成功回调
                        if (response.data.status == 0) {
                            self.senderActivitie(response.data.data);
                        }
                    },
                    response => {}
                );
        },
        senderActivitie(data) {
            let self = this;
            let option = {
                title: [
                    {
                        text: '近7天发稿总量',
                        textStyle: {
                            color: '#666666',
                            fontSize: 14,
                            align: 'center'
                        },
                        bottom: '18',
                        left: '28'
                    },
                    {
                        text: '近7天发稿频率',
                        textStyle: {
                            color: '#666666',
                            fontSize: 14,
                            align: 'center'
                        },
                        bottom:'18',
                        left: '168'
                    },
                    {
                        text: '近7天日均发稿量',
                        textStyle: {
                            color: '#666666',
                            fontSize: 14,
                            align: 'center'
                        },
                        bottom: '18',
                        left: '308'
                    }
                ],
                series: [
                    {
                        name: '近7天发稿总量',
                        type: 'pie',
                        radius: ['35', '45'],
                        center: ['80', '70'],
                        startAngle: 225,
                        color: [
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#f3eb18'
                                },
                                {
                                    offset: 1,
                                    color: '#f27219'
                                }
                            ]),
                            'transparent'
                        ],
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: {
                            normal: {
                                position: 'center',
                                verticalAlign: 'middle'
                            }
                        },
                        data: [
                            {
                                value: 75,
                                name: '近7天发稿总量',
                                label: {
                                    normal: {
                                        textStyle: {
                                            color: 'transparent'
                                        }
                                    }
                                }
                            },
                            {
                                value: 25,
                                label: {
                                    position: 'center',
                                    verticalAlign: 'middle',
                                    normal: {
                                        formatter: '35',
                                        textStyle: {
                                            color: '#f27219',
                                            fontSize: 21
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    {
                        name: '近7天发稿频率',
                        type: 'pie',
                        radius: ['35', '45'],
                        center: ['220', '70'],
                        startAngle: 225,
                        color: [
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#e766f3'
                                },
                                {
                                    offset: 1,
                                    color: '#4b48dc'
                                }
                            ]),
                            'transparent'
                        ],
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: {
                            normal: {
                                position: 'center',
                                verticalAlign: 'middle'
                            }
                        },
                        data: [
                            {
                                value: 75,
                                name: '近7天发稿频率',
                                label: {
                                    normal: {
                                        textStyle: {
                                            color: 'transparent'
                                        }
                                    }
                                }
                            },
                            {
                                value: 25,
                                label: {
                                    position: 'center',
                                    verticalAlign: 'middle',
                                    normal: {
                                        formatter: '35',
                                        textStyle: {
                                            color: '#4b48dc',
                                            fontSize: 21
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    {
                        name: '近7天日均发稿量',
                        type: 'pie',
                        radius: ['35', '45'],
                        center: ['360', '70'],
                        startAngle: 225,
                        color: [
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#3367fe'
                                },
                                {
                                    offset: 1,
                                    color: '#acfffc'
                                }
                            ])
                            // ,'transparent'
                        ],
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: {
                            normal: {
                                position: 'center',
                                verticalAlign: 'middle'
                            }
                        },
                        data: [
                            {
                                value: 75,
                                name: '近7天日均发稿量',
                                label: {
                                    normal: {
                                        textStyle: {
                                            color: 'transparent'
                                        }
                                    }
                                }
                            },
                            {
                                value: 25,
                                label: {
                                    position: 'center',
                                    verticalAlign: 'middle',
                                    normal: {
                                        formatter: '35',
                                        textStyle: {
                                            color: '#3367fe',
                                            fontSize: 21
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ]
            };

            option.series[0].data[1].label.normal.formatter = data.periodCount + '';
            option.series[1].data[1].label.normal.formatter = data.periodFrequency + '';
            option.series[2].data[1].label.normal.formatter = data.dailyCount + '';
            senderActivitieChart.setOption(option);

            let hotWordsData = [];
            data.tags.forEach(item => {
                hotWordsData.push({
                    name: item,
                    value: parseInt(Math.random() * 1000) +1
                });
            });
            let maskImage = new Image();
            maskImage.src =
                '/static/icon/datatu.png';
            let hotWordsOption = {
                series: [
                    {
                        name: '搜索指数',
                        type: 'wordCloud',
                        //size: ['9%', '99%'],
                        sizeRange: [12, 80],
                        //textRotation: [0, 45, 90, -45],
                        rotationRange: [-45, 90],
                        //shape: 'circle',
                        maskImage: maskImage,
                        textPadding: 0,
                        autoSize: {
                            enable: true,
                            minSize: 6
                        },
                        textStyle: {
                            normal: {
                                color: function() {
                                    return (
                                        'rgb(' +
                                        [
                                            Math.round(Math.random() * 160),
                                            Math.round(Math.random() * 160),
                                            Math.round(Math.random() * 160)
                                        ].join(',') +
                                        ')'
                                    );
                                }
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        data: hotWordsData
                    }
                ]
            };
            maskImage.onload = function() {
                hotWordsContainer.setOption(hotWordsOption);
            };
        },
        formatDataListData(data) {
            let self = this;
            let option = {
                color: ['#dd2025', '#256add'],
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['预购', '成交'],
                    bottom: 0
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '成交',
                        type: 'line',
                        smooth: true,
                        data: [10, 12, 21, 54, 260, 830, 710]
                    },
                    {
                        name: '预购',
                        type: 'line',
                        smooth: true,
                        data: [30, 182, 434, 791, 390, 30, 10]
                    }
                ]
            };
            option.legend = [];
            option.xAxis.data = [];
            option.series[0].name = '';
            option.series[0].data = [];
            option.series[1].name = '';
            option.series[1].data = [];
            let legends = [];
            if (self.radioGroup == '平均阅读数') {
                data.viewInfo.viewData.forEach((item, index) => {
                    legends.push(item.name);
                });
                option.legend.data = legends;
                option.xAxis.data = data.viewInfo.dateStr;
                option.series[0].name = legends[0];
                option.series[0].data = data.viewInfo.viewData[0].viewCount;
                option.series[1].name = legends[1];
                option.series[1].data = data.viewInfo.viewData[1].viewCount;
            } else {
                data.likeInfo.likeData.forEach((item, index) => {
                    legends.push(item.name);
                });
                option.legend.data = legends;
                option.xAxis.data = data.likeInfo.dateStr;
                option.series[0].name = legends[0];
                option.series[0].data = data.likeInfo.likeData[0].likeCount;
                option.series[1].name = legends[1];
                option.series[1].data = data.likeInfo.likeData[1].likeCount;
            }
            console.log(JSON.stringify(option));
            console.log(option);
            dataListChart.setOption(option);
        },
        getWechatProfileInfo() {
            let self = this;
            self.$http.get(self.API.wechatProfileInfoAPI + self.$route.query.uid).then(
                response => {
                    // 响应成功回调
                    if (response.data.status == 0) {
                        response.data.data.validityTime = self.dateFormat(
                            response.data.data.validityTime,
                            'yyyy-MM-dd'
                        );
                        self.details = response.data.data;
                        self.loadReadEcharts();
                        console.log(self.details);
                    }
                },
                response => {}
            );
        },
        sendImageCode() {
            let self = this;
            self.bgImage = self.API.captchaApi + '?index=' + Math.random();
        },
        submitForm(formName) {
            //提交按钮
            if (this.btn1 == '编辑') {
                this.btn1 = '保存';
                return;
            }
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.postFromFn();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        goToUrl(url) {
            let self = this;
            self.$router.push({
                path: url
            });
        }
    }
};
</script>

<style lang="scss">
.echarts-hotWords {
    height: 250px;
}
.echarts-senderActivitie {
    height: 150px;
}
.updatenumber {
    margin-top: 32px;
    .echarts-senderActivitie {
        position: relative;
        &:after {
            content: '';
            position: absolute;
            right: 32px;
            top: 32px;
            bottom: 0;
            width: 1px;
            background-color: #e8e8e8;
        }
    }
}
.subTitle {
    color: #666666;
    font-size: 16px;
    span {
        font-size: 14px;
        color: #999999;
        padding-left: 12px;
    }
}
.echarts-datalist {
    width: 100%;
    height: 420px;
}
.radioGroup {
    position: absolute;
    right: 20px;
    top: 16px;
}
.leftTitle {
    font-size: 18px;
    color: rgb(51, 51, 51);
    display: inline-block;
    margin-top: 10px;
    span {
        font-size: 14px;
        color: #999999;
        padding-left: 20px;
    }
}
.echarts {
    margin-top: 28px;
    .echarts-dom {
        width: 100px;
        height: 100px;
        transform: rotateY(180deg);
        margin: auto;
    }
    .echarts-left {
        position: relative;
        width: 50%;
        display: inline-block;
        // padding-left: 20px;
        float: left;
        text-align: center;
        .offer {
            font-size: 14px;
            color: #333333;
            span {
                color: #dd2025;
            }
        }
        .echarts-title {
            position: absolute;
            width: 100px;
            height: 100px;
            text-align: center;
            line-height: 20px;
            top: 0;
            left: 50%;
            margin-left: -50px;
            p {
                font-size: 14px;
                color: #666666;
                margin-top: 28px;
            }
            span {
                font-size: 16px;
                color: #333333;
            }
        }
    }
    .echarts-right {
        @extend .echarts-left;
    }
}
.tableZh {
    .right {
        position: relative;
        .name {
            font-size: 14px;
            color: #333333;
            display: inline-block;
            .erweima {
                position: relative;
                display: inline-block;
                .erweimamin {
                    width: 16px;
                    height: 16px;
                    display: inline-block;
                    margin-left: 6px;
                    vertical-align: middle;
                }
                .erweimaMax {
                    position: absolute;
                    right: -112px;
                    top: 0px;
                    width: 100px;
                    height: 100px;
                    z-index: 9999;
                    display: none;
                }
            }
            .erweima:hover {
                .erweimaMax {
                    display: block;
                }
            }
        }
        .tag {
            display: table;
            color: #ffffff;
            background-color: #de1a20;
            padding: 0 6px;
            border-radius: 4px;
            font-size: 12px;
        }
    }
    .left {
        width: 44px;
        position: relative;
        .userImg {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            display: block;
        }
        .ico {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 12px;
            height: auto;
            display: block;
        }
    }
}

.content {
    padding-top: 24px;
    padding-bottom: 24px;
    .bankuang {
        width: 593px;
        height: 250px;
        overflow: hidden;
        display: inline-block;
        .account-img {
            width: 100px;
            height: 100px;
            overflow: hidden;
            border-radius: 50%;
            img {
                width: 100%;
                display: block;
            }
        }
    }
    .kuang {
        background-color: #ffffff;
        padding: 12px 24px;
        color: #666666;
        font-size: 12px;
        margin-bottom: 6px;
        position: relative;
        .info {
            position: relative;
            overflow: hidden;
            padding: 12px 0;
            .item {
                width: 50%;
                float: left;
                font-size: 14px;
                .left {
                    text-align: right;
                    color: #666666;
                    width: 148px;
                    display: inline-block;
                    margin-top: 12px;
                }
                .right {
                    width: 378px;
                    text-align: left;
                    color: #333333;
                    display: inline-block;
                    margin-top: 12px;
                }
            }
            .timeout {
                .left {
                    width: 94px;
                }
                .right {
                    width: 438px;
                }
            }
        }
        .title {
            font-size: 14px;
            font-weight: normal;
            color: #333333;
            padding-left: 22px;
            background: url(../../../static/icon/wangzhan/gantanhao.png) no-repeat left center;
            background-size: 16px;
            border-bottom: 2px solid #e8e8e8;
            padding-top: 12px;
            padding-bottom: 12px;
        }
        .account {
            background: url(../../../static/icon/wangzhan/gantanhao.png) no-repeat left center;
            background-size: 16px;
            display: inline-block;
            border-bottom: none;
            position: relative;
            margin-right: 8px;
        }
        .account:before {
            content: '';
            position: absolute;
            top: 15px;
            bottom: 15px;
            right: -6px;
            width: 1px;
            background-color: #dd2025;
        }
        .time {
            background: url(../../../static/icon/wangzhan/gantanhao.png) no-repeat left center;
            background-size: 16px;
        }
        .red {
            font-size: 14px;
            color: #dd2025;
        }
    }
}
</style>
