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
//GET   ===> 首页经典案例详情
export const homeClassicItems = `${IP}/classic/case/record/info`
//GET   ===> 首页优质资源详情2
export const homeClassicOtherItems = `${IP}/classic/case/brief/info`
//GET   ===> 首页合作伙伴列表
export const homePartnerList = `${IP}/partner/record/list`
//GET   ===> 验证码图片
export const captchaApi = `${IP}/user/captcha`
//GET   ===> 验证码邮箱
export const emailApi = `${IP}/user/register/code`
//POST  ===> 注册
export const signUpApi = `${IP}/user/register`
//POST  ===> 登录
export const loginApi = `${IP}/user/login`
//POST  ===> 退出登录
export const loginOutApi = `${IP}/user/logout`

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
export const weboAccountListAPI = `${IP}/webo/account/`