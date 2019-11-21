<template>
  <div>
    <div>
      <el-form inline ref="search" :model="searchForm" :rules="searchRule">
        <el-form-item label="搜索日志" prop="uid">
          <el-input type="text" v-model="searchForm.uid" autocomplete="off" placeholder="会员id"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="query">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="integralListData">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="uid" label="用户ID"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="change" label="积分变动"></el-table-column>
      <el-table-column prop="note" label="备注"></el-table-column>
      <el-table-column prop="join_time" label="时间">
        <template slot-scope="scope">{{scope.row.join_time | formatTimestamp}}</template>
      </el-table-column>
      <!-- <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column> -->
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="currentChange"
      @prev-click="currentChange"
      @next-click="currentChange"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "integralLog",
  data() {
    return {
      total: 0,
      page: 1,
      limit: 10,
      search: "",
      integralListData: [],
      searchForm: {
        uid: ""
      },
      searchRule: {
        uid: [
          {
            validator: (rule, value, callback) => {
              if (value === "" || /^[1-9]\d*$/.test(value)) {
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
    currentChange(page) {
      this.page = page;
      this.getList();
    },
    getList() {
      let postdata = {
        group: 0,
        user_id: this.searchForm.uid,
        page: this.page,
        limit: this.limit
        // search: this.search
      };
      this.$axios
        .post("/a/integral_log_list", postdata)
        .then(res => {
          this.integralListData = res.data.data.logs;
          this.total = res.data.data.count;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    query() {
      this.$refs.search.validate(valid => {
        if (valid) {
          this.getList();
        }
      });
    },
    reset() {
      this.searchForm.uid = "";
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
