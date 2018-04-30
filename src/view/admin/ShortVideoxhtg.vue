<template>
	<div class="content">
		<!-- start 搜索 -->
		<div class="search">
			<el-input class="input" placeholder="请输入搜索关键字" prefix-icon="el-icon-search" v-model="params.keywords"></el-input>
			<el-button @click="search" class="btn" type="primary">搜索</el-button>
		</div>
		<!-- end 搜索 -->
		<!-- start 账号分类 -->
		<div class="condition">
			<div class="item">
				<div class="title">直播平台</div>
				<div class="right">
					<div class="buxian" :class="{'cur':platfromIndex==0}" @click="setPlatform(0,0)">
						<span>不限</span>
					</div>
					<div class="list">
						<div @click="setPlatform(index+1,item.id)" v-if="item.typeFlag==1" :class="{'cur':platfromIndex==index+1}" v-for="(item,index) in platformList"><span>{{item.name}}</span></div>
					</div>
					<div class="filter">
						<el-checkbox-group @change="videoChange" class="checkList" v-model="videoList">
							<el-checkbox label="只看直播账号" style="color: #888888;"></el-checkbox>
						</el-checkbox-group>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="title">视频平台</div>
				<div class="right">
					<div class="buxian" :class="{'cur':platfromIndex1==0}" @click="setPlatform1(0,0)">
						<span>不限</span>
					</div>
					<div class="list">
						<div @click="setPlatform1(index+1,item.id)" v-if="item.typeFlag==2" :class="{'cur':platfromIndex1==index+1}" v-for="(item,index) in platformList"><span>{{item.name}}</span></div>
					</div>
					<div class="filter">
						<el-checkbox-group @change="videoChange" class="checkList" v-model="videoList">
							<el-checkbox label="只看视频账号" style="color: #888888;"></el-checkbox>
						</el-checkbox-group>
					</div>
				</div>
			</div>
			<div class="item kuozhan">
				<div class="title">账号分类</div>
				<div class="right">
					<div class="buxian" :class="{'cur':recordIndex==0}" @click="setRecord(0,0)">
						<span>不限</span>
					</div>
					<div class="list">
						<div v-for="(item,index) in recordTypeList" @click="setRecord(index+1,item.id)" :class="{'cur':recordIndex==index+1}"><span>{{item.name}}</span></div>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="title">粉 丝 数</div>
				<div class="right">
					<div class="buxian" :class="{'cur':fansIndex==0}" @click="setFans(0)">
						<span>不限</span>
					</div>
					<div class="list">
						<div @click="setFans(index+1,item.id)" :class="{'cur':fansIndex==index+1}" v-for="(item,index) in ['1万以下','1万-5万','5万-10万','10万-20万','20万-50万','50万-100万','100万以上']"><span>{{item}}</span></div>
					</div>
					<div class="filter">
						<el-input class="inputwidth" size="mini" v-model="params.fanss.min" placeholder="万"></el-input>
						<div class="hengxian"></div>
						<el-input class="inputwidth" size="mini" v-model="params.fanss.max" placeholder="万"></el-input>
						<el-button @click="searchFans" class="btn" type="primary" size="mini">确定</el-button>
						<span class="canlen" @click="setFans(0)">取消</span>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="title">参考报价</div>
				<div class="right">
					<div class="buxian" :class="{'cur':priceIndex==0}" @click="setPrice(0)">
						<span>不限</span>
					</div>
					<div class="list" style="width: 586px;padding-right: 148px;">
						<div @click="setPrice(index+1,item.id)" :class="{'cur':priceIndex==index+1}" v-for="(item,index) in ['1000元以下','1000-3000元','3000-5000元','5000-10000元','10000元以上']"><span>{{item}}</span></div>
					</div>
					<div class="filter">
						<!--<el-dropdown @command="bjtype" trigger="click" class="xiala">
							<span class="el-dropdown-link type">
   								 {{bjtypeobj.name}}
   								 <i class="el-icon-arrow-down el-icon--right"></i>
  							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item command="{'id':'1','name':'头条'}">淘宝头条</el-dropdown-item>
								<el-dropdown-item command="{'id':'0','name':'次条'}">淘宝次条</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>-->
						<el-input class="inputwidth" size="mini" v-model="params.prices.min" placeholder="元"></el-input>
						<div class="hengxian"></div>
						<el-input class="inputwidth" size="mini" v-model="params.prices.max" placeholder="元"></el-input>
						<el-button @click="searchPrice" class="btn" type="primary" size="mini">确定</el-button>
						<span @click="setPrice(0)" class="canlen">取消</span>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="title"><span style="margin-right: 26px;">区</span>域</div>
				<div class="right">
					<div class="buxian" :class="{'cur':regionIndex==0}" @click="setRegion(0,0)">
						<span>不限</span>
					</div>
					<div class="list">
						<div @click="setRegion(index+1,item.id)" :class="{'cur':regionIndex==index+1}" v-for="(item,index) in areaList"><span>{{item.name}}</span></div>
					</div>
					<div class="filter">
						<el-select @change="provinveChange" v-model="provinveId" size="mini" placeholder="请选择" class="select">
							<el-option v-for="item in provinveDataList" :key="item.name" :label="item.name" :value="item.id">
							</el-option>
						</el-select>
						<div class="hengxian"></div>
						<el-select @change="cityChange" v-model="cityId" size="mini" placeholder="请选择" class="select">
							<el-option v-for="item in cityDataList" :key="item.name" :label="item.name" :value="item.id">
							</el-option>
						</el-select>
						<el-button @click="searchRegion" class="btn" type="primary" size="mini">确定</el-button>
						<span @click="setRegion(0,0)" class="canlen">取消</span>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="title">其他筛选</div>
				<div class="right">
					<div class="buxian" :class="{'cur':checkList.length==0}" @click="buxianCheck">
						<span>不限</span>
					</div>
					<div class="list">
						<el-checkbox-group @change="officalChange" class="checkList" v-model="checkList">
							<el-checkbox label="认证"></el-checkbox>
						</el-checkbox-group>
					</div>
				</div>
			</div>
		</div>
		<!-- end 账号分类 -->
		<!-- start 排序 -->
		<div class="sort">
			<div class="defultLeftborder defult" :class="{'cur' :sortIndex=='0'}" @click="dropdownchanage(0)">默认排序</div>
			<el-dropdown trigger="click" style="float: left;" @command="dropdownchanage">
				<span class="el-dropdown-link defult" :class="{'cur' :sortIndex=='1'||sortIndex=='2'}">
			    按粉丝数
			    <i v-if="sortIndex=='1'" class="el-icon-arrow-down el-icon-sort-down marginleft"></i>
			    <i v-if="sortIndex=='2'" class="el-icon-arrow-down el-icon-sort-up marginleft1"></i>
			  </span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="1">粉丝数由高到低</el-dropdown-item>
					<el-dropdown-item command="2">粉丝数由低到高</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<el-dropdown trigger="click" style="float: left;" @command="dropdownchanage">
				<span class="el-dropdown-link defult" :class="{'cur' :sortIndex=='3'||sortIndex=='4'}">
			    按阅读数
			      <i v-if="sortIndex=='3'" class="el-icon-arrow-down el-icon-sort-down marginleft"></i>
			    <i v-if="sortIndex=='4'" class="el-icon-arrow-down el-icon-sort-up marginleft1"></i>
			  </span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="3">阅读数由高到低</el-dropdown-item>
					<el-dropdown-item command="4">阅读数由低到高</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<div class="defult" :class="{'cur' :sortIndex=='5'}" @click="dropdownchanage(5)">按报价</div>
		</div>
		<!-- end 排序 -->
		<!-- start 列表 -->
		<div class="biaoge">
			<el-table ref="multipleTable" :data="dataList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column label="账号信息" width="286">
					<template slot-scope="scope">
						<el-row>
							<el-col :span="6" class="tableZh">
								<div class="left">
									<img class="userImg" :src="scope.row.headImg" />
									<img v-if="scope.row.officalStatus==1" class="ico" src="/static/icon/meitirenzhen/wxrz.png" />
								</div>
							</el-col>
							<el-col :span="18" class="tableZh">
								<div class="right">
									<div class="name">{{scope.row.name}}
										<div class="erweima">
											<img v-if="scope.row.platformId==17" class="erweimamin" src="../../../static/icon/meitirenzhen/tt.png" />
											<img v-if="scope.row.platformId==25" class="erweimamin " src="../../../static/icon/meitirenzhen/douban.png" />
											<img v-if="scope.row.platformId==26" class="erweimamin " src=" ../../../static/icon/meitirenzhen/zhihu.png" />
											<!--<img class="erweimaMax" :src="scope.row.headImg" />-->
										</div>
									</div>
									<span class="tag">原创</span>
								</div>
							</el-col>
						</el-row>
					</template>
				</el-table-column>
				<el-table-column prop="fans" label="粉丝数">
				</el-table-column>
				<!--<el-table-column label="阅读数">
					<template slot-scope="scope">
						<div>
							<p>头条:{{ scope.row.extra.viewCount }}+</p>
							<p>次条:{{ scope.row.extra.subViewCount}}+</p>
						</div>
					</template>
				</el-table-column>-->
				<el-table-column label="报价" width="220">
					<template slot-scope="scope">
						<div>
							<div v-if="getLoginFlag">
								<p>头条:￥{{scope.row.mainPrice}}</p>
								<p>次条:￥{{scope.row.subPrice}}</p>
							</div>
							<div v-else>
								登录广告主账号可查看更多报价
							</div>
						</div>
					</template>
				</el-table-column>
				<!--<el-table-column prop="categoryModel" label="账号分类">
				</el-table-column>-->
				<el-table-column label="操作">
					<template slot-scope="scope">
						<div>
							<el-button @click="yytoufang(scope.row)" class="btnred" plain size="mini">预约投放</el-button>
							<p class="zhDetail" @click="zhDetail(scope.row)">账号详情</p>
							<p class="addCar" @click="addCar(scope.row)">加入选号车</p>
						</div>
					</template>
				</el-table-column>
				<!--<el-table-column prop="address" label="地址" show-overflow-tooltip   此属性表示内容超出隐藏  tip提示>
				</el-table-column>-->
			</el-table>

			<div class="pagination">
				<el-pagination @current-change="currentChange" background layout="total, prev, pager, next, jumper" :current-page="params.page" :total="total">
				</el-pagination>
			</div>
		</div>
		<!-- end 列表 -->
		<!-- start 侧边栏购物车信息 -->
		<div class="buycar" :class="{'buycarhidde':isShowBuycar}">
			<div class="menu" @click.stop="isShowBuycar=false">
				<div class="btns">
					<div class="car" :class="{'cur':!isShowBuycar}">
						<span v-if="buyCarList.length>0">{{buyNumStr}}</span>
					</div>
					<div class="customer" @click.stop="kefu"></div>
				</div>
			</div>
			<div class="top">
				<div class="checkedall">选号车</div>
				<div class="close" @click="close"></div>
			</div>
			<div class="list">
				<div class="item" v-for="(item,index) in buyCarList" :key="index">
					<div class="left">
						<img class="userImg" :src="item.headImg" />
						<img v-if="item.officalStatus==1" class="ico" src="/static/icon/meitirenzhen/wxrz.png" />
					</div>
					<div class="center">
						<p>{{item.name}}</p>
						<span>{{item.fans}}</span>
						<div style="height: 28px;width: 1px;"></div>
					</div>
					<div class="right">
						<div class="delete" @click="deleteBuyCar(item)"></div>
						<div class="price">
							￥{{item.popPrice.toFixed(2)}}
						</div>
					</div>
				</div>

				<div class="clearAllBuyCar" v-if="buyCarList.length>0" @click="clearAllBuyCar()">清空选号车</div>
				<div class="empty" v-if="buyCarList.length==0">
					<img src="../../../static/icon/tipico/notinfo.png" />
					<p>还未添加任何账号，</p>
					<span>快去选择心仪的账号加入选号车吧</span>
				</div>
			</div>
			<div class="footer">
				<div class="left">
					<div>
						已选数量: <span>{{buyCarList.length}}</span>
					</div>
					<div>
						金额: <span>￥{{sumPrice.toFixed(2)}}</span>
					</div>
				</div>
				<div class="right" @click="yytf">
					预约投放
				</div>
			</div>
		</div>
		<!-- end 侧边栏购物车信息 -->
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'

	export default {
		data() {
			return {
				isShowBuycar: true,
				platformId: 5, //5  直播短视频
				buyCarList: [],
				title: "预约投放",
				adType: 1,
				yytfParams: {},
				params: {
					//入参	
					page: 1,
					keywords: "", //搜索关键字
					platformId: 0, //平台
					regionId: 0, //地区
					categoryId: 0, //账号分类
					categoryType: 0, //平台分类
					fanss: { //粉丝数区间	
						min: "",
						max: ""
					},
					prices: { //价格区间
						type: 0,
						min: "",
						max: ""
					},
					offical: 0, //官方   0 未选中   1 已选择
				},
				provinveId: "", //省ID
				cityId: "", //区ID
				platfromIndex: 0, //直播平台   当前索引
				platfromIndex1: 0, //视频平台   当前索引
				recordIndex: 0, //账号分类   当前索引
				fansIndex: 0, //粉丝数   当前索引
				priceIndex: 0, //价格   当前索引
				sortIndex: 0, //排序   当前索引
				regionIndex: 0, //地区   当前索引

				total: 0, //当前分页总数

				platformList: [], //平台列表
				recordTypeList: [], //账号分类列表
				checkList: [], //官方认证
				videoList: [], //查看视频
				provinveDataList: [], //省
				cityDataList: [], //市区
				bjtypeobj: {
					id: "1",
					name: "头条"
				},
				areaList: [{
					id: 1,
					name: "北京"
				}, {
					id: 8,
					name: "上海"
				}, {
					id: 205,
					name: "广州"
				}, {
					id: 207,
					name: "深圳"
				}, {
					id: 237,
					name: "成都"
				}, {
					id: 87,
					name: "杭州"
				}, {
					id: 175,
					name: "武汉"
				}],
				dataList: [],
				multipleSelection: []
			}
		},
		async mounted() {
			let self = this
			self.increment({
				val: "3",
				type: 2
			}) //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
			self.increment({
				val: "1",
				type: 3
			}) //type:1 设置左边导航  type:2 设置后台加载哪种模块  type:3  设置头部导航
			self.increment({
				val: "4",
				type: 4
			}) //设置左边导航
			self.SLS();
			await self.addPlatform();
			await self.addRecordType();
			await self.addProvinceAndCity();
			await self.addWechatList();
			await self.addAccountCarList();
		},
		computed: {
			// 使用对象展开运算符将 getters 混入 computed 对象中
			...mapGetters([
				'getNavList',
				"getLoginFlag",
				'getUserInfo',
				// ...
			]),
			buyNumStr: function() {
				return this.buyCarList.length < 10 ? this.buyCarList.length : "..."
			},
			sumPrice() {
				let sumprice = 0;
				this.buyCarList.forEach((item) => {
					sumprice += item.popPrice - 0
				})
				return sumprice
			}
		},
		methods: {
			...mapActions([
				'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
				'decrement',
				'setuserinfo'
			]),
			kefu() {
				let self = this;
				console.log("点击了客服")
			},
			clearAllBuyCar() {
				let self = this;
				self.$confirm('确认清空选号车吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					self.$http.post(self.API.removeAllAccountCarAPI, {
						platformId: self.platformId
					}).then((response) => { // 响应成功回调
						if(response.data.status == 0) {
							self.$message({
								message: "清空选号车成功",
								type: 'success'
							})
							self.addAccountCarList();
						} else {
							self.$message.error('清空选号车失败');
						}
					}, (response) => {

					});
				}).catch(() => {

				});
			},
			deleteBuyCar(item) {
				let self = this;
				self.$confirm('确认删除吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					self.$http.post(self.API.removeAccountCarAPI, {
						platformId: self.platformId,
						accountId: item.id
					}).then((response) => { // 响应成功回调
						if(response.data.status == 0) {
							self.$message({
								message: "删除成功",
								type: 'success'
							})
							self.addAccountCarList();
						} else {
							self.$message.error('删除失败');
						}
					}, (response) => {

					});
				}).catch(() => {

				});
			},
			changeAdType(item) {
				let self = this;
				self.$http.post(self.API.editAccountCarAPI, {
					platformId: self.platformId,
					adType: item.adType,
					accountId: item.id
				}).then((response) => { // 响应成功回调
					if(response.data.status == 0) {
						self.$message({
							message: "更改广告位类型成功",
							type: 'success'
						})
					} else {
						self.$message.error('更改广告位类型失败');
					}
				}, (response) => {});
			},
			addAccountCarList() {
				let self = this;
				self.$http.get(self.API.addAccountCarListAPI, {
					params: {
						platformId: self.platformId,
					}
				}).then((response) => { // 响应成功回调
					if(response.data.status == 0) {
						self.buyCarList = response.data.data;
					}
				}, (response) => {});

			},
			close() {
				this.isShowBuycar = true
			},
			addCar(row) {
				//加入选号车
				let self = this;
				self.yytfParams = {
					type: 2,
					platformId: self.platformId,
					accountId: row.id,
					adType: 1,
				}
				self.comfig()
			},
			yytf() {
				//预约投放
				let self = this;
				if(self.buyCarList.length <= 0) {
					self.$message.error('请先添加心仪的账号到选号车');
					return false
				}
				self.$router.push({
					path: "/Activities",
					query: {
						platformId: self.platformId,
						singlePopKey: ''
					}
				});
			},
			zhDetail(row) {
				//账号详情
				let self = this;
				console.log(row)
			},
			comfig() {
				//预约投放
				let self = this;
				self.yytfParams.adType = self.adType;
				self.$http.post(self.yytfParams.type == 1 ? self.API.addAccountAPI : self.API.addAccountCarAPI, self.yytfParams).then((response) => { // 响应成功回调
					self.dialogFormVisible = false;
					if(response.data.status == 0) {
						if(self.yytfParams.type == 1) {
							self.$router.push({
								path: "/Activities",
								query: {
									singlePopKey: response.data.data,
									platformId: self.platformId
								}
							});
						} else {
							//添加购物车成功
							self.$message({
								message: '加入选号车成功！',
								type: 'success'
							});
							self.addAccountCarList();
						}
					} else {
						self.$message.error(response.data.msg);
					}
				}, (response) => {
					self.dialogFormVisible = false;
				});
			},
			yytoufang(row) {
				//预约投放
				let self = this;
				self.yytfParams = {
					type: 1,
					platformId: self.platformId,
					accountId: row.id,
					adType: 1,
				}
				self.comfig()
			},
			addWechatList() {
				let self = this;
				let fansSort = 0,
					viewSort = 0,
					priceSort = 0;
				switch(self.sortIndex) {
					case 1:
						fansSort = 1;
						break;
					case 3:
						viewSort = 1;
						break;
					case 5:
						priceSort = 1;
						break;
					default:
						break;
				}
				let fansMin = 0,
					fansMax = 0;
				switch(self.fansIndex) {
					case -1:
						if(self.params.fanss.min + ''.trim() == "")
							self.params.fanss.min = 0;

						if(self.params.fanss.max + ''.trim() == "")
							self.params.fanss.max = 0;

						fansMin = self.params.fanss.min;
						fansMax = self.params.fanss.max;
						break;
					case 1:
						fansMin = 0;
						fansMax = 10000;
						break;
					case 2:
						fansMin = 10000;
						fansMax = 50000;
						break;
					case 3:
						fansMin = 50000;
						fansMax = 100000;
						break;
					case 4:
						fansMin = 100000;
						fansMax = 200000;
						break;
					case 5:
						fansMin = 200000;
						fansMax = 500000;
						break;
					case 6:
						fansMin = 500000;
						fansMax = 1000000;
						break;
					case 7:
						fansMin = 1000000;
						fansMax = 0;
						break;
					default:
						break;
				}

				let priceMin = 0,
					priceMax = 0;
				switch(self.priceIndex) {
					case -1:
						if(self.params.prices.min + ''.trim() == "")
							self.params.prices.min = 0;

						if(self.params.prices.max + ''.trim() == "")
							self.params.prices.max = 0;

						priceMin = self.params.prices.min;
						priceMax = self.params.prices.max;
						break;
					case 1:
						priceMin = 0;
						priceMax = 1000;
						break;
					case 2:
						priceMin = 1000;
						priceMax = 3000;
						break;
					case 3:
						priceMin = 3000;
						priceMax = 5000;
						break;
					case 4:
						priceMin = 5000;
						priceMax = 10000;
						break;
					case 5:
						priceMin = 10000;
						priceMax = 0;
						break;
					default:
						break;
				}
				if(self.regionIndex == -1) {
					self.params.regionId = self.cityId;
				}
				let str = [];
				str.push(self.params.platformId + "/")
				str.push(self.params.categoryType + "/")
				str.push(self.params.categoryId + "/")
				str.push(fansMin + "-" + fansMax + "/")
				str.push(priceMin + "-" + priceMax + "/")
				str.push(self.params.regionId + "/")
				str.push(fansSort + "-" + viewSort + "-" + priceSort + "/")
				str.push(self.params.offical)
				self.$http.get(self.API.videoListAPI + str.join(''), {
					params: {
						page: self.params.page,
						limit: 10,
						query: encodeURIComponent(self.params.keywords)
					}
				}).then((response) => { // 响应成功回调
					if(response.data.status == 0) {
						self.dataList = response.data.data;
						self.total = response.data.count;
					}
				}, (response) => {});
			},
			async addProvinceAndCity() {
				let self = this;
				await self.$http.get(self.API.provinceList).then((response) => { // 响应成功回调 
					if(response.data.status == 0) {
						self.provinveDataList = response.data.data;
					}
				}, (response) => {});

				await self.$http.get(self.API.cityList, {
					params: {
						pid: self.provinveDataList[0].id
					}
				}).then((response) => { // 响应成功回调
					if(response.data.status == 0) {
						self.cityDataList = response.data.data;
					}
				}, (response) => {});
			},
			currentChange(index) {
				this.params.page = index;
				this.addWechatList();
			},
			buxianCheck() {
				this.checkList = [];
				this.params.offical = 0;
				this.params.page = 1;
				this.addWechatList();
			},
			setRecord(val, id) {
				this.recordIndex = val - 0;
				this.params.categoryId = id;
				this.params.page = 1;
				this.addWechatList();
			},
			setPlatform(val, id) {
				this.platfromIndex = val - 0;
				this.platfromIndex1 = -1;
				if(val == 0) {
					this.platfromIndex1 = 0;
				}
				this.params.categoryType = 0
				this.videoList = [];
				this.params.platformId = id;
				this.params.page = 1;
				this.addWechatList();
			},
			setPlatform1(val, id) {
				this.platfromIndex1 = val - 0;
				this.platfromIndex = -1;
				if(val == 0) {
					this.platfromIndex = 0;
				}
				this.videoList = [];
				this.params.categoryType = 0
				this.params.platformId = id;
				this.params.page = 1;
				this.addWechatList();
			},
			setFans(val) {
				this.fansIndex = val - 0;
				this.params.fanss.min = "";
				this.params.fanss.max = "";
				this.params.page = 1;
				this.addWechatList();
			},
			searchFans() {
				this.fansIndex = -1;
				this.params.page = 1;
				this.addWechatList();
			},
			setPrice(val) {
				this.priceIndex = val - 0;
				this.params.prices.min = "";
				this.params.prices.max = "";
				this.params.page = 1;
				this.addWechatList();
			},
			searchPrice() {
				this.priceIndex = -1;
				this.params.page = 1;
				this.addWechatList();
			},
			setRegion(val, id) {
				this.regionIndex = val - 0;
				this.params.regionId = id;
				this.cityId = "";
				this.provinveId = "";
				this.params.page = 1;
				this.addWechatList();
			},
			searchRegion() {
				this.regionIndex = -1;
				this.params.page = 1;
				this.addWechatList();
			},
			search() {
				this.params.page = 1;
				this.addWechatList();
			},
			provinveChange(val) {
				let self = this;
				this.cityId = "";
				this.provinveId = val;
				self.$http.get(self.API.cityList, {
					params: {
						pid: val
					}
				}).then((response) => { // 响应成功回调
					if(response.data.status == 0) {
						self.cityDataList = response.data.data;
						self.cityId = self.cityDataList[0].id;
					}
				}, (response) => {});
			},
			cityChange(val) {
				this.cityId = val;
			},
			officalChange(val) {
				this.params.offical = val.length === 0 ? 0 : 1;
				this.params.page = 1;
				this.addWechatList();
			},
			videoChange(val) {
				let self = this
				self.platfromIndex = -1;
				self.platfromIndex1 = -1;
				if(val.length == 1) {
					self.params.categoryType = val[0] == "只看直播账号" ? 1 : 2;
				} else if(val.length == 2) {
					self.videoList = [];
					if(self.params.categoryType == 1) {
						self.params.categoryType = 2;
						self.videoList.push("只看视频账号")
					} else {
						self.params.categoryType = 1;
						self.videoList.push("只看直播账号")
					}
				} else {
					self.platfromIndex = 0;
					self.platfromIndex1 = 0;
					self.params.categoryType = 0
				}
				self.params.platformId = 0;
				self.params.page = 1;
				self.addWechatList();
			},
			dropdownchanage(val) {
				this.sortIndex = val - 0;
				this.params.page = 1;
				this.addWechatList();
			},
			bjtype(val) { //				参考报价类型
				val = val.replace(/'/g, '"');
				this.bjtypeobj = JSON.parse(val);
				this.params.page = 1;
				this.addWechatList();
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			getMessageInfoList() {
				let self = this;
				self.$http.post("pushMessageInfoList").then((response) => { // 响应成功回调 
					if(response.data.code == 0) {
						self.msgTotal = response.data.data.total;
					}
				}, (response) => {});

			},
			addPlatform() {
				let self = this;
				//				12 微信   13微博  14 小红书
				self.$http.get(self.API.subPlatformListAPI, {
					params: {
						pid: self.platformId,
					}
				}).then((response) => { // 响应成功回调
					if(response.data.status == 0) {
						self.platformList = response.data.data
					}
				}, (response) => {

				});
			},
			addRecordType() {
				let self = this;
				//				12 微信   13微博  14 小红书
				self.$http.get(self.API.recordList, {
					params: {
						platformId: self.platformId,
					}
				}).then((response) => { // 响应成功回调
					if(response.data.status == 0) {
						self.recordTypeList = response.data.data
					}
				}, (response) => {

				});
			}
		}
	}
</script>
<style lang="scss" scoped>
	.buycar {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: 286px;
		background-color: #FFFFFF;
		z-index: 999;
		-webkit-transition: all 0.5s;
		-ms-transition: all 0.5s;
		-moz-transition: all 0.5s;
		transition: all 0.5s;
		.footer {
			position: absolute;
			bottom: 0;
			width: 250px;
			right: 0;
			padding: 12px;
			background-color: #EFEFEF;
			.left {
				div {
					font-size: 14px;
					color: #666666;
					span {
						color: #DD2025;
					}
				}
			}
			.right {
				position: absolute;
				right: 12px;
				top: 50%;
				-ms-transform: translateY(-50%);
				-webkit-transform: translateY(-50%);
				-moz-transform: translateY(-50%);
				transform: translateY(-50%);
				background-color: #dd2025;
				padding: 4px 16px;
				color: #FFFFFF;
				font-size: 14px;
				border-radius: 4px;
				cursor: pointer;
			}
		}
		.top {
			position: absolute;
			top: 0;
			right: 0;
			height: 36px;
			line-height: 36px;
			background-color: #eeeeee;
			width: 100%;
			z-index: 88;
			width: 250px;
			.checkedall {
				margin-left: 12px;
			}
			.close {
				position: absolute;
				right: 0;
				top: 0;
				width: 36px;
				height: 36px;
				background: url(../../../static/icon/admin/close.png) center center no-repeat;
				background-size: 12px;
				cursor: pointer;
			}
		}
		.list {
			position: absolute;
			top: 0;
			left: 36px;
			right: 0;
			bottom: 0;
			width: 250px;
			overflow: auto;
			padding-top: 36px;
			padding-bottom: 66px;
			clear: both;
			.empty {
				color: #666666;
				font-size: 12px;
				text-align: center;
				img {
					width: 80px;
					display: block;
					margin: 128px auto 24px;
				}
			}
			.clearAllBuyCar {
				float: right;
				margin: 24px 12px;
				color: #888888;
				font-size: 12px;
				padding: 4px 12px;
				border-radius: 4px;
				cursor: pointer;
				background: url(../../../static/icon/guanggaozhu/clear.png) no-repeat 12px center;
				background-size: 12px;
				background-color: #EEEEEE;
				padding-left: 28px;
			}
			.item {
				position: relative;
				overflow: hidden;
				padding: 12px;
				border-bottom: 1px solid #e8e8e8;
				.left {
					width: 44px;
					position: relative;
					float: left;
					.userImg {
						width: 44px;
						height: 44px;
						border-radius: 50%;
						display: block;
					}
					.ico {
						position: absolute;
						right: 0;
						bottom: 0;
						width: 12px;
						height: auto;
						display: block;
					}
				}
				.center {
					width: 128px;
					position: relative;
					margin-left: 12px;
					float: left;
					p {
						font-weight: bold;
						color: #333333;
						font-size: 14px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					span {
						font-size: 12px;
						color: #666666;
						padding-left: 14px;
						background: url(../../../static/icon/wangzhan/finas.png) no-repeat left center;
						background-size: 12px;
					}
					.selected {
						display: block;
						width: 88px;
					}
				}
				.right {
					position: absolute;
					right: 0;
					top: 0;
					bottom: 0;
					width: 128px;
					text-align: right;
					color: #dd2025;
					font-size: 14px;
					.delete {
						position: absolute;
						right: 0;
						bottom: 0;
						width: 32px;
						height: 32px;
						cursor: pointer;
						background: url(../../../static/icon/guanggaozhu/clear.png) no-repeat center center;
						background-size: 16px;
					}
					.price {
						position: absolute;
						top: 50%;
						right: 12px;
						-ms-transform: translateY(-50%);
						-webkit-transform: translateY(-50%);
						-moz-transform: translateY(-50%);
						transform: translateY(-50%);
						margin-top: -6px;
					}
				}
			}
		}
		.menu {
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			width: 36px;
			background-color: #666666;
			.btns {
				cursor: pointer;
				width: 36px;
				height: 250px;
				position: absolute;
				top: 50%;
				left: 50%;
				-webkit-transform: translate(-50%, -50%);
				-ms-transform: translate(-50%, -50%);
				-moz-transform: translate(-50%, -50%);
				transform: translate( -50%, -50%);
				.customer {
					position: relative;
					height: 36px;
					width: 36px;
					background: url(../../../static/icon/cebianlan/kefu.png) center center no-repeat;
					background-size: 20px;
				}
				.car {
					position: relative;
					height: 36px;
					width: 36px;
					background: url(../../../static/icon/cebianlan/buycar.png) center center no-repeat;
					background-size: 22px;
					span {
						width: 18px;
						height: 18px;
						text-align: center;
						line-height: 18px;
						font-size: 12px;
						color: #FFFFFF;
						background-color: #D41A20;
						display: block;
						border-radius: 50px;
						right: 2px;
						top: 2px;
						position: absolute;
						-webkit-transform: scale(0.7);
						-ms-transform: scale(0.7);
						-moz-transform: scale(0.7);
						transform: scale(0.7);
					}
				}
				.car:hover,
				.cur,
				.customer:hover {
					background-color: rgba(0, 0, 0, 0.6);
				}
			}
		}
	}
	
	.buycarhidde {
		right: -250px;
	}
	
	.addCar {
		margin-top: 6px;
		padding-left: 22px;
		background: url(../../../static/icon/guanggaozhu/buycar.png) no-repeat center left;
		background-size: 16px;
		cursor: pointer;
	}
	
	.addCar:hover {
		color: #DE1A20;
	}
	
	.zhDetail {
		margin-top: 6px;
		padding-left: 22px;
		background: url(../../../static/icon/guanggaozhu/zhxq.png) no-repeat center left;
		background-size: 12px;
		cursor: pointer;
	}
	
	.btnred {
		color: #DE1A20;
		border-color: #DE1A20;
	}
	
	.btnred:hover {
		color: #C60009 !important;
		border-color: #C60009 !important;
	}
	
	.zhDetail:hover {
		color: #DE1A20;
	}
	
	.tableZh {
		.right {
			position: relative;
			.name {
				font-size: 14px;
				color: #333333;
				display: inline-block;
				.erweima {
					position: relative;
					display: inline-block;
					.erweimamin {
						width: 16px;
						height: 16px;
						display: inline-block;
						margin-left: 6px;
						vertical-align: middle;
					}
					.erweimaMax {
						position: absolute;
						right: -112px;
						top: -25px;
						width: 100px;
						height: 100px;
						z-index: 9999;
						display: none;
					}
				}
				.erweima:hover {
					.erweimaMax {
						display: block;
					}
				}
			}
			.tag {
				display: table;
				color: #FFFFFF;
				background-color: #DE1A20;
				padding: 0 6px;
				border-radius: 4px;
				font-size: 12px;
			}
		}
		.left {
			width: 44px;
			position: relative;
			.userImg {
				width: 44px;
				height: 44px;
				border-radius: 50%;
				display: block;
			}
			.ico {
				position: absolute;
				right: 0;
				bottom: 0;
				width: 12px;
				height: auto;
				display: block;
			}
		}
	}
	
	.content {
		.condition {
			.filter {
				position: absolute;
				right: 24px;
				top: 0;
				bottom: 0;
				height: 45px;
				line-height: 45px;
				/*border: 1px solid #000000;*/
				.select {
					width: 86px;
					float: left;
					.el-input {
						.el-input__inner {
							border-radius: 2px !important;
							border: solid 1px #e8e8e8 !important;
						}
					}
				}
				.xiala {
					float: left;
					padding-right: 12px;
					.type {
						position: relative;
						border: solid 1px #e8e8e8;
						color: #888888;
						height: 24px;
						border-radius: 2px;
						font-size: 12px;
						padding: 5px 6px 5px 8px;
					}
					.type:before {
						content: '';
						position: absolute;
						top: 0;
						right: 0;
						bottom: 0;
						width: 0;
						background-color: #e8e8e8;
					}
				}
				.xiala:hover {
					cursor: pointer;
				}
				.hengxian {
					width: 10px;
					height: 1px;
					background-color: #aaaaaa;
					margin-left: 6px;
					margin-right: 6px;
					margin-top: 22px;
					float: left;
				}
				.inputwidth {
					width: 66px;
					height: 24px;
					border-radius: 2px;
					padding: 0;
					float: left;
				}
				.btn {
					margin-left: 12px;
				}
				.canlen {
					margin-left: 6px;
				}
				.canlen:hover {
					color: #DE1A20;
					cursor: pointer;
				}
			}
			.right {
				color: #888888;
				font-size: 12px;
				float: left;
				overflow: hidden;
				.buxian {
					width: 86px;
					text-align: center;
					position: absolute;
					top: 0;
					bottom: 0;
					padding-top: 12px;
					cursor: pointer;
					span {
						padding: 3px 6px 4px;
					}
				}
				.buxian:hover {
					span {
						color: #FFFFFF;
						background-color: #DE1A20;
						padding: 3px 6px 4px;
						border-radius: 4px;
						line-height: 0;
					}
				}
				.cur {
					span {
						color: #FFFFFF;
						background-color: #DE1A20;
						border-radius: 4px;
						line-height: 0;
						padding: 3px 6px 4px;
					}
				}
				.list {
					float: left;
					padding-left: 86px;
					padding-bottom: 12px;
					.checkList {
						padding-left: 12px;
					}
					div {
						padding-top: 12px;
						cursor: pointer;
						display: inline-block;
						padding-right: 6px;
						span {
							padding: 3px 6px 4px;
						}
					}
					div:hover {
						span {
							color: #FFFFFF;
							background-color: #DE1A20;
							padding: 3px 6px 4px;
							border-radius: 4px;
							line-height: 0;
						}
					}
				}
			}
			.item:first-child {
				border-top: 1px solid #e8e8e8;
				margin-top: -1px;
			}
			.item {
				position: relative;
				overflow: hidden;
				border-bottom: 1px solid #e8e8e8;
				font-size: 14px;
				padding-left: 100px;
				min-height: 45px;
				.title {
					width: 100px;
					background-color: #F2F2F2;
					padding-bottom: 12px;
					padding-top: 12px;
					text-align: center;
					position: absolute;
					top: 0;
					left: 0;
					bottom: 0;
				}
			}
		}
		.biaoge {
			.pagination {
				padding-top: 32px;
				padding-bottom: 32px;
				float: right;
			}
		}
		.sort {
			margin-top: 19px;
			height: 48px;
			background-color: #F2F2F2;
			padding: 12px;
			border: 1px solid #e8e8e8;
			.defult {
				background-color: #FFFFFF;
				padding: 0px 16px;
				border: 1px solid #e8e8e8;
				border-left: none;
				color: #333333;
				font-size: 12px;
				float: left;
			}
			.defultLeftborder {
				border-left: 1px solid #e8e8e8;
			}
			.marginleft {
				position: absolute;
				right: 0px;
				top: 6px;
				/*margin-left: 6px;*/
			}
			.marginleft1 {
				position: absolute;
				right: 6px;
				top: 6px;
			}
			.defult:hover {
				border-color: #DE1A20;
				color: #FFFFFF;
				background-color: #DE1A20;
				cursor: pointer;
			}
			.cur {
				border-color: #DE1A20;
				color: #FFFFFF;
				background-color: #DE1A20;
				cursor: pointer;
			}
		}
		.search {
			width: auto;
			margin: 29px auto;
			display: table;
			position: relative;
			.input {
				width: 420px;
			}
			.btn {
				position: absolute;
				height: 40px;
				line-height: 40px;
				padding: 0 44px;
				right: 0;
				border-bottom-left-radius: 0;
				border-top-left-radius: 0;
			}
		}
	}
</style>