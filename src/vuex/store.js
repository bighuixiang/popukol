import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
	loginFlag: false,
	pcMainIndex: 0,
	userInfo: {},
	tfActiveIndex: '1',
	tfLeftList: [{
		"name": "微信投放需求",
		"url": "/wechattfxq",
		"isCur": true,
	}, {
		"name": "微博投放需求",
		"url": "/weibotfxq",
		"isCur": false,
	}, {
		"name": "小红书投放需求",
		"url": "/redbooktfxq",
		"isCur": false,
	}, {
		"name": "淘宝/京东达人投放需求",
		"url": "/talentfxq",
		"isCur": false,
	}, {
		"name": "直播/短视频投放需求",
		"url": "/shortvideotfxq",
		"isCur": false,
	}, {
		"name": "头条/知乎/豆瓣投放需求",
		"url": "/headlinestfxq",
		"isCur": false,
	}, {
		"name": "Facebook/Twitter投放需求",
		"url": "/facebooktfxq",
		"isCur": false,
	}, {
		"name": "新闻网站投放需求",
		"url": "/newswebtfxq",
		"isCur": false,
	}, {
		"name": "论坛贴吧投放需求",
		"url": "/forumbartfxq",
		"isCur": false,
	}],
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
		"url": "/shortvideo",
		"isCur": false,
	}, {
		"name": "头条/知乎/豆瓣",
		"url": "/headlines",
		"isCur": false,
	}, {
		"name": "Facebook/Twitter",
		"url": "/facebook",
		"isCur": false,
	}, {
		"name": "新媒体全案",
		"url": "http://www.fnewmedia.com/",
		"isCur": false,
	}, {
		"name": "更多",
		"url": "",
		"isCur": false,
	}],
}

// 定义所需的 mutations
const mutations = {
	INCREMENT(state, index, type) {
		switch(type) {
			case 1:
				for(let i = 0; i < state.tfActiveIndex.length; i++) {
					if(i == index)
						state.tfActiveIndex[i].isCur = true
					else
						state.tfActiveIndex[i].isCur = false
				}
				break;
			default:
				for(let i = 0; i < state.navList.length; i++) {
					if(i == index)
						state.navList[i].isCur = true
					else
						state.navList[i].isCur = false
				}
				break;
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
	SETTFACTIVEINFO(state, index) {
		state.tfActiveIndex = index
	}
}

// 创建 store 实例
export default new Vuex.Store({
	actions,
	getters,
	state,
	mutations
})