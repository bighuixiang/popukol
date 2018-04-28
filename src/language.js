const languageZN = {
	"rightEmail": "请填写正确邮箱地址",
	"rightEmail1": "请填写正确邮箱地址",
	"firstEmail": "请先填写邮箱",
	"noEmailTitle": "邮箱格式错误",
	"length":"长度在 6 到 20 个字符",
	"rightYzm": "请输入验证码",
	"rightPwd": "请输入密码",
	"rightPwdAegin": "请再次输入密码",
	"rightPwdAeginError": "两次输入密码不一致！",
	"rightLogin": "登录成功",
	"rightCompany": "请填写公司名称",
	"rightContactName": "请填写联系人名称",
	"rightContactPhone": "填写正确电话",
	"rightType": "请阅读并同意协议",
	"notSend": "未发送成功",
	"yes": "确定",
	"yzsSendOk": "验证码成功发送至",
	"signUpOk": "注册成功",
	"loginInfoE": "请将登陆信息填写完整",
	"sendOk": "发送成功",
	
	
	
};
const languageTW = {
	"rightEmail": "請填寫正確郵箱地址",
	"rightEmail1": "請填寫正確郵箱地址",
	"firstEmail": "请先填写邮箱",
	"noEmailTitle": "邮箱格式错误",
	"length":"長度在 6 到 20 個字符",
	"rightYzm": "請輸入驗證碼",
	"rightPwd": "請輸入密碼",
	"rightPwdAegin": "請再次輸入密碼",
	"rightPwdAeginError": "兩次輸入密碼不壹致！",
	"rightLogin": "登錄成功",
	"rightCompany": "請填寫公司名稱",
	"rightContactName": "請填寫聯系人名稱",
	"rightContactPhone": "填寫正確電話",
	"rightType": "請閱讀並同意協議",
	"notSend": "未發送成功",
	"yes": "確定",
	"yzsSendOk": "驗證碼成功發送至",
	"signUpOk": "註冊成功",
	"loginInfoE": "請將登陸信息填寫完整",
	"sendOk": "發送成功",
	
	
	
};
export const getLanguage = () => {
	let languageType = window.localStorage.getItem("languageType");
	if(languageType != null && languageType != '') {
		if(languageType==2){
			return languageTW;
		}
	}
	return languageZN;
} 