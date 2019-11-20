<template>
  <div>
    <el-table :data="orderListData">
      <el-table-column prop="id" label="订单ID"></el-table-column>
      <el-table-column prop="uid" label="用户ID"></el-table-column>
      <el-table-column prop="name" label="商品"></el-table-column>
      <el-table-column prop="integral" label="消耗总积分"></el-table-column>
      <el-table-column prop="join_time" label="时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
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
  name: "articleList",
  data() {
    return {
      total: 0,
      page: 1,
      limit: 10,
      search: "",
      orderListData: [],
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
        .post("/a/order_lists", postdata)
        .then(res => {
          this.orderListData = res.data.data.orders;
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
