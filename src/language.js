const languageZN = {
	"msg": "你好"
};
const languageTW = {
	"msg": "hello"
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