<template>
  <section>
    <el-row>
      <el-col :span="24">
        <el-tabs type="border-card">
          <el-tab-pane label="子系统">
            <el-form :model="searchForm" ref="searchForm">
              <el-row>
                <el-col :span="6">
                  <div class="demo-input-suffix">
                    <el-select v-model="searchForm.systemId" placeholder="请选择子系统" @change="systemListChange">
                      <el-option key='' label='请选择' value=""></el-option>
                      <el-option v-for="item in systemList" :key="item.code" :label="item.title" :value="item.code">
                      </el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-row>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-tabs type="border-card">
          <el-tab-pane label="菜单">
            <div class="treesearch">
              <el-tree lazy node-key="id" :load="handleLoadTrea" :props="ListTreeProps" highlight-current
                highlight-current @node-click="handleNodeClick">
              </el-tree>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="18">
        <div class='bg-white h-100 mx-1 p-1 shadowed'>
          <el-tabs type='border-card'>
            <el-tab-pane label="菜单">
              <el-button-group>
                <el-button type='primary' @click='handleRefresh()' icon="el-icon-refresh">刷新</el-button>
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
                  <el-table-column prop='code' label='编码' width='180'></el-table-column>
                  <el-table-column prop='title' label='名称' width='180'></el-table-column>
                  <el-table-column prop='formName' label='窗口名称' width='180'></el-table-column>
                  <el-table-column prop='menuFlag' label='是否菜单' width='180'>
                    <template slot-scope="scope">
                      <el-tag v-if="scope.row.menuFlag === true" size="small" @click="handleAuditStatus(scope.$index, scope.row)">菜单</el-tag>
                      <el-tag v-else size="small" type="danger" @click="handleAuditStatus(scope.$index, scope.row)">按钮</el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column prop='vueUrl' label='链接' width='180'></el-table-column>
                  <el-table-column prop='sortCode' label='排序' width='180'></el-table-column>
                  <el-table-column prop='enableEdit' label='允许编辑' width='180'>
                    <template slot-scope="scope">
                      <el-tag v-if="scope.row.enableEdit === true" size="small" @click="handleAuditStatus(scope.$index, scope.row)">允许</el-tag>
                      <el-tag v-else size="small" type="danger" @click="handleAuditStatus(scope.$index, scope.row)">不允许</el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column prop='enableDelete' label='允许删除' width='180'>
                    <template slot-scope="scope">
                      <el-tag v-if="scope.row.enableDelete === true" size="small" @click="handleAuditStatus(scope.$index, scope.row)">允许</el-tag>
                      <el-tag v-else size="small" type="danger" @click="handleAuditStatus(scope.$index, scope.row)">不允许</el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column fixed='right' label='操作' width='300'>
                    <template slot-scope='scope'>
                      <el-button icon="el-icon-edit" @click='handleChild(scope.$index, scope.row)' type='text' size='small'>添加子节点</el-button>
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
                  <el-form-item label='编码' prop="code">
                    <el-input v-model='addForm.code' auto-complete='off'></el-input>
                  </el-form-item>
                  <el-form-item label='名称' prop="title">
                    <el-input v-model='addForm.title' auto-complete='off'></el-input>
                  </el-form-item>
                  <el-form-item label='窗口名称' prop="formName">
                    <el-input v-model='addForm.formName' auto-complete='off'></el-input>
                  </el-form-item>
                  <el-form-item label='链接' prop="vueUrl">
                    <el-input v-model='addForm.vueUrl' auto-complete='off'></el-input>
                  </el-form-item>
                  <el-form-item label='链接' prop="angularUrl">
                    <el-input v-model='addForm.angularUrl' auto-complete='off'></el-input>
                  </el-form-item>
                  <el-form-item label='排序' prop="sortCode">
                    <el-input v-model='addForm.sortCode' auto-complete='off'></el-input>
                  </el-form-item>
                  <el-form-item label='是否菜单' prop="menuFlag">
                    <el-switch v-model="addForm.menuFlag" active-color="#13ce66" inactive-color="#ff4949" :active-value="true"
                      :inactive-value="false">
                    </el-switch>
                  </el-form-item>
                  <el-form-item label='允许编辑' prop="enableEdit">
                    <el-switch v-model="addForm.enableEdit" active-color="#13ce66" inactive-color="#ff4949"
                      :active-value="true" :inactive-value="false">
                    </el-switch>
                  </el-form-item>
                  <el-form-item label='允许删除' prop="enableDelete">
                    <el-switch v-model="addForm.enableDelete" active-color="#13ce66" inactive-color="#ff4949"
                      :active-value="true" :inactive-value="false">
                    </el-switch>
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
                  <el-form-item label='编码' prop="code">
                    <el-input v-model='editForm.code' auto-complete='off'></el-input>
                  </el-form-item>
                  <el-form-item label='名称' prop="title">
                    <el-input v-model='editForm.title' auto-complete='off'></el-input>
                  </el-form-item>
                  <el-form-item label='窗口名称' prop="formName">
                    <el-input v-model='editForm.formName' auto-complete='off'></el-input>
                  </el-form-item>
                  <el-form-item label='链接' prop="vueUrl">
                    <el-input v-model='editForm.vueUrl' auto-complete='off'></el-input>
                  </el-form-item>
                  <el-form-item label='链接' prop="angularUrl">
                    <el-input v-model='editForm.angularUrl' auto-complete='off'></el-input>
                  </el-form-item>
                  <el-form-item label='排序' prop="sortCode">
                    <el-input v-model='editForm.sortCode' auto-complete='off'></el-input>
                  </el-form-item>
                  <el-form-item label='是否菜单' prop="menuFlag">
                    <el-switch v-model="editForm.menuFlag" active-color="#13ce66" inactive-color="#ff4949"
                      :active-value="true" :inactive-value="false">
                    </el-switch>
                  </el-form-item>
                  <el-form-item label='允许编辑' prop="enableEdit">
                    <el-switch v-model="editForm.enableEdit" active-color="#13ce66" inactive-color="#ff4949"
                      :active-value="true" :inactive-value="false">
                    </el-switch>
                  </el-form-item>
                  <el-form-item label='允许删除' prop="enableDelete">
                    <el-switch v-model="editForm.enableDelete" active-color="#13ce66" inactive-color="#ff4949"
                      :active-value="true" :inactive-value="false">
                    </el-switch>
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
                    <el-button type='primary' @click='handleUpload(' uploadForm')'>确 定</el-button>
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
        searchForm: {
          limits: 20,
          parentId: '0'
        },
        node: Object,
        resolve: Object,
        systemList: [],
        systemId: '',
        dialogAddVisible: false,
        dialogEditVisible: false,
        dialogImportVisible: false,
        //新增界面数据
        addForm: {
          parentId: '0'
        },
        uploadForm: {},
        editForm: {
          parentId: '0'
        },
        ListTreeProps: {
          label: 'name',
          children: [],
          isLeaf: 'leaf'
        },
        addFormRules: {
          code: [{
            required: true,
            message: '请输入编码',
            trigger: 'blur'
          }],
          title: [{
            required: true,
            message: '请输入名称',
            trigger: 'blur'
          }],
          sortCode: [{
            required: true,
            message: '请输入排序',
            trigger: 'blur'
          }],
          systemId: [{
            required: true,
            message: '请选择子系统',
            trigger: 'blur'
          }],
        },
        editFormRules: {
          code: [{
            required: true,
            message: '请输入编码',
            trigger: 'blur'
          }],
          title: [{
            required: true,
            message: '请输入名称',
            trigger: 'blur'
          }],
          sortCode: [{
            required: true,
            message: '请输入排序',
            trigger: 'blur'
          }],
          systemId: [{
            required: true,
            message: '请选择子系统',
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
      this.handleSearch();
      this.handleListSystem();
    },
    methods: {
      systemListChange: function(selectVal) {
        this.node_had.childNodes = []
        this.systemId = selectVal;
        this.addForm.systemId=selectVal;
        this.handleLoadTrea(this.node_had, this.resolve_had);
        this.handleSearch();
      },
      //加载树型区域菜单
      handleLoadTrea: function(node, resolve) {
        if (node.level === 0) {
          this.node_had = node;
          this.resolve_had = resolve;
          this.loadTrea(resolve, "0")
        }
        if (node.level >= 1) {

          this.loadTrea(resolve, node.data.id);
        }
      },
      //加载树型区域菜单
      loadTrea: function(resolve, parentId) {
        let self = this;
        if (self.systemId == '') {
          self.systemId = 'Base';
        }
        self.$axios.post("/BaseModule/GetMenusByParent", qs.stringify({
          "parentId": parentId,
          "systemId": self.systemId
        })).then((res) => {
          resolve(res.data.data);
        }).catch(function(error) {
          resolve([]);
          self.$message.error("数据加载失败!");
        });
      },
      //点击节点事件
      handleNodeClick: function(data) {
        this.searchForm.parentId = data.id;
        this.handleSearch();
      },
      handleRefresh: function() {
        this.searchForm.parentId = "0";
        this.handleSearch();
      },
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
      handleChild: function(index, row) {
        this.addForm.parentId = row.id;
        this.addForm.parentname = row.title;
        this.dialogAddVisible = true;
      },
      handleRefresh: function() {
        this.searchForm.parentId = "0";
        this.handleSearch();
      },
      handleListSystem: function() {
        let self = this;
        self.$axios.post('/BaseSystem/ListAll',
          self.searchForm).then(function(response) {
          self.systemList = response.data.data;
          self.loading = false;
        }).catch(function(error) {
          self.$message.error('数据加载失败!');
        });
      },
      // 查询
      handleSearch: function() {
        let self = this;
        if (self.searchForm.page == undefined) {
          self.searchForm.page = 1;
        }
        if (self.systemId == '') {
          self.searchForm.systemId = 'Base';
        } else {
          self.searchForm.systemId = self.systemId ;
        }
        self.$axios.post('/BaseModule/ListByPage?page=' + self.searchForm.page + "&limit=" + self.searchForm.limits,
          self.searchForm).then(function(response) {
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
          if (valid) {
            this.$axios.post('/BaseModule/Create', this.addForm).then((res) => {
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
        this.$axios.post('/BaseModule/Edit', this.editForm).then((res) => {
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
      handleSingleEdit: function(index, row) {
        let self = this;
        if (row.enableEdit == false) {
          self.$message.warning('项目不允许编辑');
        } else {
          self.editForm = row;
          this.dialogEditVisible = true;
        }
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
          self.$axios.post('/BaseModule/SetDeleted', qs.stringify({
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
        if (row.enableDelete == false) {
          self.$message.warning('项目不允许删除');
          return;
        }
        self.$confirm('确认删除该记录吗?', '提示', {
          type: 'warning'
        }).then(() => {
          let para = {
            ids: row.id
          };
          axios.post('/BaseModule/setDeleted', qs.stringify(para))
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
        axios.post('/BaseModule/export')
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
