webpackJsonp([10],{"8uOl":function(e,t){},tVh0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Dd8w"),o=a.n(i),r={name:"articleList",data:function(){return{total:0,page:1,limit:10,search:"",sort:null,userListData:[],roleVisible:!1,roleForm:{level:""},roleFormRules:{level:[{required:!0,message:"请选择角色",trigger:"blur"}]},roleList:this.$store.getters.roleList,editRow:null,integralVisible:!1,integralForm:{integral:""},integralFormRules:{integral:[{required:!0,message:"请填写积分变动值",trigger:"blur"},{validator:function(e,t,a){/^(\-?)\d+$/.test(t)?0!=t?a():a(new Error("变化值不能为0")):a(new Error("请输入数字"))},trigger:"blur"}]},baseVisible:!1,baseForm:{is_network_manager:"",network_manager_commission:"",is_store_manager:"",parent:""},baseFormRules:{is_network_manager:[],network_manager_commission:[{validator:function(e,t,a){""!==t&&"0"!==t?/^0\.\d+$|^[1-9]+(\.\d+)?$/.test(t)?a():a(new Error("请输入正数")):a()}}],is_store_manager:[],parent:[{validator:function(e,t,a){t?/^[1-9]\d{0,}$/.test(t)?a():a(new Error("请输入正整数")):a()}}]}}},methods:{handleEdit:function(e,t){var a=this;this.baseForm=o()({},t),this.editRow=t,this.baseVisible=!0,this.$nextTick(function(){a.$refs.baseForm.clearValidate()})},handleEditRole:function(e,t){var a=this;this.roleForm={level:""},this.editRow=t,this.roleVisible=!0,this.$nextTick(function(){a.$refs.roleForm.clearValidate()})},handleEditIntegral:function(e,t){var a=this;this.integralForm={integral:""},this.editRow=t,this.integralVisible=!0,this.$nextTick(function(){a.$refs.integralForm.clearValidate()})},baseSubmit:function(){var e=this;this.$refs.baseForm.validate(function(t){t&&e.$axios.post("/a/update_user",o()({},e.baseForm,{network_manager_commission:e.baseForm.network_manager_commission||0})).then(function(t){e.$message({showClose:!0,message:"操作成功",type:"success"}),e.getList(),e.baseVisible=!1}).catch(function(e){console.log(e)})})},roleSubmit:function(){var e=this;this.$refs.roleForm.validate(function(t){if(t){var a={level:e.roleForm.level,user_id:e.editRow.id};e.$axios.post("/a/set_manager",a).then(function(t){e.$message({showClose:!0,message:"操作成功",type:"success"}),e.getList(),e.roleVisible=!1}).catch(function(e){console.log(e)})}})},integralSubmit:function(){var e=this;this.$refs.integralForm.validate(function(t){if(t){var a={integral:e.integralForm.integral,user_id:e.editRow.id};e.$axios.post("/a/gift_points",a).then(function(t){e.$message({showClose:!0,message:"操作成功",type:"success"}),e.getList(),e.integralVisible=!1}).catch(function(e){console.log(e)})}})},currentChange:function(e){this.page=e,this.getList()},getList:function(){var e=this,t={page:this.page,limit:this.limit,search:this.search};this.$axios.post("/a/user_list",t).then(function(t){e.userListData=t.data.data.users,e.total=t.data.data.count}).catch(function(e){console.log(e)})},switchChange:function(e,t){var a=this,i={status:e,user_id:t};this.$axios.post("/a/update_user_status",i).then(function(e){a.$message({showClose:!0,message:"操作成功",type:"success"}),a.getList()}).catch(function(e){console.log(e)})},query:function(){this.getList()},reset:function(){this.search="",this.getList()}},mounted:function(){this.getList()}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("el-form",{attrs:{inline:""}},[a("el-form-item",{attrs:{label:"搜索用户"}},[a("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"用户id或电话"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.query}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:e.reset}},[e._v("重置")])],1)],1)],1),e._v(" "),a("el-table",{attrs:{data:e.userListData}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"用户名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile",label:"电话"}}),e._v(" "),a("el-table-column",{attrs:{prop:"integral",label:"积分"}}),e._v(" "),a("el-table-column",{attrs:{prop:"level_name",label:"角色"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":-1,"inactive-value":0,"active-text":"冻结","inactive-text":"正常"},on:{change:function(a){return e.switchChange(a,t.row.id)}},model:{value:t.row.status,callback:function(a){e.$set(t.row,"status",a)},expression:"scope.row.status"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"join_time",label:"时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("formatTimestamp")(t.row.join_time)))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("设置")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.handleEditRole(t.$index,t.row)}}},[e._v("设置角色")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.handleEditIntegral(t.$index,t.row)}}},[e._v("更改积分")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.total},on:{"current-change":e.currentChange,"prev-click":e.currentChange,"next-click":e.currentChange}}),e._v(" "),a("el-dialog",{attrs:{title:"设置角色",visible:e.roleVisible,width:"30%"},on:{"update:visible":function(t){e.roleVisible=t}}},[a("el-form",{ref:"roleForm",attrs:{model:e.roleForm,rules:e.roleFormRules}},[a("el-form-item",{attrs:{label:"角色",prop:"level"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.roleForm.level,callback:function(t){e.$set(e.roleForm,"level",t)},expression:"roleForm.level"}},e._l(e.roleList,function(e){return a("el-option",{key:e.level,attrs:{label:e.level_cnname,value:e.level}})}))],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.roleVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.roleSubmit}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"更改积分",visible:e.integralVisible,width:"30%"},on:{"update:visible":function(t){e.integralVisible=t}}},[a("el-form",{ref:"integralForm",attrs:{model:e.integralForm,rules:e.integralFormRules}},[a("el-form-item",{attrs:{label:"变化值",prop:"integral"}},[a("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.integralForm.integral,callback:function(t){e.$set(e.integralForm,"integral",t)},expression:"integralForm.integral"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.integralVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.integralSubmit}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"设置",visible:e.baseVisible,width:"30%"},on:{"update:visible":function(t){e.baseVisible=t}}},[a("el-form",{ref:"baseForm",attrs:{model:e.baseForm,rules:e.baseFormRules}},[a("el-form-item",{attrs:{label:"是否网管",prop:"is_network_manager"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-text":"是","inactive-text":"否"},model:{value:e.baseForm.is_network_manager,callback:function(t){e.$set(e.baseForm,"is_network_manager",t)},expression:"baseForm.is_network_manager"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否店长",prop:"is_store_manager"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-text":"是","inactive-text":"否"},model:{value:e.baseForm.is_store_manager,callback:function(t){e.$set(e.baseForm,"is_store_manager",t)},expression:"baseForm.is_store_manager"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"网管提成",prop:"network_manager_commission"}},[a("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.baseForm.network_manager_commission,callback:function(t){e.$set(e.baseForm,"network_manager_commission",t)},expression:"baseForm.network_manager_commission"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"会员所属网管ID",prop:"parent"}},[a("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.baseForm.parent,callback:function(t){e.$set(e.baseForm,"parent",t)},expression:"baseForm.parent"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.baseVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.baseSubmit}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(r,s,!1,function(e){a("8uOl")},"data-v-08dcadaf",null);t.default=l.exports}});
//# sourceMappingURL=10.f18b29651163b0fa54d5.js.map