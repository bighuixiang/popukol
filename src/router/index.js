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
		}, {
			path: '/wechat',
			component: resolve => require(['../view/Home/WeChat.vue'], resolve),
			name: '微信'
		}]
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