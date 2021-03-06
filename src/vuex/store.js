import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
	loginFlag: false,
	isShowRed: false,
	pcMainIndex: 0,
	userInfo: {},
	tfActiveIndex: "1",
	adminType: 1, //1 投放需求   2.放开  3.
	releaseObj: {},
	tfActiveIndex: '1',
	leftNavList: [{
		"name": "微信",
		"url": "/wechatxhtg",
		"isCur": true,
	}, {
		"name": "微博",
		"url": "/weiboxhtg",
		"isCur": false,
	}, {
		"name": "小红书",
		"url": "/redbookxhtg",
		"isCur": false,
	}, {
		"name": "淘宝/京东达人",
		"url": "/talentxhtg",
		"isCur": false,
	}, {
		"name": "直播/短视频",
		"url": "/shortvideoxhtg",
		"isCur": false,
	}, {
		"name": "头条/知乎/豆瓣",
		"url": "/headlinesxhtg",
		"isCur": false,
	}, {
		"name": "Facebook/Twitter",
		"url": "/facebookxhtg",
		"isCur": false,
	}, {
		"name": "新闻网站",
		"url": "/newswebxhtg",
		"isCur": false,
	}, {
		"name": "论坛贴吧",
		"url": "/forumbarxhtg",
		"isCur": false,
	}],
	tfLeftList: [{
		"name": "微信投放需求",
		"url": "/publictfxq?pid=1",
		"isCur": true,
	}, {
		"name": "微博投放需求",
		"url": "/publictfxq?pid=2",
		"isCur": false,
	}, {
		"name": "小红书投放需求",
		"url": "/publictfxq?pid=3",
		"isCur": false,
	}, {
		"name": "淘宝/京东达人投放需求",
		"url": "/publictfxq?pid=4",
		"isCur": false,
	}, {
		"name": "直播/短视频投放需求",
		"url": "/publictfxq?pid=5",
		"isCur": false,
	}, {
		"name": "头条/知乎/豆瓣投放需求",
		"url": "/publictfxq?pid=6",
		"isCur": false,
	}, {
		"name": "Facebook/Twitter投放需求",
		"url": "/publictfxq?pid=7",
		"isCur": false,
	}, {
		"name": "新闻网站投放需求",
		"url": "/publictfxq?pid=9",
		"isCur": false,
	}, {
		"name": "论坛贴吧投放需求",
		"url": "/publictfxq?pid=10",
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
	INCREMENT(state, obj) {
		let type, index;
		if(typeof obj.type != "undefined") {
			type = obj.type;
			index = obj.val;
			switch(type) {
				case 1:
					for(let i = 0; i < state.tfLeftList.length; i++) {
						if(i == index)
							state.tfLeftList[i].isCur = true
						else
							state.tfLeftList[i].isCur = false
					}
					break;
				case 2:
					state.adminType = index;
					break;
				case 3:
					state.tfActiveIndex = index + '';
					break;
				case 4:
					for(let i = 0; i < state.leftNavList.length; i++) {
						if(i == index)
							state.leftNavList[i].isCur = true
						else
							state.leftNavList[i].isCur = false
					}
					break;
				case 5:
					state.isShowRed = index
					break;

				default:
					break;
			}
		} else {
			for(let i = 0; i < state.navList.length; i++) {
				if(i == obj)
					state.navList[i].isCur = true
				else
					state.navList[i].isCur = false
			}
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
	SETRELEASEOBJ(state, releaseObj) {
		state.releaseObj = releaseObj
	},
	SETTFACTIVEINFO(state, index) {
		state.tfActiveIndex = index
	},
	//	SETADMINTYPE(state, type) {
	//		state.adminType = type
	//	}

}

// 创建 store 实例
export default new Vuex.Store({
	actions,
	getters,
	state,
	mutations
})