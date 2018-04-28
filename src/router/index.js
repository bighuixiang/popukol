import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Home',
		component: resolve => require(['../view/Home.vue'], resolve),
		children: [{
			path: '/dsp',
			name: 'DSP广告页面',
			component: resolve => require(['../view/Home/Dsp.vue'], resolve)
		},{
			path: '/',
			component: resolve => require(['../view/Home/Index.vue'], resolve),
			name: '首页'
		},{
			path: '/wechat',
			component: resolve => require(['../view/Home/WeChat.vue'], resolve),
			name: '微信'
		},{
			path: '/weibo',
			component: resolve => require(['../view/Home/Weibo.vue'], resolve),
			name: '微博'
		},{
			path: '/redbook',
			component: resolve => require(['../view/Home/RedBook.vue'], resolve),
			name: '小红书'
		},{
			path: '/talent',
			component: resolve => require(['../view/Home/Talent.vue'], resolve),
			name: '淘宝/京东达人'
		},{
			path: '/headlines',
			component: resolve => require(['../view/Home/Headlines.vue'], resolve),
			name: '头条/知乎/豆瓣'
		},{
			path: '/facebook',
			component: resolve => require(['../view/Home/Facebook.vue'], resolve),
			name: 'Facebook/twitter'
		},{
			path: '/shortvideo',
			component: resolve => require(['../view/Home/ShortVideo.vue'], resolve),
			name: '直播/短视频'
		},{
			path: '/newsweb',
			component: resolve => require(['../view/Home/Newsweb.vue'], resolve),
			name: '新闻网站'
		},{
			path: '/forumbar',
			component: resolve => require(['../view/Home/Forumbar.vue'], resolve),
			name: '论坛贴吧'
		},
		{
			path: '/cases',
			name: 'cases',
			component: resolve => require(['../view/Home/cases.vue'], resolve)
		},{
			path: '/helper',
			name: 'helper',
			component: resolve => require(['../view/Home/help.vue'], resolve)
		}]
	}, {
		path: '/Release',
		name: 'Release',
		component: resolve => require(['../view/Home/Release.vue'], resolve),
		children: [{
			path: '/Check',
			name: '选择渠道',
			component: resolve => require(['../view/Home/Check.vue'], resolve)
		}]
	}, {
		path: '/signUp',
		name: 'signUp',
		component: resolve => require(['../view/Home/signUp.vue'], resolve)
	}, {
		path: '/Login',
		name: 'Login',
		component: resolve => require(['../view/Home/Login.vue'], resolve)
	},{
		path: '/reSetPwd',
		name: 'reSetPwd',
		component: resolve => require(['../view/Home/reSetPwd.vue'], resolve)
	}, {
		path: '*',
		name: 'Home',
		component: resolve => require(['../view/Home.vue'], resolve),
		children: [{
			path: '/',
			component: resolve => require(['../view/Home/Index.vue'], resolve),
			name: '首页'
		}]
	}]
})