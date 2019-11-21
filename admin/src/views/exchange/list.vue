<template>
  <div>
    <div>
      <el-form inline>
        <el-form-item label="搜索核销码">
          <el-input type="text" v-model="search" autocomplete="off" placeholder="核销码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="query">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="integralListData">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="核销码"></el-table-column>
      <el-table-column prop="change" label="使用积分"></el-table-column>
      <el-table-column prop="join_time" label="时间">
        <template slot-scope="scope">{{scope.row.join_time | formatTimestamp}}</template>
      </el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">{{scope.row.status==0?'未使用':'已使用'}}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">核销</el-button>
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
      integralListData: []
    };
  },
  methods: {
    currentChange(page) {
      this.page = page;
      this.getList();
    },
    getList() {
      let postdata = {
        group: 200,
        user_id: 0,
        page: this.page,
        limit: this.limit,
        search: this.search
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
    handleEdit(index, row) {
      this.$axios
        .post("/a/use_verify_code", {
          id: row.id
        })
        .then(res => {
          this.$message({
            showClose: true,
            message: "核销成功",
            type: "success"
          });
          this.getList();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    query(){
        this.getList()
    },
    reset(){
        this.search = '';
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
