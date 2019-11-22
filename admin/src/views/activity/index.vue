<template>
  <div>
    <el-form :model="dataForm" ref="dataForm" :rules="dataFormRules">
      <el-form-item label="活动内容" prop="info">
        <el-input type="textarea" placeholder="请输入内容" :autosize="{ minRows: 10}" v-model="dataForm.info"></el-input>
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
        info: [{required:true,message:'请输入活动内容',trigger:'blur'}]
      }
    };
  },
  mounted() {
    this.$axios
      .post("/u/activity_describe", {})
      .then(res => {
        this.dataForm.info = res.data.data.describe;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    submitForm() {
      this.$refs.dataForm.validate(valid => {
        if (valid) {
          this.$axios
            .post("/a/set_activity_describe", this.dataForm)
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