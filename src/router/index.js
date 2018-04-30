import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Home',
			meta: {
				requiresAuth: false
			},
			component: resolve => require(['../view/Home.vue'], resolve),
			children: [{
					path: '/dsp',
					name: 'DSP广告页面',
					meta: {
						requiresAuth: false
					},
					component: resolve => require(['../view/Home/Dsp.vue'], resolve)
				}, {
					path: '/',
					component: resolve => require(['../view/Home/Index.vue'], resolve),
					meta: {
						requiresAuth: false
					},
					name: '首页'
				}, {
					path: '/wechat',
					component: resolve => require(['../view/Home/WeChat.vue'], resolve),
					meta: {
						requiresAuth: false
					},
					name: '微信'
				}, {
					path: '/weibo',
					component: resolve => require(['../view/Home/Weibo.vue'], resolve),
					meta: {
						requiresAuth: false
					},
					name: '微博'
				}, {
					path: '/redbook',
					component: resolve => require(['../view/Home/RedBook.vue'], resolve),
					meta: {
						requiresAuth: false
					},
					name: '小红书'
				}, {
					path: '/talent',
					component: resolve => require(['../view/Home/Talent.vue'], resolve),
					meta: {
						requiresAuth: false
					},
					name: '淘宝/京东达人'
				}, {
					path: '/headlines',
					component: resolve => require(['../view/Home/Headlines.vue'], resolve),
					meta: {
						requiresAuth: false
					},
					name: '头条/知乎/豆瓣'
				}, {
					path: '/facebook',
					component: resolve => require(['../view/Home/Facebook.vue'], resolve),
					meta: {
						requiresAuth: false
					},
					name: 'Facebook/twitter'
				}, {
					path: '/shortvideo',
					component: resolve => require(['../view/Home/ShortVideo.vue'], resolve),
					meta: {
						requiresAuth: false
					},
					name: '直播/短视频'
				}, {
					path: '/newsweb',
					component: resolve => require(['../view/Home/Newsweb.vue'], resolve),
					meta: {
						requiresAuth: false
					},
					name: '新闻网站'
				}, {
					path: '/forumbar',
					component: resolve => require(['../view/Home/Forumbar.vue'], resolve),
					meta: {
						requiresAuth: false
					},
					name: '论坛贴吧'
				},
				{
					path: '/cases',
					name: 'cases',
					meta: {
						requiresAuth: false
					},
					component: resolve => require(['../view/Home/cases.vue'], resolve)
				}, {
					path: '/helper',
					name: 'helper',
					meta: {
						requiresAuth: false
					},
					component: resolve => require(['../view/Home/help.vue'], resolve)
				}
			]
		},
		{
			path: '/signUp',
			name: 'signUp',
			meta: {
				requiresAuth: false
			},
			component: resolve => require(['../view/Home/signUp.vue'], resolve)
		},
		{
			path: '/Login',
			name: 'Login',
			meta: {
				requiresAuth: false
			},
			component: resolve => require(['../view/Home/Login.vue'], resolve)
		},
		{
			path: '/reSetPwd',
			name: 'reSetPwd',
			meta: {
				requiresAuth: false
			},
			component: resolve => require(['../view/Home/reSetPwd.vue'], resolve)
		},
		{
			path: '/admin',
			name: 'Admin',
			meta: {
				requiresAuth: true
			},
			component: resolve => require(['../view/Admin.vue'], resolve),
			children: [{
				path: '/UserCenter',
				component: resolve => require(['../view/admin/UserCenter.vue'], resolve),
				meta: {
					requiresAuth: true
				},
				name: '个人中心'
			},{
				path: '/Release',
				name: 'Release',
				meta: {
					requiresAuth: true
				},
				component: resolve => require(['../view/Home/Release.vue'], resolve),
				children: [{
					path: '/Check',
					name: '选择渠道',
					meta: {
						requiresAuth: true
					},
					component: resolve => require(['../view/Home/Check.vue'], resolve)
				}, {
					path: '/Activities',
					name: '填写活动内容',
					meta: {
						requiresAuth: true
					},
					component: resolve => require(['../view/Home/Activities.vue'], resolve)
				}, {
					path: '/SendActivities',
					name: '提交活动',
					meta: {
						requiresAuth: true
					},
					component: resolve => require(['../view/Home/SendActivities.vue'], resolve)
				}]
			}, {
				path: '/wechattfxq',
				component: resolve => require(['../view/admin/WeChatTFXQ.vue'], resolve),
				meta: {
					requiresAuth: true
				},
				name: '微信投放需求'
			}, {
				path: '/wechatxhtg',
				component: resolve => require(['../view/admin/WeChatxhtg.vue'], resolve),
				meta: {
					requiresAuth: true
				},
				name: '微信选号推广'
			}, {
				path: '/weiboxhtg',
				component: resolve => require(['../view/admin/Weiboxhtg.vue'], resolve),
				meta: {
					requiresAuth: true
				},
				name: '微博选号推广'
			}, {
				path: '/redbookxhtg',
				component: resolve => require(['../view/admin/RedBookxhtg.vue'], resolve),
				meta: {
					requiresAuth: true
				},
				name: '小红书选号推广'
			}, {
				path: '/talentxhtg',
				component: resolve => require(['../view/admin/Talentxhtg.vue'], resolve),
				meta: {
					requiresAuth: true
				},
				name: '淘宝/京东达人选号推广'
			}, {
				path: '/headlinesxhtg',
				component: resolve => require(['../view/admin/Headlinesxhtg.vue'], resolve),
				meta: {
					requiresAuth: true
				},
				name: '头条/知乎/豆瓣选号推广'
			}, {
				path: '/facebookxhtg',
				component: resolve => require(['../view/admin/Facebookxhtg.vue'], resolve),
				meta: {
					requiresAuth: true
				},
				name: 'Facebook/twitter选号推广'
			}, {
				path: '/shortvideoxhtg',
				component: resolve => require(['../view/admin/ShortVideoxhtg.vue'], resolve),
				meta: {
					requiresAuth: true
				},
				name: '直播/短视频选号推广'
			}, {
				path: '/newswebxhtg',
				component: resolve => require(['../view/admin/Newswebxhtg.vue'], resolve),
				meta: {
					requiresAuth: true
				},
				name: '新闻网站选号推广'
			}, {
				path: '/forumbarxhtg',
				component: resolve => require(['../view/admin/Forumbarxhtg.vue'], resolve),
				meta: {
					requiresAuth: true
				},
				name: '论坛贴吧选号推广'
			}, ]
		},
		{
			path: '*',
			name: 'Home',
			component: resolve => require(['../view/Home.vue'], resolve),
			meta: {
				requiresAuth: false
			},
			children: [{
				path: '/',
				component: resolve => require(['../view/Home/Index.vue'], resolve),
				meta: {
					requiresAuth: false
				},
				name: '首页'
			}]
		}
	]
})