<template>
  <div>
    <div>
      <el-form inline>
        <el-form-item label="搜索商品">
          <el-input type="text" v-model="search" autocomplete="off" placeholder="商品名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="query">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>

      <el-button
        type="primary"
        icon="el-icon-circle-plus-outline"
        size="mini"
        @click="handleCreate"
      >新增</el-button>
    </div>
    <el-table :data="shopListData">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="商品名"></el-table-column>
      <el-table-column prop="integral" label="积分"></el-table-column>
      <el-table-column prop="group" label="分组">
        <template slot-scope="scope">{{scope.row.group | getShopTypeName(shopTypeListData)}}</template>
      </el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
          <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="currentChange"
      @prev-click="currentChange"
      @next-click="currentChange"
    ></el-pagination>

    <el-dialog :title="dataForm.id?'编辑':'新增'" :visible.sync="dataFormVisible" width="40%">
      <el-form :model="dataForm" ref="dataForm" :rules="dataFormRules">
        <el-form-item label="商品名" prop="name">
          <el-input type="text" v-model="dataForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品分组" prop="group">
          <el-select v-model="dataForm.group" placeholder="请选择">
            <el-option
              v-for="item in shopTypeListData"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="兑换积分" prop="integral">
          <el-input type="text" v-model="dataForm.integral" autocomplete="off"></el-input>
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
  name: "articleList",
  data() {
    return {
      total: 0,
      page: 1,
      limit: 10,
      search: "",
      shopListData: [],
      shopTypeListData: [],
      editRow: null,
      dataFormVisible: false,
      dataForm: {
        name: "",
        group: "",
        integral: ""
      },
      dataFormRules: {
        name: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        group: [{ required: true, message: "请选择商品分组", trigger: "blur" }],
        integral: [
          { required: true, message: "请输入积分", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (!/^[1-9]\d*$/.test(value)) {
                callback(new Error("请输入正整数"));
              }
              callback();
            },
            trigger: "blur"
          }
        ]
      }
    };
  },
  filters: {
    getShopTypeName(value, shopTypeListData) {
      if (shopTypeListData.length == 0) {
        return "";
      } else {
        let matched = shopTypeListData.filter(item => {
          return item.id == value;
        });
        return matched[0] ? matched[0].name : "";
      }
    }
  },
  methods: {
    currentChange(page) {
      this.page = page;
      this.getList();
    },
    getList() {
      let postdata = {
        page: this.page,
        limit: this.limit,
        search: this.search
      };
      this.$axios
        .post("/a/goods_list", postdata)
        .then(res => {
          this.shopListData = res.data.data.goods;
          this.total = res.data.data.count;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getTypeList() {
      this.$axios
        .post("/u/goods_group_list", {})
        .then(res => {
          this.shopTypeListData = res.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    handleCreate() {
      this.dataForm = {
        name: "",
        group: "",
        integral: ""
      };
      this.dataFormVisible = true;
      this.$nextTick(() => {
        this.$refs.dataForm.clearValidate();
      });
    },
    handleEdit(index, row) {},
    formSubmit() {
      this.$refs.dataForm.validate(valid => {
        if (valid) {
          this.$axios
            .post("/a/add_goods", { ...this.dataForm, tag: "1" })
            .then(res => {
              this.$message({
                showClose: true,
                message: "新增成功",
                type: "success"
              });
              this.dataFormVisible = false;
              this.getList();
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      });
    },
    handleDelete(index, row) {
      this.$axios
        .post("/a/goods_del", { goods: row.id })
        .then(res => {
          this.$message({
            showClose: true,
            message: "删除成功",
            type: "success"
          });
          this.getList();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    query(){
      this.getList();
    },
    reset(){
      this.search = ''
      this.getList();
    }
  },
  mounted() {
    this.getList();
    this.getTypeList();
  }
};
</script>

<style scoped>
</style>
