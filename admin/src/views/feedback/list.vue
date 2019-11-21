<template>
  <div>
    <el-table :data="feedbackListData">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="uid" label="用户ID"></el-table-column>
      <el-table-column prop="feedback" label="反馈内容"></el-table-column>
      <el-table-column prop="join_time" label="时间">
          <template slot-scope="scope">
              {{scope.row.join_time | formatTimestamp}}
          </template>
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
  name: "feedbackList",
  data() {
    return {
      total: 0,
      page: 1,
      limit: 10,
      search: "",
      feedbackListData: [],
    };
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
        .post("/a/feedback_lists", postdata)
        .then(res => {
            console.log(res);
            
          this.feedbackListData = res.data.data.users;
          this.total = res.data.data.count;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style scoped>
</style>
