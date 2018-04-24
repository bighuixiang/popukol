import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Home',
		component: resolve => require(['../view/Home.vue'], resolve),
		children: [{
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
			path: '/cases',
			name: 'cases',
			component: resolve => require(['../view/Home/cases.vue'], resolve)
		},{
			path: '/help',
			name: 'help',
			component: resolve => require(['../view/Home/help.vue'], resolve)
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