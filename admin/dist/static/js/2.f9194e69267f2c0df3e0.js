webpackJsonp([2],{"266B":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o={data:function(){return{dataForm:{info:""},dataFormRules:{info:[{required:!0,message:"请选择图片",trigger:"blur"}]},baseUrl:"https://mylife028.cn/"}},mounted:function(){var t=this;this.$axios.post("/u/contact_customer_service",{}).then(function(a){t.dataForm.info=a.data.data.customer}).catch(function(t){console.log(t)})},methods:{handleAvatarSuccess:function(t,a){this.dataForm.info=t.data.info},beforeAvatarUpload:function(t){var a=t.size/1024/1024<20;return a||this.$message.error("上传图片大小不能超过 20MB!"),a},submitForm:function(){var t=this;this.$refs.dataForm.validate(function(a){a&&t.$axios.post("/a/save_contact_customer_service",t.dataForm).then(function(a){t.$message({showClose:!0,message:"保存成功",type:"success"})}).catch(function(t){console.log(t)})})}}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataFormRules}},[e("el-form-item",{attrs:{label:"图片",prop:"info"}},[e("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.baseUrl+"api/v1/c/up","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload,accept:"image/*"}},[t.dataForm.info?e("img",{staticClass:"avatar",attrs:{src:t.baseUrl+t.dataForm.info}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(a){t.submitForm("ruleForm")}}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]};var r=e("VU/8")(o,s,!1,function(t){e("eMGs")},"data-v-d027fa74",null);a.default=r.exports},eMGs:function(t,a){}});
//# sourceMappingURL=2.f9194e69267f2c0df3e0.js.map