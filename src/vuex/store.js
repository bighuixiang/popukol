import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
	loginFlag :false,
	pcMainIndex: 0,
	userInfo: {},
	navList: [{
		"name": "首页",
		"url": "/",
		"isCur": true,
	}, {
		"name": "微信",
		"url": "/wechat",
		"isCur": false,
	}, {
		"name": "微博",
		"url": "/weibo",
		"isCur": false,
	}, {
		"name": "小红书",
		"url": "/redbook",
		"isCur": false,
	}, {
		"name": "淘宝/京东达人",
		"url": "/talent",
		"isCur": false,
	}, {
		"name": "直播/短视频",
		"url": "/mmgroup",
		"isCur": false,
	}, {
		"name": "头条/知乎/豆瓣",
		"url": "/headlines",
		"isCur": false,
	}, {
		"name": "Facebook/Twitter",
		"url": "/mmgroup",
		"isCur": false,
	}, {
		"name": "新媒体全案",
		"url": "/mmgroup",
		"isCur": false,
	}, {
		"name": "更多",
		"url": "/mmgroup",
		"isCur": false,
	}],
}

// 定义所需的 mutations
const mutations = {
	INCREMENT(state, index) {
		for(let i = 0; i < state.navList.length; i++) {
			if(i == index)
				state.navList[i].isCur = true
			else
				state.navList[i].isCur = false
		}
	},
	DECREMENT(state, index) {
		state.pcMainIndex = index
	},
	SETUSERINFO(state, userInfo) {
		state.userInfo = userInfo
	},
	SETLOGINFLAG(state, loginFlag) {
		state.loginFlag = loginFlag
	},
}

// 创建 store 实例
export default new Vuex.Store({
	actions,
	getters,
	state,
	mutations
})