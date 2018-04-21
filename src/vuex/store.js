import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
	pcMainIndex: 0,
	userInfo: {},
	navList: [{
		"name": "首页",
		"url": "/",
		"isCur": true,
	}, {
		"name": "发布任务",
		"url": "/releasetask1",
		"isCur": false,
	}, {
		"name": "我的模特",
		"url": "/mmgroup",
		"isCur": false,
	}, {
		"name": "APP下载",
		"url": "",
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
	}
}

// 创建 store 实例
export default new Vuex.Store({
	actions,
	getters,
	state,
	mutations
})