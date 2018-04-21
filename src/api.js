//http://myshowbusiness.nullwei.com
const IP = '/v1.0/web/'

//配置管理   ===>集群名称
export const indexList = `${IP}/index`

//上传模块   ===>上传接口（通用）
export const fileUpload = `${IP}file/fileUpload`

//=================> 商家模块  开始 <================== 

//商家模块   ===>商家注册发送验证码
export const registerCode = `${IP}sms/registerCode`

//商家模块   ===>商家注册
export const register = `${IP}userInfo/register`

//商家模块   ===>商家登陆
export const login = `${IP}userInfo/login`

//商家模块   ===>商家是否登陆
export const checkLogined = `${IP}userInfo/checkLogined`

//商家模块   ===>商家登出
export const logout = `${IP}userInfo/logout`

//=================> 商家模块  结束 <==================

//=================> 任务模块 开始<==================

//商家模块   ===>我的任务列表
export const myTasks = `${IP}task/myTasks`

//商家模块   ===>我的任务列表
export const calculateDeposit = `${IP}task/calculateDeposit`

//商家模块   ===>任务计划列表
export const getTaskPlanLis = `${IP}taskPlanList/getTaskPlanList`

//商家模块   ===>发布任务（one）
export const createTaskInfoStepOne = `${IP}task/createTaskInfoStepOne`

//商家模块   ===>发布任务（two）
export const createTaskInfoStepTwo = `${IP}task/createTaskInfoStepTwo`

//商家模块   ===>发布任务（three）
export const createTaskInfoStepThree = `${IP}task/createTaskInfoStepThree`

//商家模块   ===>发布任务（four）
export const createTaskInfoStepFour = `${IP}task/createTaskInfoStepFour`

//商家模块   ===>发布任务（five）
export const createTaskInfoStepFive = `${IP}task/createTaskInfoStepFive`

//=================> 任务模块 结束<==================

//=================> 店铺模块 开始<==================

//店铺模块   ===>我的店铺列表
export const myShops = `${IP}shop/myShops`

//店铺模块   ===>添加店铺
export const addShop = `${IP}shop/addShop`

//店铺模块   ===>修改店铺
export const updateShop = `${IP}shop/updateShop`

//店铺模块   ===>获取区域列表
export const getRegionList = `${IP}region/getRegionList`

//店铺模块   ===>获取平台列表
export const platFormList = `${IP}system/platForm`

//店铺模块   ===>获取分类列表
export const getCategoryList = `${IP}category/getCategoryList`

//店铺模块   ===>根据店铺ID获取店铺信息
export const getShopInfo = `${IP}shop/id`

//=================> 店铺模块 结束<==================

//分组模块   ===>创建分组
export const addModelGroup = `${IP}sellerModelGroup/add`
//分组模块   ===>修改分组
export const updateModelGroup = `${IP}sellerModelGroup/update`
//分组模块   ===>获取分组列表
export const getModelGroupList = `${IP}sellerModelGroup/list`
//模特模块   ===>根据分组获取模特列表
export const findByIdSellerModel = `${IP}sellerModel/findById`
//模特模块   ===>分组移除模特
export const removeSellerModel = `${IP}sellerModel/remove`
//模特模块   ===>分组移动模特
export const moveSellerModel = `${IP}sellerModel/move`
//模特模块   ===>分组新增模特
export const sellerModelGroupAdd = `${IP}sellerModel/add`
//模特模块   ===>首页模特
export const modelIndexList = `${IP}model/index`
//模特模块   ===>首页模特
export const modelDetailList = `${IP}model/id`
//系统模块   ===>获取收款账户列表
export const sysbankList = `${IP}sysbank/list`

//个人中心   ===>个人中心基本信息
export const center = `${IP}userInfo/center`
//平台模特接口   ===>平台模特列表
export const platformmodelList = `${IP}platformmodel/list`
//获取模特等级列表 ===>获取模特等级列表
export const modellevelList = `${IP}modellevel/list`
//获取模特标签 ===>获取模特标签
export const subtagsList = `${IP}subtags/list`
//商家忘记密码 ===>商家忘记密码
export const userInfoResetPwd = `${IP}userInfo/resetPwd`
//商家忘记密码短信发送 ===>商家忘记密码短信发送
export const smsResetPwdCode = `${IP}sms/resetPwdCode`
//任务 ===>任务详情
export const getTaskInfoDetail = `${IP}taskdetail/getTaskInfoDetail`
//首页 ===>首页BannerLit
export const getBannerList = `${IP}banner/getBannerList`
//会员中心 ===>升级
export const pushMemberUpgradeList = `${IP}upgrade/pushMemberUpgradeList`
//填写商家升级打款记录 ===>填写商家升级打款记录
export const getSellerUpgradeSelect = `${IP}upgrade/getSellerUpgradeSelect`
//我合作过的模特列表 ===>我合作过的模特列表
export const sellercooperationList = `${IP}sellercooperation/list`
//个人中心--待处理订单 与 个人中心--我的订单 共用：共用共用
export const pushTaskOrderList = `${IP}order/pushTaskOrderList`
//个人中心--待处理订单 与 个人中心 待发货状态订单操作选项：发货
export const sendOrderGoods = `${IP}order/sendOrderGoods`
//个人中心--待审核状态订单操作选项：通过审核， 驳回
export const photoAuth = `${IP}order/photoAuth`
//个人中心--待确认退回状态订单操作选项：确认退回
export const comfiredGoods = `${IP}order/comfiredGoods`
//个人中心--订单进展 
export const getOrderProgress = `${IP}order/getOrderProgress`
//个人中心--我的评价模块
export const pushApraiseList = `${IP}appraise/pushApraiseList`
//个人中心--获取第五步任务数据
export const getTaskInfoStepFiveInfo = `${IP}task/getTaskInfoStepFiveInfo`
//个人中心---平台模特---模特详情中照片
export const getModelAuthRecordById = `${IP}model/getModelAuthRecordById`
//发布任务1-回填
export const taskById = `${IP}task/taskById`
//获取银行列表
export const pushBusinessBankList = `${IP}bank/pushBusinessBankList`
//根据ID获取银行信息
export const getBusinessBankEditById = `${IP}bank/getBusinessBankEditById`
//添加银行卡
export const addBusinessBank = `${IP}bank/addBusinessBank`
//添加银行卡
export const deleteBusinessBank = `${IP}bank/deleteBusinessBank`
//修改银行卡
export const updateBusinessBank = `${IP}bank/updateBusinessBank`
//资金明细
export const pushSellerWalletFlowList = `${IP}wallet/pushSellerWalletFlowList`
//推广收入
export const pushShareprofitFlowList = `${IP}wallet/pushShareprofitFlowList`
//账户充值
export const saveSellerRecharge = `${IP}wallet/saveSellerRecharge`
//获取温馨提示列表： ###刷拍(试客任务才有)
export const pushTaskTwoWarmTipsListAPI = `${IP}tips/pushTaskTwoWarmTipsList`
//商家个人中心---平台模特---相册展示
export const getModelAlbumListByModelId = `${IP}model/getModelAlbumListByModelId`
//商家个人中心---平台模特---相册展示
export const setBankUpdateDefaultBank = `${IP}bank/setBankUpdateDefaultBank`
// 获取充值金额小数
export const getRechargeBankInfo = `${IP}wallet/getRechargeBankInfo`
// 查看充值详细信息
export const getRechargeById = `${IP}wallet/getRechargeById`
// 获取充值记录列表/资金明细
export const pushRechargeList = `${IP}wallet/pushRechargeList`
// 获取站点信息接口/获取站点信息接口
export const getSellerStationInfo = `${IP}userInfo/getSellerStationInfo`
//跳转到提现界面获取钱包信息
export const getExtractUserWallet = `${IP}extract/getExtractUserWallet`
//发起提现
export const addSellerExtract = `${IP}extract/addSellerExtract`
// 修改密码
export const resetUserPwd = `${IP}userInfo/resetUserPwd`
// 评价模特
export const appraiseModel = `${IP}appraise/submit`
//获取站内信列表
export const pushMessageInfoList = `${IP}message/pushMessageInfoList`
// 商家后台---站内信---查看信息
export const getMessageInfo = `${IP}message/getMessageInfo`
// 商家后台---站内信---删除信息
export const deleteMessageInfo = `${IP}message/deleteMessageInfo`
// 商家后台---账户管理---新增基本资料
export const getMyInfo = `${IP}userInfo/getMyInfo`
// 商家后台---获取银行列表
export const bankCategoryList = `${IP}bankCategory/list`
// 商家后台---会员中心点击立即开通---返回值 1.跳到添加店铺页面  2.显示提示信息 3秒后跳到充值页面
export const allowAddShop = `${IP}shop/allowAddShop`
// 商家后台---店铺管理---新增账户所需支付金额
export const getShopPrice = `${IP}shop/getShopPrice`
// 商家后台---店铺管理---新增账户所需支付金额
export const updateUserInfo = `${IP}userInfo/updateUserInfo`