webpackJsonp([12],{"4Lha":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.menuData,function(t,a){return[t.children.length>0?n("el-submenu",{attrs:{index:t.path}},[n("template",{slot:"title"},[n("i",{class:t.iconCls?t.iconCls:[e.fa,e.fa-e.file]}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.$t("routeNmae."+t.name)))])]),e._v(" "),n("menu-tree",{attrs:{menuData:t.children}})],2):n("el-menu-item",{attrs:{index:t.path}},[n("i",{class:t.iconCls?t.iconCls:[e.fa,e.fa-e.file]}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.$t("routeNmae."+t.name)))])])]})],2)},staticRenderFns:[]};var o={name:"asideNav",components:{menuTree:n("VU/8")({name:"menuTree",props:["menuData"]},a,!1,function(e){n("xfzT")},"data-v-440b3a85",null).exports},watch:{"$route.path":function(e){this.selectmenu(e)}},methods:{selectmenu:function(e){var t=this.$store.getters.routers,n="";this.$store.dispatch("addTab",{title:function e(t,a){for(var o=0;o<a.length;o++)if(a[o].children.length>0||a[o].path===t){if(a[o].path===t&&a[o].children.length<1){n=a[o].name;break}e(t,a[o].children)}return n}(e,t),path:e})}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-aside",{attrs:{id:"asideNav"}},[n("div",{staticClass:"logo-name"},[e.$store.getters.logoShow?n("p",[e._v("XU")]):n("p",[e._v("DF-Admin")])]),e._v(" "),n("el-menu",{staticClass:"el-menu-vertical",attrs:{"default-active":e.$route.path,collapse:e.$store.getters.isCollapse,"background-color":"#03152A","text-color":"rgba(255,255,255,.7)","active-text-color":"#ffffff",router:e.$store.getters.uniquerouter,"unique-opened":e.$store.getters.uniquerouter,"collapse-transition":!0},on:{select:e.selectmenu}},[e._l(e.$store.getters.routers,function(t,a){return t.hidden?e._e():[!t.alone&&t.children.length>0?n("el-submenu",{attrs:{index:a+""}},[n("template",{slot:"title"},[n("i",{class:t.iconCls?t.iconCls:[e.fa,e.fa-e.server]}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.$t("routeNmae."+t.name)))])]),e._v(" "),n("menu-tree",{attrs:{menuData:t.children}})],2):n("el-menu-item",{attrs:{index:t.path}},[n("i",{class:t.iconCls?t.iconCls:[e.fa,e.fa-e.file]}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.$t("routeNmae."+t.name)))])])]})],2)],1)],1)},staticRenderFns:[]};var r=n("VU/8")(o,i,!1,function(e){n("6Xzv")},null,null).exports,s=n("lbHh"),l=n.n(s),c={name:"langSelect",data:function(){return{language:""}},mounted:function(){var e=localStorage.lang||"cn";this.getLanguage(e)},methods:{handleSetLanguage:function(e){this.$i18n.locale=e,localStorage.setItem("lang",e),this.getLanguage(e)},getLanguage:function(e){"cn"===e&&(this.language="中文"),"en"===e&&(this.language="English")}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dropdown",{staticClass:"international",on:{command:e.handleSetLanguage}},[n("div",[n("span",{staticClass:"el-dropdown-link"},[n("i",{staticClass:"fa fa-language fa-lg"}),e._v(" "+e._s(e.language)),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})])]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"cn"}},[e._v("中文")]),e._v(" "),n("el-dropdown-item",{attrs:{command:"en"}},[e._v("English")])],1)],1)},staticRenderFns:[]};var d=n("VU/8")(c,u,!1,function(e){n("sPnx"),n("Cu/7")},"data-v-1b1873b4",null).exports,m={name:"tabNav",data:function(){return{rightMenuShow:!1,left:0,top:0}},methods:{openMenu:function(e,t,n){if(0===n)return!1;this.rightMenuShow=!0,this.left=t.clientX+10,this.top=t.clientY,this.$store.dispatch("openMenu",e)},removeTab:function(e){this.$store.dispatch("removeTab",{tabItem:e,fullPath:this.$route.fullPath,router:this.$router})},removeOtherTab:function(e){this.$store.dispatch("removeOtherTab",{tabItem:e,router:this.$router})},removeAllTab:function(){this.$store.dispatch("removeOtherTab",{all:!0,router:this.$router})}},watch:{rightMenuShow:function(e){var t=this;e?document.body.addEventListener("click",function(){t.rightMenuShow=!1}):document.body.removeEventListener("click",function(){t.rightMenuShow=!1})}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"tabnavBox"},[n("transition-group",{attrs:{name:"list",tag:"ul"}},e._l(e.$store.getters.tabnavBox,function(t,a){return n("li",{key:t.title,staticClass:"tabnav",class:{active:e.$route.path===t.path},on:{contextmenu:function(n){n.preventDefault(),e.openMenu(t,n,a)}}},[n("router-link",{attrs:{to:t.path}},[e._v(e._s(e.$t("routeNmae."+t.title)))]),e._v(" "),0!==a?n("i",{staticClass:"el-icon-error",on:{click:function(n){e.removeTab(t)}}}):e._e()],1)}))],1),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:this.rightMenuShow,expression:"this.rightMenuShow"}],staticClass:"menuBox",style:{left:this.left+"px",top:this.top+"px"}},[n("li",{on:{click:function(t){e.removeTab(e.$store.getters.rightNav)}}},[n("i",{staticClass:"fa fa-remove"}),e._v(e._s(e.$t("rightMenu.close")))]),e._v(" "),n("li",{on:{click:function(t){e.removeOtherTab(e.$store.getters.rightNav)}}},[e._v(e._s(e.$t("rightMenu.closeOther")))]),e._v(" "),n("li",{on:{click:e.removeAllTab}},[e._v(e._s(e.$t("rightMenu.closeAll")))])])])},staticRenderFns:[]};var f={name:"Header",components:{tabNav:n("VU/8")(m,h,!1,function(e){n("hfm7"),n("XB7e")},null,null).exports,langSelect:d},data:function(){return{isfullScreen:!0}},methods:{collapse:function(){this.$store.dispatch("collapse")},fullScreen:function(){if(this.isfullScreen){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():elem.msRequestFullscreen&&elem.msRequestFullscreen(),this.isfullScreen=!1}else document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen(),this.isfullScreen=!0},handleCommand:function(e){"info"===e?this.$router.push({path:"/editUser?userId="+this.$store.getters.info.uid}):"logout"===e?(l.a.remove("access_token"),location.reload()):"editPassworld"===e&&this.$router.push({path:"/editPassworld"})}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-header",{attrs:{id:"header"}},[n("span",{staticClass:"hideAside",on:{click:e.collapse}},[n("i",{staticClass:"fa fa-indent fa-lg"})]),e._v(" "),n("ul",{staticClass:"personal"},[n("li",{staticClass:"fullScreen",on:{click:e.fullScreen}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"全屏",placement:"bottom"}},[n("i",{staticClass:"fa fa-arrows-alt fa-lg"})])],1),e._v(" "),n("li",[n("langSelect")],1),e._v(" "),n("li",[e._v(e._s(this.$store.getters.info.role))]),e._v(" "),n("li",[n("el-dropdown",{on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[e._v("\n                  "+e._s(this.$store.getters.info.name)),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"editPassworld"}},[e._v(e._s(e.$t("userDropdownMenu.changePassword")))]),e._v(" "),n("el-dropdown-item",{attrs:{command:"logout",divided:""}},[e._v(e._s(e.$t("userDropdownMenu.logout")))])],1)],1)],1),e._v(" "),n("li",{staticClass:"icon"},[n("img",{attrs:{src:e.$store.getters.info.avatar}})])])]),e._v(" "),n("tabNav")],1)},staticRenderFns:[]};var g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("p",[this._v("Copyright © 2018 xuAdmin.")])])}]};var v={name:"dc-home",components:{layoutHeader:n("VU/8")(f,p,!1,function(e){n("fs/n")},null,null).exports,Bottom:n("VU/8")({name:"bottom"},g,!1,function(e){n("Fni0")},"data-v-3aeaf32c",null).exports,langSelect:d,layoutAside:r},created:function(){this.$router.push("/index")}},_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"loyout"}},[t("el-container",[t("layoutAside"),this._v(" "),t("el-container",[t("layoutHeader"),this._v(" "),t("el-main",{attrs:{id:"elmain"}},[t("transition",{attrs:{name:"main",mode:"out-in"}},[t("router-view")],1)],1),this._v(" "),t("el-footer",[t("Bottom")],1)],1)],1)],1)},staticRenderFns:[]};var b=n("VU/8")(v,_,!1,function(e){n("yKUA"),n("ku50")},null,null);t.default=b.exports},"5W1q":function(e,t){},"6Xzv":function(e,t){},"Cu/7":function(e,t){},Fni0:function(e,t){},"L/On":function(e,t){},NGQV:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Xxa5"),o=n.n(a),i=n("exGp"),r=n.n(i),s=n("7+uW");s.default.directive("roleBtn",{bind:function(e,t){var n=t.value,a=JSON.parse(sessionStorage.getItem("info")).role;if(n&&-1!==n.indexOf(a))return!1;e.parentNode.removeChild(e)}});var l=s.default,c=n("zL8q"),u=n.n(c),d=n("//Fk"),m=n.n(d),h=n("mtWM"),f=n.n(h),p=n("lbHh"),g=n.n(p);f.a.defaults.timeout=1e4,f.a.defaults.baseURL="https://028xianmei.cn/api/v1/",console.log(f.a.defaults.baseURL),f.a.interceptors.request.use(function(e){return e.headers["Content-Type"]="application/json;charset=UTF-8",g.a.get("access_token")&&(e.headers.token=g.a.get("access_token")),e},function(e){return m.a.reject(e.response)}),f.a.interceptors.response.use(function(e){return 0===e.data.code?m.a.resolve(e):(Object(c.Message)({message:e.data.msg,type:"warning"}),m.a.reject(e.data.msg))},function(e){return Object(c.Message)({message:e,type:"warning"}),m.a.reject(e)});var v=f.a,_=(n("tvR6"),n("muQq"),n("5W1q"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1)},staticRenderFns:[]});var b=n("VU/8")({name:"app"},_,!1,function(e){n("NGQV")},null,null).exports,w=n("Dd8w"),x=n.n(w),C=n("wUZ8"),y=n.n(C),k=x()({routeNmae:{home:"home",addUser:"addUser",editUser:"editUser",userList:"userList",commentList:"commentList",userManage:"userManage",editPassworld:"editPassworld",shopManage:"shopManage",shopList:"shopList",orderManage:"orderManage",orderList:"orderList",serviceManage:"serviceManage",serviceEdit:"serviceEdit",feedbackManage:"feedbackManage",feedbackList:"feedbackList",integralManage:"integralManage",integralList:"integralList",exchangeManage:"exchangeManage",exchangeList:"exchangeList",giftManage:"giftManage",giftList:"giftList",activityManage:"activityManage",activityContent:"activityContent"},rightMenu:{close:"close",closeOther:"closeOther",closeAll:"closeAll"},role:{superAdmin:"superAdmin",admin:"admin",member:"member"},userDropdownMenu:{basicInfor:"basicInfor",changePassword:"changePassword",logout:"logout"}},y.a),F=n("Vi3T"),L=n.n(F),$=x()({routeNmae:{home:"主页",userManage:"用户管理",addUser:"添加账号",editUser:"修改资料",userList:"用户列表",editPassworld:"修改密码",shopManage:"商品管理",shopList:"商品列表",orderManage:"订单管理",orderList:"订单列表",serviceManage:"客服管理",serviceEdit:"客服编辑",feedbackManage:"反馈管理",feedbackList:"反馈列表",integralManage:"积分管理",integralList:"积分日志",exchangeManage:"兑换管理",exchangeList:"兑换列表",giftManage:"赠送管理",giftList:"赠送列表",activityManage:"活动管理",activityContent:"活动内容"},rightMenu:{close:"关闭",closeOther:"关闭其他",closeAll:"全部关闭"},role:{superAdmin:"超级管理员",admin:"管理员",member:"普通用户"},userDropdownMenu:{basicInfor:"基本资料",changePassword:"修改密码",logout:"退出"}},L.a),M=n("/ocq"),S={data:function(){return{smdl:!0,codeText:"发送验证码",isSending:!1,loginForm:{mobile:"",password:"",type:"password",admin:1},loginForm1:{mobile:"",mobile_verify_code:"",type:"",admin:1}}},methods:{submitForm:function(){var e=this,t=void 0;if(this.smdl){if(""===(t=this.loginForm).mobile||""===t.password)return void this.$message({showClose:!0,message:"账号或密码不能为空",type:"error"})}else if(""===(t=this.loginForm1).mobile||""===t.mobile_verify_code)return void this.$message({showClose:!0,message:"账号或验证码码不能为空",type:"error"});/^1[3456789]\d{9}$/.test(t.mobile)?this.$axios.post("/c/login",t).then(function(t){console.log(t.data.data.Token),e.$store.dispatch("setToken",t.data.data.Token).then(function(t){e.$router.push({path:"/"})}).catch(function(t){e.$message({showClose:!0,message:t.message,type:"error"})})}).catch(function(t){e.$message({showClose:!0,message:t,type:"error"})}):this.$message({showClose:!0,message:"请输入正确的手机号码",type:"error"})},sendCode:function(){var e=this;this.isSending||(this.loginForm1.mobile&&/^1[3456789]\d{9}$/.test(this.loginForm1.mobile)?(this.isSending=!0,this.$axios.post("/c/send_mobile_verify_code",{mobile:this.loginForm1.mobile}).then(function(t){e.$message({showClose:!0,message:"发送成功",type:"success"});var n=60;setInterval(function(){e.codeText=n+"s后重发",0==n?(e.isSending=!1,e.codeText="发送验证码"):n--},1e3)}).catch(function(t){e.isSending=!1})):this.$message({showClose:!0,message:"电话号码有误,请重填",type:"error"}))}}},T={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("div",{staticClass:"loginConbox"},[n("div",{staticClass:"header"}),e._v(" "),n("div",{staticClass:"loginBox"},[n("div",{staticClass:"loginCon"},[n("p",{staticClass:"title"},[e._v("东方网咖")]),e._v(" "),n("p",{staticClass:"title"},[e._v("后台管理系统")]),e._v(" "),e.smdl?n("el-card",{staticClass:"login-module",attrs:{shadow:"always"}},[n("div",{staticClass:"clearfix formTitlt",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("密码登录")]),e._v(" "),n("span",{staticClass:"titIconbox"},[n("i",{staticClass:"iconfont xu-saomadenglu2 fa-lg iconcolor"}),e._v(" "),n("i",{staticClass:"iconfont xu-saomadenglu01 el-icon--right fa-lg pointer",on:{click:function(t){e.smdl=!e.smdl}}})])]),e._v(" "),n("el-form",{staticClass:"demo-ruleForm",attrs:{model:e.loginForm,"status-icon":"","label-width":"100px"}},[n("el-form-item",[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"请输入手机号码",maxlength:"11"},model:{value:e.loginForm.mobile,callback:function(t){e.$set(e.loginForm,"mobile",t)},expression:"loginForm.mobile"}})],1),e._v(" "),n("el-form-item",[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请输入登录密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),n("el-form-item",[n("el-button",{staticClass:"subBtn",attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("登录")])],1),e._v(" "),n("p",{staticClass:"smalltxt"},[n("router-link",{staticClass:"a",attrs:{to:"#"}},[e._v("忘记密码")]),e._v(" "),n("router-link",{staticClass:"a",attrs:{to:"#"}},[e._v("忘记会员名")]),e._v(" "),n("router-link",{staticClass:"a",attrs:{to:"#"}},[e._v("免费注册")])],1)],1)],1):n("el-card",{staticClass:"login-module",attrs:{shadow:"always"}},[n("div",{staticClass:"clearfix formTitlt",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("验证码登录")]),e._v(" "),n("span",{staticClass:"titIconbox"},[n("i",{staticClass:"iconfont xu-mimadenglu1 fa-lg iconcolor"}),e._v(" "),n("i",{staticClass:"iconfont xu-imagevector el-icon--right fa-lg pointer",on:{click:function(t){e.smdl=!e.smdl}}})])]),e._v(" "),n("el-form",{staticClass:"demo-ruleForm",attrs:{model:e.loginForm1,"status-icon":"","label-width":"100px"}},[n("el-form-item",[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"请输入手机号码",maxlength:"11"},model:{value:e.loginForm1.mobile,callback:function(t){e.$set(e.loginForm1,"mobile",t)},expression:"loginForm1.mobile"}})],1),e._v(" "),n("el-form-item",[n("el-col",{attrs:{span:16}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"请输入验证码"},model:{value:e.loginForm1.mobile_verify_code,callback:function(t){e.$set(e.loginForm1,"mobile_verify_code",t)},expression:"loginForm1.mobile_verify_code"}})],1),e._v(" "),n("el-col",{attrs:{span:8}},[n("el-button",{attrs:{type:"primary"},on:{click:e.sendCode}},[e._v(e._s(e.codeText))])],1)],1),e._v(" "),n("el-form-item",[n("el-button",{staticClass:"subBtn",attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("登录")])],1),e._v(" "),n("p",{staticClass:"smalltxt"},[n("router-link",{staticClass:"a",attrs:{to:"#"}},[e._v("忘记密码")]),e._v(" "),n("router-link",{staticClass:"a",attrs:{to:"#"}},[e._v("忘记会员名")]),e._v(" "),n("router-link",{staticClass:"a",attrs:{to:"#"}},[e._v("免费注册")])],1)],1)],1)],1)])])])},staticRenderFns:[]};var R=n("VU/8")(S,T,!1,function(e){n("L/On")},null,null).exports,A=n("4Lha"),P={name:"mainIndex",data:function(){return{dataFormVisible:!1,dataForm:{name:"",note:"",tag:""},dataFormRules:{name:[{required:!0,message:"请输入赠送内容",trigger:"blur"}],note:[{required:!0,message:"请输入赠送机号",trigger:"blur"}],tag:[{required:!0,message:"请输入赠送赠送原因",trigger:"blur"}]},power:"",integralCountData:[],total:0,page:1,limit:10}},mounted:function(){this.getSwitchStatus(),this.getList()},methods:{getList:function(){var e=this;this.$axios.post("/a/goods_integral_count",{page:this.page,limit:this.limit}).then(function(t){e.integralCountData=t.data.data}).catch(function(e){console.log(e)})},getSwitchStatus:function(){var e=this;this.$axios.post("/a/get_activity_switch",{}).then(function(t){e.power=t.data.data.power}).catch(function(e){this.power=1==this.power?0:1})},switchChange:function(){var e=this;this.$axios.post("/a/set_activity_switch",{power:this.power}).then(function(t){e.$message({showClose:!0,message:"操作成功",type:"success"})}).catch(function(e){console.log(e)})},handleCreate:function(){var e=this;this.dataForm={name:"",note:"",tag:""},this.dataFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},formSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$axios.post("/a/add_gift_record",e.dataForm).then(function(t){e.dataFormVisible=!1,e.getList()}).catch(function(e){console.log(e)})})},currentChange:function(e){this.page=e,this.getList()}}},N={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8}},[n("el-row",{attrs:{gutter:20}},[e._v("\n        活动开关:\n        "),n("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-text":"开启","inactive-text":"关闭"},on:{change:e.switchChange},model:{value:e.power,callback:function(t){e.power=t},expression:"power"}})],1),e._v(" "),n("br"),e._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-button",{attrs:{type:"primary"},on:{click:e.handleCreate}},[e._v("新增赠送")])],1)],1),e._v(" "),n("el-col",{attrs:{span:16}},[n("el-table",{attrs:{data:e.integralCountData}},[n("el-table-column",{attrs:{prop:"id",label:"商品ID"}}),e._v(" "),n("el-table-column",{attrs:{prop:"name",label:"商品名称"}}),e._v(" "),n("el-table-column",{attrs:{prop:"integrals",label:"累计积分"}})],1)],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"新增",visible:e.dataFormVisible,width:"40%"},on:{"update:visible":function(t){e.dataFormVisible=t}}},[n("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataFormRules}},[n("el-form-item",{attrs:{label:"机号",prop:"note"}},[n("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.dataForm.note,callback:function(t){e.$set(e.dataForm,"note",t)},expression:"dataForm.note"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"赠送内容",prop:"name"}},[n("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"赠送原因",prop:"tag"}},[n("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.dataForm.tag,callback:function(t){e.$set(e.dataForm,"tag",t)},expression:"dataForm.tag"}})],1)],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dataFormVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.formSubmit}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var E=n("VU/8")(P,N,!1,function(e){n("w2Py")},null,null).exports;s.default.use(M.a);var q=k.routeNmae,U=$.routeNmae,B=[{path:"/",redirect:"/index",hidden:!0,children:[]},{path:"/login",component:R,name:"",hidden:!0,children:[]},{path:"/index",iconCls:"fa fa-dashboard",name:q.home,component:A.default,alone:!0,children:[{path:"/index",iconCls:"fa fa-dashboard",name:"主页",component:E,children:[]}]},{path:"/404",component:function(){return n.e(0).then(n.bind(null,"0xTz"))},name:"404",hidden:!0,children:[]}],I=[{r_id:100001,r_name:U.userManage,path:"/",iconCls:"el-icon-tickets",name:"userManage",component:function(){return new Promise(function(e){e()}).then(n.bind(null,"4Lha"))},meta:{role:["superAdmin","admin"]},children:[{r_id:100002,r_name:U.userList,path:"/userList",iconCls:"el-icon-edit-outline",name:"userList",component:function(){return n.e(10).then(n.bind(null,"tVh0"))},meta:{role:["superAdmin","admin"]},children:[]},{r_id:100003,r_name:U.editPassworld,path:"/editPassworld",iconCls:"el-icon-edit-outline",name:"editPassworld",component:function(){return n.e(7).then(n.bind(null,"C6Eq"))},meta:{role:["superAdmin","admin"]},children:[]}]},{r_id:100004,r_name:U.shopManage,path:"/shopList",iconCls:"el-icon-tickets",name:"shopManage",component:function(){return new Promise(function(e){e()}).then(n.bind(null,"4Lha"))},meta:{role:["superAdmin","admin"]},alone:!0,children:[{r_id:100005,r_name:U.shopList,path:"/shopList",iconCls:"el-icon-edit-outline",name:"shopList",component:function(){return n.e(6).then(n.bind(null,"hF31"))},meta:{role:["superAdmin","admin"]},children:[]}]},{r_id:100006,r_name:U.orderManage,path:"/orderList",iconCls:"el-icon-tickets",name:"orderManage",component:function(){return new Promise(function(e){e()}).then(n.bind(null,"4Lha"))},meta:{role:["superAdmin","admin"]},alone:!0,children:[{r_id:100007,r_name:U.orderList,path:"/orderList",iconCls:"el-icon-edit-outline",name:"orderList",component:function(){return n.e(5).then(n.bind(null,"Eh9J"))},meta:{role:["superAdmin","admin"]},children:[]}]},{r_id:100008,r_name:U.exchangeManage,path:"/exchangeList",iconCls:"el-icon-tickets",name:"exchangeManage",component:function(){return new Promise(function(e){e()}).then(n.bind(null,"4Lha"))},meta:{role:["superAdmin","admin"]},alone:!0,children:[{r_id:100009,r_name:U.exchangeList,path:"/exchangeList",iconCls:"el-icon-edit-outline",name:"exchangeList",component:function(){return n.e(9).then(n.bind(null,"fgmj"))},meta:{role:["superAdmin","admin"]},children:[]}]},{r_id:100010,r_name:U.giftManage,path:"/giftList",iconCls:"el-icon-tickets",name:"giftManage",component:function(){return new Promise(function(e){e()}).then(n.bind(null,"4Lha"))},meta:{role:["superAdmin","admin"]},alone:!0,children:[{r_id:100011,r_name:U.giftList,path:"/giftList",iconCls:"el-icon-edit-outline",name:"giftList",component:function(){return n.e(4).then(n.bind(null,"vDYw"))},meta:{role:["superAdmin","admin"]},children:[]}]},{r_id:100012,r_name:U.integralManage,path:"/integralList",iconCls:"el-icon-tickets",name:"integralManage",component:function(){return new Promise(function(e){e()}).then(n.bind(null,"4Lha"))},meta:{role:["superAdmin","admin"]},alone:!0,children:[{r_id:100013,r_name:U.integralList,path:"/integralList",iconCls:"el-icon-edit-outline",name:"integralList",component:function(){return n.e(1).then(n.bind(null,"aRg3"))},meta:{role:["superAdmin","admin"]},children:[]}]},{r_id:100014,r_name:U.serviceManage,path:"/serviceEdit",iconCls:"el-icon-tickets",name:"serviceManage",component:function(){return new Promise(function(e){e()}).then(n.bind(null,"4Lha"))},meta:{role:["superAdmin","admin"]},alone:!0,children:[{r_id:100015,r_name:U.serviceEdit,path:"/serviceEdit",iconCls:"el-icon-edit-outline",name:"serviceEdit",component:function(){return n.e(2).then(n.bind(null,"266B"))},meta:{role:["superAdmin","admin"]},children:[]}]},{r_id:100016,r_name:U.feedbackManage,path:"/feedbackList",iconCls:"el-icon-tickets",name:"feedbackManage",component:function(){return new Promise(function(e){e()}).then(n.bind(null,"4Lha"))},meta:{role:["superAdmin","admin"]},alone:!0,children:[{r_id:100017,r_name:U.feedbackList,path:"/feedbackList",iconCls:"el-icon-edit-outline",name:"feedbackList",component:function(){return n.e(8).then(n.bind(null,"7OWn"))},meta:{role:["superAdmin","admin"]},children:[]}]},{r_id:100018,r_name:U.activityManage,path:"/activityManage",iconCls:"el-icon-tickets",name:"activityManage",component:function(){return new Promise(function(e){e()}).then(n.bind(null,"4Lha"))},meta:{role:["superAdmin","admin"]},alone:!0,children:[{r_id:100019,r_name:U.activityContent,path:"/activityManage",iconCls:"el-icon-edit-outline",name:"activityContent",component:function(){return n.e(3).then(n.bind(null,"sZNU"))},meta:{role:["superAdmin","admin"]},children:[]}]},{path:"*",redirect:"/404",hidden:!0,meta:{role:["superAdmin","admin"]},children:[]}],O=new M.a({routes:B}),V=n("NYxO"),D={state:{routers:[],addRouters:[]},mutations:{setRouters:function(e,t){e.addRouters=t,e.routers=B.concat(t)}},actions:{newRoutes:function(e,t){var n=e.commit;!function e(t,n){for(var a=0;a<t.length;a++)t[a].meta&&t[a].meta.role&&-1===t[a].meta.role.indexOf(n)&&(t.splice(a,1),a-=1),t[a]&&t[a].children&&t[a].children.length&&(e(t[a].children,n),t[a].children.length||(t.splice(a,1),a-=1))}(I,t),n("setRouters",I)}}},z=n("mvHQ"),j=n.n(z),H={state:{info:"",roleList:[{level:1,level_name:"superAdmin",level_cnname:"超级管理员"},{level:2,level_name:"admin",level_cnname:"普通管理员"},{level:0,level_name:"member",level_cnname:"普通用户"}]},mutations:{getInfo:function(e,t){t.authorityRouter&&-1!=t.authorityRouter.indexOf(",")?t.authorityRouter=t.authorityRouter.split(","):null==t.authorityRouter&&(t.authorityRouter=[]),e.info={role:t.role,name:t.name,mobile:t.mobile,integral:t.integral,authorityRouter:t.authorityRouter,avatar:t.avatar?t.avatar:"/static/images/logo.png",uid:t.id},sessionStorage.setItem("info",j()(W.getters.info))}},actions:{getInfo:function(e,t){(0,e.commit)("getInfo",t)}}},X={state:{isCollapse:!1,logoShow:!1,uniquerouter:!0,rightNav:{},tabnavBox:[{title:"home",path:"/index"}]},mutations:{addTab:function(e,t){e.isActive=t.path;for(var n=0;n<e.tabnavBox.length;n++)if(e.tabnavBox[n].path===t.path)return!1;e.tabnavBox.push({title:t.title,path:t.path})},openMenu:function(e,t){e.rightNav=t},removeTab:function(e,t){var n=e.tabnavBox.findIndex(function(e,n){return e.path===t.tabItem.path});if(e.tabnavBox.splice(n,1),t.tabItem.path===t.fullPath){var a=e.tabnavBox[n]||e.tabnavBox[n-1];t.router.push(a.path)}},removeOtherTab:function(e,t){if(e.tabnavBox=[{title:"home",path:"/index"}],t.all)return t.router.push("/index"),!1;e.tabnavBox.push(t.tabItem),t.router.push(t.tabItem.path)},collapse:function(e,t){e.isCollapse=!e.isCollapse,e.logoShow?setTimeout(function(){e.logoShow=!1},300):e.logoShow=!0}},actions:{addTab:function(e,t){(0,e.commit)("addTab",t)},openMenu:function(e,t){(0,e.commit)("openMenu",t)},removeTab:function(e,t){(0,e.commit)("removeTab",t)},removeOtherTab:function(e,t){(0,e.commit)("removeOtherTab",t)},collapse:function(e,t){(0,e.commit)("collapse",t)}}};s.default.use(V.a);var W=new V.a.Store({state:{token:g.a.get("access_token")},mutations:{setToken:function(e,t){e.token=t,g.a.set("access_token",t,{expires:7})}},actions:{setToken:function(e,t){var n=e.commit;return new m.a(function(e,a){n("setToken",t),e()})}},getters:{addRouters:function(e){return e.routerData.addRouters},token:function(e){return e.token},info:function(e){return e.role.info},roleList:function(e){return e.role.roleList},routers:function(e){return e.routerData.routers},logoShow:function(e){return e.layout.logoShow},isCollapse:function(e){return e.layout.isCollapse},uniquerouter:function(e){return e.layout.uniquerouter},tabnavBox:function(e){return e.layout.tabnavBox},visible:function(e){return e.layout.visible},left:function(e){return e.layout.left},top:function(e){return e.layout.top},rightNav:function(e){return e.layout.rightNav}},modules:{routerData:D,role:H,layout:X}}),Q=n("urW8"),G=n.n(Q),J=n("TXmL"),Y={en:k,cn:$};s.default.use(J.a);var K=new J.a({locale:localStorage.lang||"cn",messages:Y});G.a.i18n(function(e,t){return K.t(e,t)});var Z=K;l.prototype.$axios=v,l.config.productionTip=!1,l.use(u.a),O.beforeEach(function(e,t,n){if(W.getters.token&&"undefined"!==W.getters.token)if("/login"===e.path)n({path:"/"});else if(W.getters.info){if(e.matched.some(function(e){if(e.meta.role)return-1===W.getters.info.authorityRouter}))return n({path:"/404"}),!1;n()}else!function(){var t=r()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:v.post("/u/information").then(function(){var t=r()(o.a.mark(function t(a){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.dispatch("getInfo",a.data.data);case 2:return t.next=4,W.dispatch("newRoutes",W.getters.info.role);case 4:return t.next=6,O.addRoutes(W.getters.addRouters);case 6:n({path:e.path});case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(e){console.log(e)});case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()();else"/login"===e.path&&n(),n({path:"/login"})}),l.filter("formatTimestamp",function(e){return new Date(1e3*e).toLocaleString()}),new l({el:"#app",router:O,store:W,i18n:Z,render:function(e){return e(b)},components:{App:b},template:"<App/>"})},XB7e:function(e,t){},"fs/n":function(e,t){},hfm7:function(e,t){},ku50:function(e,t){},muQq:function(e,t){},sPnx:function(e,t){},tvR6:function(e,t){},w2Py:function(e,t){},xfzT:function(e,t){},yKUA:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.a67e28296e8dc74b6be6.js.map