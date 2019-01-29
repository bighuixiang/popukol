<template>
	<div class="content cases">
    <div class="margin-auto-1200-box">
      <el-container>
          <el-aside width="260px">
              <ul class="aside-bar-box">
                <li class="bar-title">
                  全部案例
                </li>
                <li class="bar-item" v-bind:class="{'is-active': isActive==item.id}" @click="checkBar(item.id)" :key="index" v-for="(item,index) in casesList">
                  {{item.name}}
                </li>
              </ul>
          </el-aside>
          <el-main>
            <div class="main-content-box">
                <span class="main-content-head">
                  {{casesContent!=null?casesContent.name:""}}
                </span>
                <div class="main-content-body" v-html="casesContent!=null?casesContent.content:''">
                </div>
            </div>
          </el-main>
      </el-container>
    </div>
   <!-- <div class="asdasd">
      <span>asdasdas</span>
    </div> -->
    
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isShowI18n: false,
      casesContent: "",
      casesList: "",
      isActive: 0,
      tabPosition: "left",
      keywords: "" //搜索关键字
    };
  },
  mounted() {
    let self = this;
    self.SLS();
    self.getHomeClassicList();
  },
  computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      "getLoginFlag",
      "getNavList",
      "getUserInfo"
      // ...
    ])
  },
  methods: {
    ...mapActions([
      "increment", // 映射 this.increment() 为 this.$store.dispatch('increment')
      "decrement",
      "setloginflag",
      "setuserinfo"
    ]),
    goToUrl(url) {
      let self = this;
      self.$router.push({
        path: url
      });
    },
    getParameterByName(paramName) {
var args = new Object();
var argsStr = location.hash;  //获取URL参数字符串
if (argsStr.length > 0) {
    argsStr = argsStr.substring(argsStr.indexOf('?')+1);
    var nameValueArr = argsStr.split("&");  //多参数
    for (var i = 0; i < nameValueArr.length; i++) {
        var pos = nameValueArr[i].indexOf('=');
        if (pos == -1) continue; //如果没有找到就跳过
        var argName = nameValueArr[i].substring(0, pos); //提取name
        var argVal = nameValueArr[i].substring(pos + 1); //提取value
        args[argName] = unescape(argVal);
    }
    return args[paramName];
}
},
    checkBar(id) {
      this.isActive = id;
      this.getCasesContent(id);
    },
    getCasesContent(id) {
      //经典案例详情
      let self = this;
      self.$http
        .get(self.API.homeClassicItems, {
          params: { categoryId: id }
        })
        .then(
          response => {
            // 响应成功回调
            if (response.data.status == 0) {
              self.casesContent = response.data.data;
            }
          },
          response => {}
        );
    },
    getHomeClassicList() {
      //首页经典案例列表
      let self = this;
      self.$http.get(self.API.homeClassicList).then(
        response => {
          // 响应成功回调
          if (response.data.status == 0) {
            self.casesList = response.data.data;
            var id = self.getParameterByName("id");
            console.log(typeof(id))
            if(typeof(id)!='undefined'){
              // alert(1)
              self.checkBar(id);
            }else{
              self.checkBar(self.casesList[0].id);
            }
            // self.activeHomeClassicList = response.data.data[0].id + "";
            // self.getHomeClassicOtherItems(response.data.data[0].id);
            // console.log("getHomeClassicOtherItems", response.data.data[0].id);
          }
        },
        response => {}
      );
    }
  }
};
</script>

<style lang="scss">
.cases{
.el-tabs--left .el-tabs__active-bar.is-left,
.el-tabs--left .el-tabs__nav-wrap.is-left::after {
  right: auto;
  left: 0px;
}
.aside-bar-box {
  background: #fff;
  width: 260px;
  text-align: center;
  position: relative;
  display: block;
  padding: 10px 0px;
  li {
    position: relative;
    width: 220px;
  }
  .is-active {
    color: #dd2025 !important;
  }
  .is-active::after {
    content: "";
    position: absolute;
    background: #dd2025;
    width: 4px;
    height: 100%;
    left: 0px;
    top: 0px;
  }
  .bar-title {
    font-size: 18px !important;
    font-weight: bold;
    color: #333;
    line-height: 60px;
  }
  .bar-item {
    line-height: 32px;
    margin: 10px 0px;
    font-size: 12px !important;
    color: #333;
    cursor: pointer;
  }
  .bar-item:hover {
    color: #dd2025;
  }
}
.main-content-box {
  margin-left: 20px;
  margin-bottom: 100px;
  min-height: 600px;
  background: #fff;
  .main-content-head {
    font-weight: bold;
    font-size: 18px;
  }
  .main-content-head {
    position: relative;
    line-height: 60px;
    padding-left: 20px;
    display: block;
  }
  .main-content-head::after {
    content: "";
    width: 100%;
    height: 1px;
    left: 0px;
    background: #e8e8e8;
    top: 60px;
    position: absolute;
  }
  .main-content-body {
    padding: 20px;
  }
}
}
</style>

<style lang="scss" scoped>
.el-main {
  padding: 0px;
}
.content {
  width: 100%;
  height: 100%;
  position: relative;
  background: #fafafa;
}
.margin-auto-1200-box {
  width: 1200px;
  margin: 0px auto;
  padding: 20px 0px;
}
</style>