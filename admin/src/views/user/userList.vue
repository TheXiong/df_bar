<template>
  <div>
    <div>
      <el-form inline>
        <el-form-item label="搜索用户">
          <el-input type="text" v-model="search" autocomplete="off" placeholder="用户id或电话"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="query">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="userListData">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="用户名"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column prop="integral" label="积分"></el-table-column>
      <el-table-column prop="level_name" label="角色"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.status"
            @change="(newStatus)=>switchChange(newStatus,scope.row.id)"
            :active-value="-1"
            :inactive-value="0"
            active-text="冻结"
            inactive-text="正常"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="join_time" label="时间">
        <template slot-scope="scope">{{scope.row.join_time | formatTimestamp}}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">设置</el-button>
          <el-button size="mini" @click="handleEditRole(scope.$index, scope.row)">设置角色</el-button>
          <el-button size="mini" @click="handleEditIntegral(scope.$index, scope.row)">更改积分</el-button>
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

    <el-dialog title="设置角色" :visible.sync="roleVisible" width="30%">
      <el-form :model="roleForm" ref="roleForm" :rules="roleFormRules">
        <el-form-item label="角色" prop="level">
          <el-select v-model="roleForm.level" placeholder="请选择">
            <el-option
              v-for="item in roleList"
              :key="item.level"
              :label="item.level_cnname"
              :value="item.level"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="roleVisible = false">取 消</el-button>
        <el-button type="primary" @click="roleSubmit">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="更改积分" :visible.sync="integralVisible" width="30%">
      <el-form :model="integralForm" ref="integralForm" :rules="integralFormRules">
        <el-form-item label="变化值" prop="integral">
          <el-input type="text" v-model="integralForm.integral" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="integralVisible = false">取 消</el-button>
        <el-button type="primary" @click="integralSubmit">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="设置" :visible.sync="baseVisible" width="30%">
      <el-form :model="baseForm" ref="baseForm" :rules="baseFormRules">
        <el-form-item label="是否网管" prop="is_network_manager">
          <el-switch
            v-model="baseForm.is_network_manager"
            :active-value="1"
            :inactive-value="0"
            active-text="是"
            inactive-text="否"
          ></el-switch>
        </el-form-item>
        <el-form-item label="是否店长" prop="is_store_manager">
          <el-switch
            v-model="baseForm.is_store_manager"
            :active-value="1"
            :inactive-value="0"
            active-text="是"
            inactive-text="否"
          ></el-switch>
        </el-form-item>
        <el-form-item label="网管提成" prop="network_manager_commission">
          <el-input type="text" v-model="baseForm.network_manager_commission" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="会员所属网管ID" prop="parent">
          <el-input type="text" v-model="baseForm.parent" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="baseVisible = false">取 消</el-button>
        <el-button type="primary" @click="baseSubmit">确 定</el-button>
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
      sort: null,
      userListData: [],
      roleVisible: false,
      roleForm: {
        level: ""
      },
      roleFormRules: {
        level: [{ required: true, message: "请选择角色", trigger: "blur" }]
      },
      roleList: this.$store.getters.roleList,
      editRow: null,
      integralVisible: false,
      integralForm: {
        integral: ""
      },
      integralFormRules: {
        integral: [
          { required: true, message: "请填写积分变动值", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (!/^(\-?)\d+$/.test(value)) {
                callback(new Error("请输入数字"));
                return;
              }
              if (value == 0) {
                callback(new Error("变化值不能为0"));
                return;
              }
              callback();
            },
            trigger: "blur"
          }
        ]
      },
      baseVisible: false,
      baseForm: {
        is_network_manager: "",
        network_manager_commission: "",
        is_store_manager: "",
        parent: ""
      },
      baseFormRules: {
        is_network_manager: [],
        network_manager_commission: [
          {
            validator: (rule, value, callback) => {
              if (value===''||value === '0') {
                callback();
                return;
              }
              if (/^0\.\d+$|^[1-9]+(\.\d+)?$/.test(value)) {
                callback();
              } else {
                callback(new Error("请输入正数"));
              }
            }
          }
        ],
        is_store_manager: [],
        parent: [
          {
            validator: (rule, value, callback) => {
              if (!value) {
                callback();
                return;
              }
              if (/^[1-9]\d{0,}$/.test(value)) {
                callback();
              } else {
                callback(new Error("请输入正整数"));
              }
            }
          }
        ]
      }
    };
  },
  methods: {
    handleEdit(index, row) {
      this.baseForm = {
        ...row
      };
      this.editRow = row;
      this.baseVisible = true;
      this.$nextTick(() => {
        this.$refs.baseForm.clearValidate();
      });
    },
    handleEditRole(index, row) {
      this.roleForm = {
        level: ""
      };
      this.editRow = row;
      this.roleVisible = true;
      this.$nextTick(() => {
        this.$refs.roleForm.clearValidate();
      });
    },
    handleEditIntegral(index, row) {
      this.integralForm = {
        integral: ""
      };
      this.editRow = row;
      this.integralVisible = true;
      this.$nextTick(() => {
        this.$refs.integralForm.clearValidate();
      });
    },
    baseSubmit() {
      this.$refs.baseForm.validate(valid => {
        if (valid) {
          this.$axios
            .post("/a/update_user", {
              ...this.baseForm,
              network_manager_commission:
                this.baseForm.network_manager_commission || 0
            })
            .then(res => {
              this.$message({
                showClose: true,
                message: "操作成功",
                type: "success"
              });
              this.getList();
              this.baseVisible = false;
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      });
    },
    roleSubmit() {
      this.$refs.roleForm.validate(valid => {
        if (valid) {
          let postdata = {
            level: this.roleForm.level,
            user_id: this.editRow.id
          };
          this.$axios
            .post("/a/set_manager", postdata)
            .then(res => {
              this.$message({
                showClose: true,
                message: "操作成功",
                type: "success"
              });
              this.getList();
              this.roleVisible = false;
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      });
    },
    integralSubmit() {
      this.$refs.integralForm.validate(valid => {
        if (valid) {
          let postdata = {
            integral: this.integralForm.integral,
            user_id: this.editRow.id
          };
          this.$axios
            .post("/a/gift_points", postdata)
            .then(res => {
              this.$message({
                showClose: true,
                message: "操作成功",
                type: "success"
              });
              this.getList();
              this.integralVisible = false;
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
    getList() {
      let postdata = {
        page: this.page,
        limit: this.limit,
        search: this.search
      };
      this.$axios
        .post("/a/user_list", postdata)
        .then(res => {
          this.userListData = res.data.data.users;
          this.total = res.data.data.count;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    switchChange(newStatus, id) {
      let postdata = {
        status: newStatus,
        user_id: id
      };
      this.$axios
        .post("/a/update_user_status", postdata)
        .then(res => {
          this.$message({
            showClose: true,
            message: "操作成功",
            type: "success"
          });
          this.getList();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    query() {
      this.getList();
    },
    reset() {
      this.search = "";
      this.getList();
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style scoped>
</style>
