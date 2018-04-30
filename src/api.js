//http://myshowbusiness.nullwei.com
const IP = '/web'

//GET   ===> 首页轮播图片
export const sliderList = `${IP}/slider/pic/list`
//GET   ===> 首页优质资源分类列表
export const homeCategoryList = `${IP}/platform/account/top/category`
//GET   ===> 首页优质资源详情列表
export const homeCategoryItems = `${IP}/platform/account/top/list`
//GET   ===> 首页经典案例列表
export const homeClassicList = `${IP}/classic/case/category/list`
//GET   ===> 单独页经典案例详情
export const homeClassicItems = `${IP}/classic/case/record/info`
//GET   ===> 帮助中心list
export const helpList = `${IP}/support/center/type/list`
//GET   ===> 帮助中心详情
export const helpItems = `${IP}/support/center/record/info`
//POST   ===> 预留电话接口DSP
export const dspApi = `${IP}/visit/message/record/add`
//GET   ===> 首页优质资源详情2
export const homeClassicOtherItems = `${IP}/classic/case/brief/info`
//GET   ===> 首页合作伙伴列表
export const homePartnerList = `${IP}/partner/record/list`
//GET   ===> 验证码图片登录用
export const captchaApi = `${IP}/user/captcha`
//GET   ===> 验证码邮箱注册用
export const emailApi = `${IP}/user/register/code`
//GET   ===> 验证码邮箱重置密码用
export const reSetEmailApi = `${IP}/user/reset/code`
//POST  ===> 注册
export const signUpApi = `${IP}/user/register`
//POST  ===> 登录
export const loginApi = `${IP}/user/login`
//POST  ===> 退出登录
export const loginOutApi = `${IP}/user/logout`
//POST  ===> 重置密码
export const reSetApi = `${IP}/user/reset/pwd`
//GET  ===> 用户信息
export const userInfoApi = `${IP}/user/info`

//GET   ===> 账号分类列表
export const recordList = `${IP}/platform/category/record/list`
//GET   ===> 账号分类-（2）通过子分类请求
export const subRecordList = `${IP}/platform/sub/category/record/list`
//GET   ===> 区域-省
export const provinceList = `${IP}/region/province/list`
//GET   ===> 区域-市
export const cityList = `${IP}/region/city/list`
//GET   ===> 分页-微信
export const wechatAccountListAPI = `${IP}/wechat/account/`
//GET   ===> 分页-微博
export const weiboAccountListAPI = `${IP}/weibo/account/`
//GET   ===> 分页-小红书
export const xhsListAPI = `${IP}/xhs/account/`
//GET   ===> 分页-达人
export const talentListAPI = `${IP}/daren/account/`
//GET   ===> 分页-直播/短视频
export const videoListAPI = `${IP}/video/account/`
//GET   ===> 分页-知乎
export const headlinesListAPI = `${IP}/tzb/account/`
//GET   ===> 分页-Facebook
export const facebookListAPI = `${IP}/ft/account/`
//GET   ===> 分页-新闻
export const newsListAPI = `${IP}/news/account/`
//GET   ===> 分页-论坛
export const forumListAPI = `${IP}/forum/account/`
//GET   ===> 分页-查询子平台数据
export const subPlatformListAPI = `${IP}/platform/sub/record/list`
//GET   ===> 首页头部导航列表
export const topNavListAPI = `${IP}/platform/record/list`
//GET   ===> 首页头部导航列表
export const langAPI = `${IP}/lang/type/`

//GET   ===> 广告主后台  预约单个投放
export const addAccountAPI = `${IP}/manage/pop/account/single/submit`
//GET   ===> 广告主后台  非正常流程-添加选号车
export const addAccountCarAPI = `${IP}/manage/pop/account/add`
//GET   ===> 广告主后台  非正常流程-加载选号车数据
export const addAccountCarListAPI = `${IP}/manage/pop/account/record/list`
//GET   ===> 广告主后台  非正常流程-选号车更改广告位类型
export const editAccountCarAPI = `${IP}/manage/pop/account/ad/edit`
//GET   ===> 广告主后台  非正常流程-删除选号
export const removeAccountCarAPI = `${IP}/manage/pop/account/remove`
//GET   ===> 广告主后台  非正常流程-清空选号车
export const removeAllAccountCarAPI = `${IP}/manage/pop/account/all/delete`
