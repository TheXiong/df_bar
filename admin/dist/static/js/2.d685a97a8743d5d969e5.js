webpackJsonp([2],{"5L3t":function(t,e){},vDYw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"integralLog",data:function(){return{total:0,page:1,limit:10,search:"",integralListData:[],dataFormVisible:!1,dataForm:{name:"",note:"",tag:""},dataFormRules:{name:[{required:!0,message:"请输入赠送内容",trigger:"blur"}],note:[{required:!0,message:"请输入赠送机号",trigger:"blur"}],tag:[{required:!0,message:"请输入赠送赠送原因",trigger:"blur"}]}}},methods:{currentChange:function(t){this.page=t,this.getList()},getList:function(){var t=this,e={group:400,page:this.page,limit:this.limit};this.$axios.post("/a/integral_log_list",e).then(function(e){console.log(e),t.integralListData=e.data.data.logs,t.total=e.data.data.count}).catch(function(t){console.log(t)})},handleCreate:function(){var t=this;this.dataForm={name:"",note:"",tag:""},this.dataFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},formSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&t.$axios.post("/a/add_gift_record",t.dataForm).then(function(e){t.dataFormVisible=!1,t.getList()}).catch(function(t){console.log(t)})})}},mounted:function(){this.getList()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline",size:"mini"},on:{click:t.handleCreate}},[t._v("新增")])],1),t._v(" "),a("el-table",{attrs:{data:t.integralListData}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),t._v(" "),a("el-table-column",{attrs:{prop:"tag",label:"赠送原因"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"赠送内容"}}),t._v(" "),a("el-table-column",{attrs:{prop:"note",label:"机号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"join_time",label:"时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatTimestamp")(e.row.join_time)))]}}])})],1),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.currentChange,"prev-click":t.currentChange,"next-click":t.currentChange}}),t._v(" "),a("el-dialog",{attrs:{title:"新增",visible:t.dataFormVisible,width:"40%"},on:{"update:visible":function(e){t.dataFormVisible=e}}},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataFormRules}},[a("el-form-item",{attrs:{label:"机号",prop:"note"}},[a("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:t.dataForm.note,callback:function(e){t.$set(t.dataForm,"note",e)},expression:"dataForm.note"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"赠送内容",prop:"name"}},[a("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"赠送原因",prop:"tag"}},[a("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:t.dataForm.tag,callback:function(e){t.$set(t.dataForm,"tag",e)},expression:"dataForm.tag"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dataFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.formSubmit}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")(o,r,!1,function(t){a("5L3t")},"data-v-6e8286d2",null);e.default=n.exports}});
//# sourceMappingURL=2.d685a97a8743d5d969e5.js.map