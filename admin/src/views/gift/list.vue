<template>
  <div>
    <div>
      <el-button
        type="primary"
        icon="el-icon-circle-plus-outline"
        size="mini"
        @click="handleCreate"
      >新增</el-button>
    </div>
    <el-table :data="integralListData">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="tag" label="赠送原因"></el-table-column>
      <el-table-column prop="name" label="赠送内容"></el-table-column>
      <el-table-column prop="note" label="机号"></el-table-column>
      <el-table-column prop="join_time" label="时间">
        <template slot-scope="scope">{{scope.row.join_time | formatTimestamp}}</template>
      </el-table-column>
      <!-- <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>-->
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="currentChange"
      @prev-click="currentChange"
      @next-click="currentChange"
    ></el-pagination>

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
  name: "integralLog",
  data() {
    return {
      total: 0,
      page: 1,
      limit: 10,
      search: "",
      integralListData: [],
      dataFormVisible: false,
      dataForm: {
        name: "",
        note: "",
        tag: ""
      },
      dataFormRules: {
        name: [{required:true,message:'请输入赠送内容',trigger:'blur'}],
        note: [{required:true,message:'请输入赠送机号',trigger:'blur'}],
        tag: [{required:true,message:'请输入赠送赠送原因',trigger:'blur'}]
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
        group: 400,
        // user_id: 0,
        page: this.page,
        limit: this.limit
        // search: this.search
      };
      this.$axios
        .post("/a/integral_log_list", postdata)
        .then(res => {
          console.log(res);

          this.integralListData = res.data.data.logs;
          this.total = res.data.data.count;
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
      this.dataFormVisible = true
      this.$nextTick(()=>{
        this.$refs.dataForm.clearValidate()
      })
    },
    formSubmit(){
      this.$refs.dataForm.validate(valid=>{
        if (valid) {
          this.$axios
        .post("/a/add_gift_record", this.dataForm)
        .then(res => {
          this.dataFormVisible = false
          this.getList()
        })
        .catch(function(error) {
          console.log(error);
        });
        }
      })
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style scoped>
</style>
