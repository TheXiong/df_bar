<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-row :gutter="20">
          活动开关:
          <el-switch
            v-model="power"
            :active-value="1"
            :inactive-value="0"
            active-text="开启"
            inactive-text="关闭"
            @change="switchChange"
          ></el-switch>
        </el-row>
        <br>
        <el-row :gutter="20">
          <el-button type="primary" @click="handleCreate">新增赠送</el-button>
        </el-row>
      </el-col>
      <el-col :span="16">
        <el-table :data="integralCountData">
          <el-table-column prop="id" label="商品ID"></el-table-column>
          <el-table-column prop="name" label="商品名称"></el-table-column>
          <el-table-column prop="integrals" label="累计积分"></el-table-column>
        </el-table>
        <!-- <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          @current-change="currentChange"
          @prev-click="currentChange"
          @next-click="currentChange"
        ></el-pagination> -->
      </el-col>
    </el-row>

    <el-dialog :title="'新增'" :visible.sync="dataFormVisible" width="40%">
      <el-form :model="dataForm" ref="dataForm" :rules="dataFormRules">
        <el-form-item label="机号" prop="note">
          <el-input type="text" v-model="dataForm.note" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="赠送内容" prop="name">
          <el-input type="text" v-model="dataForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="赠送原因" prop="tag">
          <el-input type="text" v-model="dataForm.tag" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dataFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="formSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "mainIndex",
  data() {
    return {
      dataFormVisible: false,
      dataForm: {
        name: "",
        note: "",
        tag: ""
      },
      dataFormRules: {
        name: [{ required: true, message: "请输入赠送内容", trigger: "blur" }],
        note: [{ required: true, message: "请输入赠送机号", trigger: "blur" }],
        tag: [
          { required: true, message: "请输入赠送赠送原因", trigger: "blur" }
        ]
      },
      power: "",
      integralCountData: [],
      total: 0,
      page: 1,
      limit: 10,
    };
  },
  mounted() {
    this.getSwitchStatus();
    this.getList();
  },
  methods: {
    getList() {
      this.$axios
        .post("/a/goods_integral_count", {page:this.page,limit:this.limit})
        .then(res => {
          this.integralCountData = res.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getSwitchStatus() {
      this.$axios
        .post("/a/get_activity_switch", {})
        .then(res => {
          this.power = res.data.data.power;
        })
        .catch(function(error) {
          this.power = this.power == 1 ? 0 : 1;
        });
    },
    switchChange() {
      this.$axios
        .post("/a/set_activity_switch", { power: this.power })
        .then(res => {
          this.$message({
            showClose: true,
            message: "操作成功",
            type: "success"
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    handleCreate() {
      this.dataForm = {
        name: "",
        note: "",
        tag: ""
      };
      this.dataFormVisible = true;
      this.$nextTick(() => {
        this.$refs.dataForm.clearValidate();
      });
    },
    formSubmit() {
      this.$refs.dataForm.validate(valid => {
        if (valid) {
          this.$axios
            .post("/a/add_gift_record", this.dataForm)
            .then(res => {
              this.dataFormVisible = false;
              this.getList();
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      });
    },
    currentChange(page) {
      this.page = page;
      this.getList();
    },
  }
};
</script>

<style lang="scss">
$top: top;
$bottom: bottom;
$left: left;
$right: right;
$leftright: ($left, $right);
$pinkk: #eec2d3;
$bluee: #409eff;
$yelloww: #f4d884;
$grennn: #89dda0;
$purplee: #78a2ea;
$lightBluee: #b8d6ff;

$list: bluee pinkk yelloww grennn purplee lightBluee;
$list1: $bluee $pinkk $yelloww $grennn $purplee $lightBluee;
%shadow {
  background: #fff;
  -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.2);
  .title {
    font-size: 14px;
    padding: 10px;
    i {
      margin-#{$right}: 5px;
    }
  }
}

@mixin flex($direction: row, $content: space-between) {
  display: flex;
  flex-direction: $direction;
  justify-content: $content;
}
.card {
  color: #666;
  @extend %shadow;

  ul {
    @include flex;
    li {
      flex: 1;
      a {
        color: #666666;
        align-items: center;
        padding-#{$top}: 20px;
        padding-#{$bottom}: 20px;
        @include flex(column);
        span {
          height: 44px;
        }
        .num {
          line-height: 44px;
          font-size: 42px;
          color: $bluee;
          margin: 0px;
        }
      }
      .kjfs-bluee {
        color: $bluee;
      }
      .kjfs-pinkk {
        color: $pinkk;
      }
      .kjfs-yelloww {
        color: $yelloww;
      }
      .kjfs-grennn {
        color: $grennn;
      }
      .kjfs-purplee {
        color: $purplee;
      }
      .kjfs-lightBluee {
        color: $lightBluee;
      }
      &:hover {
        .kjfs-bluee {
          color: #ffffff;
          background: $bluee;
        }
        .kjfs-pinkk {
          color: #ffffff;
          background: $pinkk;
        }
        .kjfs-yelloww {
          color: #ffffff;
          background: $yelloww;
        }
        .kjfs-grennn {
          color: #ffffff;
          background: $grennn;
        }
        .kjfs-purplee {
          color: #ffffff;
          background: $purplee;
        }
        .kjfs-lightBluee {
          color: #ffffff;
          background: $lightBluee;
        }
      }
    }
  }
  .table {
    padding: 21px;
    p {
      height: 52px;
      line-height: 52px;
      border: 1px solid #cccccc;
      overflow: hidden;
      border-#{$top}: none;
      @include flex(null, start);
      &:first-child {
        border-#{$top}: 1px solid #cccccc;
      }
      span {
      }
      .tit {
        width: 90px;
        min-width: 90px;
        height: 100%;
        text-align: center;
        border-#{$right}: 1px solid #cccccc;
        margin-#{$right}: 18px;
      }
      span.gitbox {
        flex: 1;
        height: 100%;
        overflow: hidden;
        @include flex(row, start);
        a {
          &:first-child {
            margin-#{$right}: 30px;
          }
        }
      }
    }
  }
}
#lineEcharts {
  margin-#{$top}: 30px;
  padding-#{$top}: 30px;
  @extend %shadow;
}
#maintable {
  margin-#{$top}: 30px;
  padding-#{$top}: 10px;
  @extend %shadow;
}
</style>
