<template>
  <div>
    <el-form :model="dataForm" ref="dataForm" :rules="dataFormRules">
      <el-form-item label="图片" prop="info">
        <el-upload
          class="avatar-uploader"
          :action="baseUrl+'api/v1/c/up'"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          accept="image/*"
        >
          <img v-if="dataForm.info" :src="baseUrl+dataForm.info" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataForm: {
        info: ""
      },
      dataFormRules: {
        info: []
      },
      baseUrl: "http://xcs.mylife028.cn/"
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log(res);
      this.dataForm.info = res.data.info;
      //   this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isLt20M = file.size / 1024 / 1024 < 20;

      if (!isLt20M) {
        this.$message.error("上传图片大小不能超过 20MB!");
      }
      return isLt20M;
    },
    submitForm() {
      this.$refs.dataForm.validate(valid => {
        if (valid) {
          this.$axios
            .post("/a/save_contact_customer_service", this.dataForm)
            .then(res => {
              this.$message({
                showClose: true,
                message: "保存成功",
                type: "success"
              });
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      });
    }
  }
};
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>