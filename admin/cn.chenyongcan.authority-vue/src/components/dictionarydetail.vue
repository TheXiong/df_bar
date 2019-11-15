<template>
  <section>
    <el-row>
      <el-col :span='24'>
        <div class='bg-white h-100 mx-1 p-1 shadowed'>
          <el-tabs type="border-card">
            <el-tab-pane label="字典明细管理">
              <el-form :model="searchForm" ref="searchForm">
                <el-row>
                  <el-col :span="6">
                    <div class="demo-input-suffix">
                      <el-input v-model="searchForm.itemName" placeholder="请输入内容">
                        <template slot="prepend">名称：</template>
                      </el-input>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="demo-input-suffix">
                      <el-input v-model="searchForm.itemCode" placeholder="请输入内容">
                        <template slot="prepend">编码：</template>
                      </el-input>
                    </div>
                  </el-col>
                </el-row>
              </el-form>
            </el-tab-pane>
          </el-tabs>
          <el-tabs type='border-card'>
            <el-tab-pane label="字典明细管理">
                <el-button-group>
                  <el-button type='primary' @click='handleSearch()' icon="el-icon-search">查询</el-button>
                  <el-button type='primary' @click='handleAdd()' icon="el-icon-circle-plus">新增</el-button>
                  <el-button type='primary' @click='handleEdit()' icon="el-icon-edit">修改</el-button>
                  <el-button type='primary' @click='handleDel()' icon="el-icon-remove">删除</el-button>
                </el-button-group>
                <template>
                  <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" highlight-current-row style="width: 100%;"
                    @selection-change="handleSelectionChange">
                    <el-table-column type='selection' width='55'>
                    </el-table-column>
                    <el-table-column type='index' width='60'>
                    </el-table-column>
                    <el-table-column prop='dictionaryCode' label='字典主表编码' width='180'></el-table-column>
                    <el-table-column prop='itemCode' label='编码' width='180'></el-table-column>
                    <el-table-column prop='itemName' label='名称' width='180'></el-table-column>
                    <el-table-column prop='itemValue' label='值' width='180'></el-table-column>
                    <el-table-column prop='itemDesc' label='说明' width='180'></el-table-column>
                    <el-table-column prop='sortCode' label='排序' width='180'></el-table-column>

                    <el-table-column fixed='right' label='操作' width='300'>
                      <template slot-scope='scope'>
                        <el-button icon="el-icon-edit" @click='handleSingleEdit(scope.$index, scope.row)' type='text'
                          size='small'>编辑</el-button>
                        <el-button type="text" icon="el-icon-delete" class="red" @click="handleSingleDelete(scope.$index, scope.row)">删除</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-row>
                    <el-col :span='24' class='toolbar' style='padding-bottom: 0px;'>
                      <div class='pagination'>
                        <el-pagination @current-change='handleCurrentChange' layout='prev, pager, next' :total='total'
                          :page-size='20' :current-page='searchForm.page'>
                        </el-pagination>
                      </div>
                    </el-col>
                  </el-row>
                </template>
                <!--新增-->
                <el-dialog title='新增' :visible.sync='dialogAddVisible' width='50%' :before-close='handleClose'>
                  <el-form :model='addForm' label-width='80px' :rules='addFormRules' ref='addForm'>
                    <el-form-item label='上级' prop="parentId">
                      <el-input v-model='addForm.parentId' auto-complete='off'></el-input>
                    </el-form-item>
                    <el-form-item label='编码' prop="itemCode">
                      <el-input v-model='addForm.itemCode' auto-complete='off'></el-input>
                    </el-form-item>
                    <el-form-item label='名称' prop="itemName">
                      <el-input v-model='addForm.itemName' auto-complete='off'></el-input>
                    </el-form-item>
                    <el-form-item label='值' prop="itemValue">
                      <el-input v-model='addForm.itemValue' auto-complete='off'></el-input>
                    </el-form-item>
                    <el-form-item label='说明' prop="itemDesc">
                      <el-input v-model='addForm.itemDesc' auto-complete='off'></el-input>
                    </el-form-item>
                    <el-form-item label='排序' prop="sortCode">
                      <el-input-number v-model='addForm.sortCode' auto-complete='off'></el-input-number>
                    </el-form-item>
                  </el-form>
                  <span slot='footer' class='dialog-footer'>
                    <el-button @click='dialogAddVisible = false'>取 消</el-button>
                    <el-button type='primary' @click="handleSave('addForm')">确 定</el-button>
                  </span>
                </el-dialog>
                <!--修改-->
                <el-dialog title='修改' :visible.sync='dialogEditVisible' width='50%' :before-close='handleClose'>
                  <el-form :model='editForm' label-width='80px' :rules='editFormRules' ref='editForm'>
                    <el-form-item label='上级' prop="parentId">
                      <el-input v-model='editForm.parentId' auto-complete='off'></el-input>
                    </el-form-item>
                    <el-form-item label='编码' prop="itemCode">
                      <el-input v-model='editForm.itemCode' auto-complete='off'></el-input>
                    </el-form-item>
                    <el-form-item label='名称' prop="itemName">
                      <el-input v-model='editForm.itemName' auto-complete='off'></el-input>
                    </el-form-item>
                    <el-form-item label='值' prop="itemValue">
                      <el-input v-model='editForm.itemValue' auto-complete='off'></el-input>
                    </el-form-item>
                    <el-form-item label='说明' prop="itemDesc">
                      <el-input v-model='editForm.itemDesc' auto-complete='off'></el-input>
                    </el-form-item>
                    <el-form-item label='排序' prop="sortCode">
                      <el-input-number v-model='editForm.sortCode' auto-complete='off'></el-input-number>
                    </el-form-item>
                  </el-form>
                  <span slot='footer' class='dialog-footer'>
                    <el-button @click='dialogEditVisible = false'>取 消</el-button>
                    <el-button type='primary' @click="handleUpdate('editForm')">确 定</el-button>
                  </span>
                </el-dialog>
                <!--修改-->
                <el-dialog title='导入' :visible.sync='dialogImportVisible' width='50%' :before-close='handleClose'>
                  <el-form :model='uploadForm' label-width='80px' :rules='uploadFormRules' ref='uploadForm'>
                    <el-upload class='upload-demo' action='/upload' :on-preview='handlePreview' :on-remove='handleRemove'
                      :before-remove='beforeRemove' multiple :limit='3' :on-exceed='handleExceed' :file-list='fileList'>
                      <el-button size='small' type='primary'>点击上传</el-button>
                      <div slot='tip' class='el-upload__tip'>只能上传jpg/png文件，且不超过500kb<a href='模板下载'></a></div>
                    </el-upload>
                    <span slot='footer' class='dialog-footer'>
                      <el-button @click='dialogImportVisible = false'>取 消</el-button>
                      <el-button type='primary' @click="handleUpload('uploadForm')">确 定</el-button>
                    </span>
                  </el-form>

                </el-dialog>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  import qs from 'qs';
  import axios from 'axios';
  export default {
    data() {
      return {
        tableData: [],
        fileList: [],
        total: 1,
        multipleSelection: [],
        searchForm: {limits:20},
        dialogAddVisible: false,
        dialogEditVisible: false,
        dialogImportVisible: false,
        param:'',
        //新增界面数据
        addForm: {},
        uploadForm: {},
        editForm: {},
        addFormRules: {
          dictionaryCode: [{
            required: true,
            message: '请输入字典主表编码',
            trigger: 'blur'
          }],
          itemCode: [{
            required: true,
            message: '请输入编码',
            trigger: 'blur'
          }],
          itemName: [{
            required: true,
            message: '请输入名称',
            trigger: 'blur'
          }],
          itemValue: [{
            required: true,
            message: '请输入值',
            trigger: 'blur'
          }],
          itemDesc: [{
            required: true,
            message: '请输入说明',
            trigger: 'blur'
          }],
          sortCode: [{
            required: true,
            message: '请输入排序',
            trigger: 'blur'
          }],
        },
        editFormRules: {
          dictionaryCode: [{
            required: true,
            message: '请输入字典主表编码',
            trigger: 'blur'
          }],
          itemCode: [{
            required: true,
            message: '请输入编码',
            trigger: 'blur'
          }],
          itemName: [{
            required: true,
            message: '请输入名称',
            trigger: 'blur'
          }],
          itemValue: [{
            required: true,
            message: '请输入值',
            trigger: 'blur'
          }],
          itemDesc: [{
            required: true,
            message: '请输入说明',
            trigger: 'blur'
          }],
          sortCode: [{
            required: true,
            message: '请输入排序',
            trigger: 'blur'
          }],
        },
        uploadFormRules: {},
        importFormRules: {
          name: [{
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
          }]
        },
      }
    },
    created() {
    	this.param = this.$route.params.code;
    	this.handleSearch();
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleCurrentChange(val) {
        this.searchForm.page = val;
        this.handleSearch();
      },
      //重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // 查询
      handleSearch: function() {
        let self = this;
        if (self.searchForm.page == undefined) {
          self.searchForm.page = 1;
        }
        self.searchForm.dictionaryCode = this.param;
        self.$axios.post('/BaseDictionaryDetail/ListByPage?page=' + self.searchForm.page + "&limit=" + self.searchForm.limits, self.searchForm).then(function(response) {
          self.tableData = response.data.data;
          self.total = response.data.count;
          self.loading = false;
        }).catch(function(error) {
          self.$message.error('数据加载失败!');
        });
      },
      //显示新增界面
      handleAdd: function() {
        this.dialogAddVisible = true;
      },
      // 保存
      handleSave: function(formName) {
        let self = this;
        this.$refs[formName].validate((valid) => {
          self.addForm.dictionaryCode = this.param;
          if (valid) {
            this.$axios.post('/BaseDictionaryDetail/Create', this.addForm).then((res) => {
              if (res.data.code == 200) {
                self.$message.success(res.data.msg);
                self.handleSearch();
                self.dialogAddVisible = false;
                self.resetForm(formName);
              } else {
                self.$message.error(res.data.msg);
              }
            });
          } else {
            this.$message.error('请填写必填项');
          }
        }).catch(function(error) {
          self.$message.error('数据加载失败!');
        });
      },
      //更新
      handleUpdate: function(formName) {
        let self = this;
        this.$axios.post('/BaseDictionaryDetail/Edit', this.editForm).then((res) => {
          self.$message.success(res.data.msg);
          self.handleSearch();
          self.dialogEditVisible = false;
        }).catch(function(error) {
          self.$message.error('数据加载失败!');
        });
      },
      // 显示编辑界面
      handleEdit: function() {
        let self = this;
        if (self.multipleSelection.length == 0) {
          self.$message.warning('请选择修改项目');
        } else if (self.multipleSelection.length > 1) {
          self.$message.warning('只允许选择一项修改项目');
        } else {
          self.editForm = self.multipleSelection[0];
          console.log(self.editForm);
          this.dialogEditVisible = true;
        }
      },
      // 显示编辑界面
      handleSingleEdit: function(index,row) {
        let self = this;
        self.editForm = row;
        this.dialogEditVisible = true;
      },


      //显示导入界面
      handleImport: function() {
        this.dialogImportVisible = true;
      },


      //删除
      handleDel: function() {
        let self = this;
        let ids = [];
        if (self.multipleSelection.length == 0) {
          self.$message.warning('请选择删除项目');
          return;
        }
        this.$confirm('确认删除该记录吗?', '提示', {
          type: 'warning'
        }).then(() => {
          self.multipleSelection.map((item) => {
            ids.push(item.id);
          });
          self.$axios.post('/BaseDictionaryDetail/SetDeleted', qs.stringify({
            'ids': ids
          }, {
            indices: false
          })).then(function(response) {
            self.$message.success(response.data.msg);
            self.handleSearch();
          }).catch(function(error) {
            self.$message.error('数据加载失败!');
          });
        }).catch(() => {})
      },
      handleSingleDelete(index, row) {
        let self = this;
        self.$confirm('确认删除该记录吗?', '提示', {
          type: 'warning'
        }).then(() => {
          let para = {
            ids: row.id
          };
          axios.post('/BaseDictionaryDetail/SetDeleted', qs.stringify(para))
            .then(function(response) {
              self.$message.success(response.data.msg);
              self.handleSearch();
            })
            .catch(function(error) {
              self.$message.error('数据加载失败!');
            });
        }).catch(() => {});
      },
      // 导出
      handleExport: function() {
        axios.post('/BaseDictionaryDetail/export')
          .then(function(response) {
            self.$message.success(res.data.msg);
            self.handleSearch();
          })
          .catch(function(error) {
            self.$message.error('数据加载失败!');
          });
      },
      handlePrint: function() {
        let self = this;
        let ids = [];
        if (self.multipleSelection.length == 0) {
          self.$message.warning('请选择打印项目');
          return;
        } else {
          self.dialogPrintVisible = true;
          self.printTableData = self.multipleSelection;
        }
      },
      handlePreview: function() {},
      handleRemove: function() {},
      beforeRemove: function() {},
      handleExceed: function() {},
      // 上传
      //关装对话框
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>

<style>
</style>
