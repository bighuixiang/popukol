<template>
	<el-row class="panel">
		<div class="mjx-header">
			<!-- start 顶部用户信息栏 -->
			<div class="mjx-header-user mjx-clearfix">
				<div class="mjx-header-user-back mjx-width">
					<a class="i18n zh_click" tabindex="-1" @click="isShowI18n=true" @blur="i18nHide">
						<span languagetype="no">{{languageText1}}</span><i class="el-icon-arrow-down el-icon--right"></i>
						<div class="info zh_click" v-show="isShowI18n" @click.stop="language">
							<span languagetype="no" ref="languageRef">{{languageText2}}</span>
							<div class="sanjiao"></div>
						</div>
					</a>
					<!-- 右侧  start-->
					<router-link class="helper" to="/helper">帮助中心</router-link>
					<!-- 右侧  end-->
				</div>
			</div>
			<!-- end 顶部用户信息栏 -->

			<!-- start 顶部logo信息 -->
			<div class="logoinfo">
				<div class="leftLogo" @click="goToHome()">
					<img src="../../static/icon/topandbottomlogo/toplogo.png" />
					<div class="line"></div>
					<div class="duanshiping">精准投放 精准营销</div>
				</div>
				<div class="rightTel">
					<img class="leftTel" src="../../static/icon/topandbottomlogo/tel.png" />
					<div class="rightinfo">
						<div class="lianxi">联系热线</div>
						<div class="tel">+852 9690 4939</div>
					</div>
				</div>
			</div>
			<!-- end 顶部logo信息 -->

			<!-- start 顶部导航信息 -->
			<div class="navbar-xh">
				<ul class="ul">
					<li v-for="item in getNavList" :class="{active:item.isCur}">
						<div @click="goToUrl(item)" v-if="item.url!=''">{{item.name}}</div>
						<a class="noa transition-box" v-else @click='showAppDown' href="javascript:void(0)" tabindex="-1" @blur="moreHide">
							<div class="more">{{item.name}}
								<span class="info" v-show="isShowMore">
								<p @click.stop="moreClick(1)">新闻网站</p>
								<p @click.stop="moreClick(2)">论坛贴吧</p>
								<p @click.stop="moreClick(3)">DSP广告</p>
								<span class="sanjiao"></span>
								</span>
							</div>
						</a>
					</li>
				</ul>
			</div>
			<!-- end 顶部导航信息 -->
			<el-col :span="24" class="panel-center">
				<section class="panel-c-c">
					<div class="grid-content bg-purple-light">
						<el-col :span="24" style="background-color:#fff;box-sizing: border-box;">
							<transition name="fade">
								<router-view></router-view>
							</transition>
						</el-col>
					</div>
				</section>
				<!--</el-col>-->
			</el-col>

			<!-- start 底部信息 -->
			<div class="footer">
				<div class="footerinner">
					<div class="left">
						<img class="bottomlogo" src="../../static/icon/topandbottomlogo/bottomlogo.png" />
						<p class="duli">精准投放 精准营销</p>
						<div class="kuai">
							©POPUKOL, powered by POPUKOL THX.法律声明转载内容 版权归作者及来源网站所有，本站原创内容转载请注明来源，商业 媒体及纸媒请先联系: xiaojiejie@popukol.com
						</div>
					</div>
					<div class="center">
						<h1 class="lianxi">
							联系
						</h1>
						<div class="info">
							<p>电话：+852 9690 4939</p>
							<p>邮箱：allen@fnewmedia.com</p>
							<p>地址：九龙湾临兴街 26 号富洋工业中心 301 室</p>
						</div>
					</div>
					<div class="right">
						<h1 class="wechat">
							官方微信
						</h1>
						<img class="erweima" src="../../static/icon/topandbottomlogo/weixin.png" />
					</div>
				</div>
			</div>
			<!-- end 底部信息 -->

			<!-- start 侧边栏信息 -->
			<div class="cebianlan">
				<div class="yuyuetoufang" @click="yuyuetoufang">
					<img src="../../static/icon/wangzhan/toufang.png" />
					<span>预约投放</span>
				</div>
				<div class="zimeitiruzhu bottomjuli" @click.stop="showZiMeiTi">
					<img src="../../static/icon/wangzhan/zimeiti.png" />
					<span>自媒体入驻</span>

					<div class="info" v-show="isShowZiMeiTi">
						<div class="item">
							<div class="ico tel"></div>
							<div class="detail">
								<p>售前咨询电话</p>
								<span class="red">400-123-0111</span>
							</div>
						</div>
						<div class="item">
							<div class="ico qq"></div>
							<div class="detail">
								<p>售前咨询QQ</p>
								<span>4001230111</span>
							</div>
						</div>
						<div class="item">
							<div class="ico email"></div>
							<div class="detail">
								<p>售前咨询邮箱</p>
								<span>4001230111@qq.com</span>
							</div>
						</div>

						<div class="close" @click.stop="closeZiMeiTi"></div>
					</div>
				</div>
				<div  v-if="isShowBackTop" class="backTop" @click.stop="toTop"></div>
			</div>
			<!-- end 侧边栏信息 -->
		</div>
	</el-row>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            isShowBackTop: false,
            isShowI18n: false,
            isShowZiMeiTi: false,
            isShowMore: false,
            msgTotal: 0,
            logoUrl: '',
            languageText1: '语言: 简体中文',
            languageText2: '繁體中文'
        };
    },
    mounted() {
        let self = this;
        let languageType = window.localStorage.getItem('languageType');
        if (languageType == 2) {
            self.languageText1 = '語言:繁體中文';
            self.languageText2 = '简体中文';
        }

        window.addEventListener('scroll', this.isShowBackTopFun);
        //			self.getNavsList()
    },
    //		watch: {
    //			'$route' (to, from) { //监听路由改变
    //				this.currentPathName = to.name;
    //				this.currentPathNameParent = to.matched[0].name;
    //			}
    //		},
    computed: {
        // 使用对象展开运算符将 getters 混入 computed 对象中
        ...mapGetters([
            'getNavList',
            'getUserInfo'
            // ...
        ]),
        curIsLogin() {
            return typeof this.getUserInfo.dmId != 'undefined';
        }
    },
    methods: {
        ...mapActions([
            'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
            'decrement',
            'setuserinfo',
            'loginFlag'
        ]),
        isShowBackTopFun() {
            let self = this;
            let result = false;
            let scrollTop =
                window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let hg = document.body.clientHeight || document.documentElement.clientHeight;
            if (scrollTop >= hg / 2) {
                result = true;
            }
            self.isShowBackTop = result;
            return result;
        },
        language() {
            let self = this;
            let languageRef = self.$refs.languageRef;
            let type = 1;
            if (languageRef.innerText.indexOf('繁') > -1) {
                self.languageText1 = '語言:繁體中文';
                self.languageText2 = '简体中文';
                type = 2;
            } else {
                self.languageText1 = '语言: 简体中文';
                self.languageText2 = '繁體中文';
            }
            window.localStorage.setItem('languageType', type); //简体中文
            self.SLS(type);
            self.languageSwitching(type);
            self.isShowI18n = false;
        },
        yuyuetoufang() {
            let self = this;
            self.$router.push({
                path: '/wechatxhtg'
            });
        },
        languageSwitching(type) {
            let self = this;
            self.$http.get(self.API.langAPI + type).then(
                response => {
                    // 响应成功回调
                },
                response => {}
            );
        },
        getNavsList() {
            //topNavListAPI
            let self = this;
            self.$http.get(self.API.topNavListAPI).then(
                response => {
                    // 响应成功回调
                    console.log(response.data);
                    if (response.data.status == 0) {
                        //						self.recordTypeList = response.data.data
                    }
                },
                response => {}
            );
        },
        goToHome() {
            let self = this;
            self.$router.push({
                path: '/'
            });
        },
        goToUrl(item) {
            let self = this;
            if (item.url.indexOf('http') > -1) {
                window.open(item.url);
            } else if (item.url != '') {
                self.$router.push({
                    path: item.url
                });
            }
        },
        moreClick(type) {
            let self = this;
            self.isShowMore = false;
            switch (type) {
                case 1:
                    self.$router.push({
                        path: '/newsweb'
                    });
                    break;
                case 2:
                    self.$router.push({
                        path: '/forumbar'
                    });
                    break;
                case 3:
                    self.$router.push({
                        path: '/dsp'
                    });
                    break;
            }
        },
        i18nHide() {
            this.isShowI18n = false;
        },
        moreHide() {
            this.isShowMore = false;
        },
        closeZiMeiTi() {
            this.isShowZiMeiTi = false;
        },
        showZiMeiTi() {
            this.isShowZiMeiTi = true;
        },
        getLogoUrl() {
            let self = this;
            //				self.$http.post(getSellerStationInfo, {}).then((response) => { // 响应成功回调
            //					self.logoUrl = response.data.data.logo;
            //				}, (response) => {
            //					// 响应错误回调
            //				});
        },
        showAppDown() {
            let self = this;
            self.increment(9);
            self.isShowMore = true;
        },
        onSubmit() {
            console.log('submit!');
        },
        handleopen() {
            //console.log('handleopen');
        },
        handleclose() {
            //console.log('handleclose');
        },
        checkLogined() {
            let self = this;
            //				self.$http.post(checkLogined).then((response) => { // 响应成功回调
            //					if(response.data.code == 0) {
            //						self.setuserinfo(response.data.data)
            //						window.localStorage.setItem('userInfo', response.data.data)
            //					} else {
            //						window.localStorage.removeItem('userInfo')
            //					}
            //				}, (response) => {
            //					window.localStorage.removeItem('userInfo')
            //				});
        },
        handleselect: function(a, b) {},
        //退出登录
        logout: function() {
            var self = this;
            self.$confirm('确认退出吗?', '提示', {
                //type: 'warning'
            })
                .then(() => {
                    //					self.$http.post(logout).then((response) => { // 响应成功回调
                    //						if(response.data.code == 0) {
                    //							window.localStorage.removeItem('userInfo')
                    //							self.setuserinfo({})
                    //							self.$router.replace('/');
                    //						} else {
                    //							self.$message({
                    //								message: response.data.msg,
                    //								type: 'warning'
                    //							})
                    //						}
                    //					}, (response) => {});
                })
                .catch(() => {});
        },
        getMessageInfoList() {
            let self = this;
            //				self.$http.post(pushMessageInfoList).then((response) => { // 响应成功回调
            //					if(response.data.code == 0) {
            //						self.msgTotal = response.data.data.total;
            //					}
            //				}, (response) => {});
        },
        toTop() {
            var gotoTop = function() {
                var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
                currentPosition -= 10;
                if (currentPosition > 0) {
                    window.scrollTo(0, currentPosition);
                } else {
                    window.scrollTo(0, 0);
                    clearInterval(timer);
                    timer = null;
                }
            };
            var timer = setInterval(gotoTop, 1);
        }
    }
};
</script>

<style lang="scss" scoped>
/*.fade-enter-active,
	.fade-leave-active {
		transition: opacity .1s
	}*/

.noa:hover {
    color: #ffffff !important;
}

.noa:active {
    color: #ffffff !important;
}

.noa:link {
    color: #ffffff !important;
}

.more {
    position: relative;
    .info {
        position: absolute;
        z-index: 8;
        /* display: none; */
        width: 100px;
        padding: 0;
        text-align: center;
        border-radius: 2px;
        background-color: #fcfcfc;
        box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.29);
        -webkit-box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.29);
        -moz-box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.29);
        -ms-box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.29);
        /* top: 0; */
        margin-top: 0px;
        margin-left: -33px;
        color: #333333;
        p {
            line-height: 1;
            padding: 12px;
            border-bottom: 1px solid #e8e8e8;
            font-size: 16px;
            color: #333333 !important;
        }
        p:hover {
            background-color: #ececec;
        }
        .sanjiao {
            position: absolute;
            top: -20px;
            width: 0px;
            height: 0px;
            border-top: 12px solid transparent;
            border-right: 12px solid transparent;
            border-bottom: 12px solid #fcfcfc;
            border-left: 12px solid transparent;
            left: 50%;
            margin-left: -12px;
            z-index: -1;
        }
    }
}

.cebianlan {
    position: fixed;
    right: 12px;
    // bottom: 144px;
	    bottom: 14%;
    z-index: 999;
	height: 572px;
}

.backTop {
    position: relative;
    right: 0;
    /*bottom: 128px;*/
    width: 36px;
    height: 36px;
    background: url(../../static/icon/wangzhan/fanhuidingbu.png) no-repeat center center;
    background-size: 18px auto;
    border-radius: 4px;
    box-shadow: 1px 1px 1px 1px #999999;
    -webkit-box-shadow: 1px 1px 1px 1px #999999;
    -ms-box-shadow: 1px 1px 1px 1px #999999;
    -moz-box-shadow: 1px 1px 1px 1px #999999;
    margin-top: 186px;
    background-color: #ffffff;
    cursor: pointer;
}

.yuyuetoufang,
.zimeitiruzhu {
    position: relative;
    width: 44px;
    height: 116px;
    right: 0;
    padding: 5px;
    background-color: #dd2025;
    color: #ffffff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    user-select: none;
    -moz-user-select: none;
    font-size: 14px;
    /*top: 400px;*/
    .info {
        position: absolute;
        right: 54px;
        top: -25px;
        background-color: #ffffff;
        z-index: 999;
        width: 300px;
        height: 200px;
        border-radius: 4px;
        box-shadow: 1px 1px 1px 1px #999999;
        -webkit-box-shadow: 1px 1px 1px 1px #999999;
        -ms-box-shadow: 1px 1px 1px 1px #999999;
        -moz-box-shadow: 1px 1px 1px 1px #999999;
        font-size: 14px;
        color: #333333;
        padding-top: 18px;
        padding-left: 12px;
        .close {
            position: absolute;
            right: 12px;
            top: 12px;
            width: 32px;
            height: 32px;
            background: url(../../static/icon/admin/close.png) no-repeat center center;
            background-size: 16px auto;
        }
        .item {
            clear: both;
            .ico {
                width: 32px;
                height: 32px;
                border: 1px solid #999999;
                border-radius: 50%;
                margin: 12px;
                float: left;
            }
            .email {
                background: url(../../static/icon/admin/email.png) no-repeat center center;
                background-size: 16px auto;
            }
            .tel {
                border: none;
                background: url(../../static/icon/admin/tel.png) no-repeat center center;
                background-size: 32px auto;
            }
            .qq {
                border: none;
                background: url(../../static/icon/admin/qq.png) no-repeat center center;
                background-size: 32px auto;
            }
            .detail {
                width: 160px;
                text-align: left;
                float: left;
                p {
                    margin-top: 3px;
                }
                span {
                    text-align: left;
                    padding: 0;
                    color: #999999;
                }
                .red {
                    color: #de1a20;
                }
            }
        }
    }
    img {
        width: 16px;
        height: auto;
        margin: 12px auto 0;
        display: block;
    }
    span {
        margin: auto;
        display: block;
        text-align: center;
        padding: 12px 0;
        font-size: 12px;
        padding: 12px 6px;
        text-align: center;
        line-height: 1.2;
    }
}

.zimeitiruzhu {
    height: 132px;
}

.bottomjuli {
    /*top: 680px;*/
    margin-top: 102px;
}

.footer {
    clear: both;
    height: 280px;
    background-color: #d6d6d6;
    .footerinner {
        width: 1200px;
        display: block;
        margin: auto;
        color: #999999;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        .left {
            width: 40%;
            font-size: 14px;
            float: left;
            .bottomlogo {
                margin-top: 21px;
                display: block;
            }
            .duli {
                margin-top: 41px;
                text-align: justify;
            }
            .kuai {
                margin-top: 21px;
                width: 408px;
                text-align: justify;
            }
        }
        .center {
            width: 30%;
            padding-left: 64px;
            float: left;
            .lianxi {
                margin-top: 55px;
                font-size: 21px;
                font-weight: normal;
            }
            .info {
                margin-top: 41px;
            }
        }
        .right {
            width: 30%;
            padding-left: 84px;
            float: left;
            .wechat {
                margin-top: 55px;
                font-size: 21px;
                font-weight: normal;
            }
            .erweima {
                margin-top: 40px;
                transition: all 0.5s;
                -webkit-transition: all 0.5s;
                -ms-transition: all 0.5s;
                -moz-transition: all 0.5s;
				width: 118px;
            }
            .erweima:hover {
                cursor: pointer;
                transform: scale(1.2, 1.2);
                -webkit-transform: scale(1.2, 1.2);
                -ms-transform: scale(1.2, 1.2);
                -moz-transform: scale(1.2, 1.2);
            }
        }
    }
}

.navbar-xh {
    position: relative;
    width: 100%;
    height: 50px;
    min-width: 1200px;
    background-color: #de1a20;
    .ul {
        position: relative;
        display: table;
        margin: auto;
        height: 50px;
        width: 1200px;
        .active {
            background-color: #d40e13;
        }
        li {
            height: 50px;
            line-height: 50px;
            color: #ffffff;
            float: left;
            div {
                font-size: 16px;
                padding-left: 25px;
                padding-right: 25px;
                /*font-weight: bold;*/
            }
            div:hover {
                cursor: pointer;
                background-color: #d40e13;
            }
        }
    }
}

.logoinfo {
    height: 80px;
    line-height: 80px;
    width: 1200px;
    margin: auto;
    overflow: hidden;
    position: relative;
    .rightTel {
        position: absolute;
        top: 20px;
        right: 0;
        height: 60px;
        overflow: hidden;
        .leftTel {
            display: block;
            vertical-align: middle;
            margin-right: 12px;
            padding-top: 6px;
            float: left;
        }
        .rightinfo {
            height: 40px;
            float: right;
            .lianxi {
                line-height: 1;
                color: #999999;
                font-size: 14px;
            }
            .tel {
                line-height: 1;
                color: #de1a20;
                font-size: 20px;
                padding-top: 6px;
                font-weight: bold;
            }
        }
    }
    .leftLogo {
        height: 80px;
        line-height: 80px;
        img {
            width: 240px;
            height: 48px;
            margin-top: 16px;
            margin-left: 12px;
            vertical-align: middle;
            float: left;
        }
        .line {
            width: 2px;
            height: 24px;
            background: #e8e8e8;
            margin-left: 12px;
            margin-right: 12px;
            margin-top: 28px;
            float: left;
        }
        .duanshiping {
            font-size: 16px;
            color: #999999;
            height: 80px;
            line-height: 80px;
            font-weight: bold;
            float: left;
        }
    }
}

.i18n {
    height: 32px;
    line-height: 32px;
    color: #999999;
    float: left;
    font-size: 12px;
    padding-left: 12px;
    padding-right: 12px;
    .info {
        position: absolute;
        z-index: 8;
        /*display: none;*/
        width: 100px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border-radius: 2px;
        background-color: #f8f8f8;
        box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.29);
        -webkit-box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.29);
        -moz-box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.29);
        -ms-box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.29);
        top: 42px;
        margin-left: -3px;
        .sanjiao {
            position: absolute;
            top: -20px;
            width: 0px;
            height: 0px;
            border-top: 12px solid transparent;
            border-right: 12px solid transparent;
            border-bottom: 12px solid #f8f8f8;
            border-left: 12px solid transparent;
            left: 50%;
            margin-left: -12px;
        }
    }
    .info:hover {
        background-color: #ececec;
        cursor: pointer;
        .sanjiao {
            border-bottom: 12px solid #ececec;
        }
    }
}

.i18n:hover {
    background-color: #ececec;
    cursor: pointer;
}

.el-button--primary {
    background-color: #ececec !important;
    height: 32px;
    line-height: 32px;
    color: #999999;
    border-color: #ececec !important;
    border-radius: 0 !important;
    font-size: 12px;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
}

.el-button--primary:hover,
.el-button--primary:active {
    color: #999999 !important;
}

.helper {
    color: #999999;
    line-height: 32px;
    font-size: 12px;
    float: right;
}

.mjx-header {
    /*width: 100%;
		-webkit-box-shadow: 0 0 10px #0CC;
		-moz-box-shadow: 0 0 10px #0CC;
		box-shadow: 0 0 10px #0CC;*/
}

a:hover {
    color: #8d8d8d;
    text-decoration: none;
}

.mjx-header .mjx-header-nav ul li:hover {
    background-color: #de1a20;
}

.mjx-header .mjx-header-nav ul li:hover a {
    color: #ffffff !important;
}

.mjx-header .mjx-header-user {
    background-color: #fafafa;
}

.mjx-header .mjx-header-user .mjx-header-user-left span {
    font-size: 12px;
    font-family: HiraginoSansGB-W3;
    font-size: 12px;
    color: #999999;
    height: 32px;
    line-height: 32px;
}

.mjx-header .mjx-header-bar .mjx-header-bar-left {
    height: 80px;
    position: absolute;
    left: 0;
    top: 0;
}

.mjx-header-bar-right {
    position: absolute;
    right: 0;
    top: 0;
    height: 80px;
}

.mjx-header .mjx-header-bar .mjx-header-bar-left img {
    height: 80px;
}

.mjx-header .mjx-header-bar ul.mjx-header-bar-right li .mjx-img {
    display: inline-block;
    width: 60px;
    height: 80px;
    /*background: url(../assets/img/123456.png) no-repeat center center;*/
    background-size: 80%;
}

.mjx-header .mjx-header-bar ul.mjx-header-bar-right li span {
    display: inline-block;
    margin-left: 5px;
    font-size: 16px;
    color: #8b8b8b;
    height: 80px;
    line-height: 80px;
    vertical-align: top;
}

.mjx-header .mjx-header-bar ul.mjx-header-bar-right li .mjx-img i {
    display: block;
    width: 100%;
    height: 100%;
    font-size: 36px;
    text-align: center;
    line-height: 60px;
    color: #fb4b60;
}

[class^='icon-'],
[class*=' icon-'] {
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

i {
    font-style: normal;
}

label {
    /*display: inline-block;
		max-width: 100%;
		margin-bottom: 5px;
		font-weight: bold;*/
}

.mjx-header .mjx-header-bar ul.mjx-header-bar-right li {
    /*margin-top: 10px;
		margin-left: 15px;*/
    height: 80px;
    float: left;
}

.mjx-left {
    float: left;
}

.mjx-header .mjx-header-user .mjx-header-user-back {
    height: 32px;
    background-color: #fafafa;
}

.mjx-header .mjx-header-user .mjx-header-user-left span {
    font-size: 14px;
    color: #8d8d8d;
    height: 32px;
    line-height: 32px;
    background-color: #fafafa;
}

.mjx-header .mjx-header-user .mjx-header-user-left a.mjx-register {
    color: #999999;
}

.mjx-header .mjx-header-user .mjx-header-user-left a {
    font-size: 14px;
    color: #999999;
    display: inline-block;
    margin-left: 20px;
}

.mjx-header .mjx-header-user ul.mjx-header-user-right li a {
    color: #ffffff;
    display: inline-block;
    text-align: center;
    padding-left: 12px;
    padding-right: 12px;
    /*border-right: 2px solid #DE1A20;*/
    display: inline;
    position: relative;
}

.mjx-header .mjx-header-user ul.mjx-header-user-right li a .msginfo-icon {
    position: absolute;
    right: -12px;
    top: -6px;
    width: 10px;
    height: 10px;
    background: red;
    border-radius: 50%;
}

.mjx-header .mjx-header-user ul.mjx-header-user-right li:last-child a {
    border-right: none;
}

.mjx-header .mjx-header-user ul.mjx-header-user-right li {
    float: left;
    font-size: 14px;
    line-height: 32px;
}

.mjx-right {
    float: right;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

.panel {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
}

.panel-top {
    height: 32px;
    line-height: 32px;
    background: #f5f5f5;
    color: #999999;
}

.panel-center {
    background: #ffffff;
    position: relative;
    top: 0;
    bottom: 0px;
    /*overflow: hidden;*/
}

.panel-c-c {
    position: relative;
    right: 0px;
    top: 0px;
    bottom: 0px;
    left: 0;
}

.logo {
    float: left;
    margin: 22px 10px 10px 18px;
}

.tip-logout {
    float: right;
    margin-right: 20px;
    padding-top: 5px;
}

.tip-logout i {
    cursor: pointer;
}

.admin {
    color: #ffffff;
    text-align: center;
}

.mjx-header .mjx-header-user ul.mjx-header-user-right li a:hover {
    color: #fb4b60;
}

.icon-mjx-user:before {
    content: '\e902';
}

.icon-mjx-select:before {
    content: '';
}

.icon-mjx-manage:before {
    content: '\e900';
}

.mjx-header .mjx-header-nav {
    position: absolute;
    top: 0;
    left: 50%;
    background-color: #ffffff;
    margin-left: -214px;
}

.mjx-header .mjx-header-nav ul {
    height: 80px;
    line-height: 80px;
    background-color: #ffffff;
    color: #1b1b1b;
}

.mjx-header .mjx-header-nav ul li.active {
    background-color: #de1a20;
    color: #ffffff;
}

.mjx-header .mjx-header-nav ul li {
    width: 120px;
    height: 80px;
    line-height: 80px;
    float: left;
}

.mjx-header .mjx-header-nav ul li a {
    display: block;
    width: 100%;
    height: 80px;
    text-align: center;
    color: #1b1b1b !important;
    font-size: 16px;
}

.mjx-header .mjx-header-nav ul li.active a {
    color: #ffffff !important;
}

.mjx-header-bar {
    position: relative;
    border-bottom: 1px solid #e9e9e9;
    height: 81px;
}

.border-none {
    border-bottom: none;
    height: 80px;
}

.mjx-width-nav {
}
</style>
