<template>
  <section>
    <el-row>
      <el-col :span='24'>
        <div class='bg-white h-100 mx-1 p-1 shadowed'>
          <el-tabs type="border-card">
            <el-tab-pane label="角色管理">
              <el-form :model="searchForm" ref="searchForm">
                <el-row>
                  <el-col :span="6">
                    <div class="demo-input-suffix">
                      <el-input v-model="searchForm.title" placeholder="请输入内容">
                        <template slot="prepend">名称：</template>
                      </el-input>
                    </div>
                  </el-col>
                </el-row>
              </el-form>
            </el-tab-pane>
          </el-tabs>
          <el-tabs type='border-card'>
            <el-tab-pane label="角色管理">

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
                  <el-table-column prop='title' label='名称' width='180'></el-table-column>
                  <el-table-column prop='description' label='说明' width='180'></el-table-column>
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
                  <el-table-column fixed='right' label='操作' width='400'>
                    <template slot-scope='scope'>
                      <el-button icon="el-icon-edit" @click='handleSetUsers(scope.$index, scope.row)' type='text' size='small'>分配用户</el-button>
                      <el-button icon="el-icon-edit" @click='handleViewUsers(scope.$index, scope.row)' type='text' size='small'>查看用户</el-button>
                      <el-button icon="el-icon-edit" @click='handleSetAuthority(scope.$index, scope.row)' type='text'
                        size='small'>授权</el-button>
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
                  <el-form-item label='名称' prop="title">
                    <el-input v-model='addForm.title' auto-complete='off'></el-input>
                  </el-form-item>
                  <el-form-item label='说明' prop="description">
                    <el-input v-model='addForm.description' auto-complete='off'></el-input>
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
                  <el-form-item label='名称' prop="title">
                    <el-input v-model='editForm.title' auto-complete='off'></el-input>
                  </el-form-item>
                  <el-form-item label='说明' prop="description">
                    <el-input v-model='editForm.description' auto-complete='off'></el-input>
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
                    <el-button type='primary' @click="handleUpload('uploadForm')">确 定</el-button>
                  </span>
                </el-form>

              </el-dialog>
              <el-dialog title='分配用户' :visible.sync='dialogSetUsersVisible' width='50%' :before-close='handleClose'>
                <el-table ref="multipleTable" :data="tableUserData" tooltip-effect="dark" highlight-current-row style="width: 100%;"
                  @selection-change="handleSelectionChangeUserData">
                  <el-table-column type='selection' width='55'>
                  </el-table-column>
                  <el-table-column type='index' width='60'>
                  </el-table-column>
                  <el-table-column prop='username' label='用户名' width='180'></el-table-column>
                  <el-table-column prop='truename' label='真实姓名' width='180'></el-table-column>
                </el-table>
                <el-row>
                  <el-col :span='24' class='toolbar' style='padding-bottom: 0px;'>
                    <div class='pagination'>
                      <el-pagination @current-change='handleCurrentChangeUser' layout='prev, pager, next' :total='totalUser'
                        :page-size='20' :current-page='searchUserForm.page'>
                      </el-pagination>
                    </div>
                  </el-col>
                </el-row>
                <span slot='footer' class='dialog-footer'>
                  <el-button @click='dialogSetUsersVisible = false'>取 消</el-button>
                  <el-button type='primary' @click="handleSetUsersSave()">确 定</el-button>
                </span>
              </el-dialog>

              <el-dialog title='用户' :visible.sync='dialogRoleUsersVisible' width='50%' :before-close='handleClose'>
                <el-table ref="multipleTable" :data="tableRoleUserData" tooltip-effect="dark" highlight-current-row
                  style="width: 100%;" @selection-change="handleSelectionChangeRoleUserData">
                  <el-table-column type='selection' width='55'>
                  </el-table-column>
                  <el-table-column type='index' width='60'>
                  </el-table-column>
                  <el-table-column prop='username' label='用户名' width='180'></el-table-column>
                  <el-table-column prop='truename' label='真实姓名' width='180'></el-table-column>
                </el-table>
                <el-row>
                  <el-col :span='24' class='toolbar' style='padding-bottom: 0px;'>
                    <div class='pagination'>
                      <el-pagination @current-change='handleCurrentChangeRoleUser' layout='prev, pager, next' :total='totalRoleUser'
                        :page-size='20' :current-page='searchUserRoleForm.page'>
                      </el-pagination>
                    </div>
                  </el-col>
                </el-row>
              </el-dialog>
              <el-dialog title='授权' :visible.sync='dialogAuthorityVisible' width='50%' :before-close='handleClose'>
                <div class="tree">
                  <el-tree :data="menuList" show-checkbox :props="menuListTreeProps" node-key="id" ref="menuListTree"
                    :default-expand-all="true" :highlight-current="true" :expand-on-click-node="false">
                  </el-tree>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogAuthorityVisible = false">取 消</el-button>
                  <el-button type='primary' @click="handleAuthoritySave()">确 定</el-button>
                </span>
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
        menuList: [],
        tableData: [],
        tableRoleUserData: [],
        fileList: [],
        total: 1,
        totalUser: 1,
        totalRoleUser: 1,
        multipleSelection: [],
        multipleSelectionUser: [],
        multipleSelectionUserRole: [],
        searchForm: {
          limits: 20
        },
        searchUserForm: {
          limits: 20
        },
        searchUserRoleForm: {
          limits: 20
        },
        menuListTreeProps: {
          label: 'title',
          children: 'children'
        },
        tempKey: "9999999999999",
        dialogAddVisible: false,
        dialogEditVisible: false,
        dialogImportVisible: false,
        dialogSetUsersVisible: false,
        dialogRoleUsersVisible: false,
        dialogAuthorityVisible: false,
        roleId: '',
        menuIdList: [],
        //新增界面数据
        addForm: {
          enableEdit: false,
          enableDelete: false,
        },
        uploadForm: {},
        editForm: {},
        tableUserData: [],
        addFormRules: {
          title: [{
            required: true,
            message: '请输入名称',
            trigger: 'blur'
          }],
          description: [{
            required: true,
            message: '请输入说明',
            trigger: 'blur'
          }],
        },
        editFormRules: {
          title: [{
            required: true,
            message: '请输入名称',
            trigger: 'blur'
          }],
          description: [{
            required: true,
            message: '请输入说明',
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
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSelectionChangeUserData(val) {
        this.multipleSelectionUser = val;
      },
      handleSelectionChangeRoleUserData(val) {
        this.multipleSelectionUserRole = val;
      },
      handleCurrentChangeRoleUser(val) {
        self.searchUserRoleForm.page = val;
        this.handleUserRoleSearch();
      },
      handleCurrentChangeUser(val) {
        self.searchUserForm.page = val;
        this.handleUserSearch();
      },
      handleCurrentChange(val) {
        this.searchForm.page = val;
        this.handleSearch();
      },
      handleSetAuthority: function(index, row) {
        this.roleId = row.id;
        this.dialogAuthorityVisible = true;
        this.initMenuTree();
      },
      //重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      treeDataTranslate: function(data, id = 'id', pid = 'parentId') {
        var res = []
        var temp = {}
        for (var i = 0; i < data.length; i++) {
          temp[data[i][id]] = data[i]
        }
        for (var k = 0; k < data.length; k++) {
          if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
            if (!temp[data[k][pid]]['children']) {
              temp[data[k][pid]]['children'] = []
            }
            if (!temp[data[k][pid]]['_level']) {
              temp[data[k][pid]]['_level'] = 1
            }
            data[k]['_level'] = temp[data[k][pid]]._level + 1
            temp[data[k][pid]]['children'].push(data[k])
          } else {
            res.push(data[k])
          }
        }
        return res
      },
      listMenuTree: function() {
        let self = this;
        self.url = "/BaseModule/ListByPage?page=1&limit=1000";
        return self.$axios.post(self.url, {});
      },
      listAuthority: function() {
        let self = this;
        return self.$axios.post('/BaseRole/ListAuthority/' + this.roleId);
      },
      initMenuTree: function() {
        let self = this;
        axios.all([this.listMenuTree(), this.listAuthority()])
          .then(axios.spread(function(menu, perms) {
            if (menu.status === 200 && menu.data.code == 200) {
              self.menuList = self.treeDataTranslate(menu.data.data);
            } else {
              self.$message.error(menu.data.msg);
            }
            if (perms.status === 200 && perms.data.code == 200) {
              self.menuIdList = perms.data.data;
              var idx = self.menuIdList.indexOf(self.tempKey)
              if (idx !== -1) {
                self.menuIdList.splice(idx, self.menuIdList.length - idx)
              }
              self.$refs.menuListTree.setCheckedKeys(self.menuIdList);
            }
          }));
      },
      handleAuthoritySave: function() {
        let self = this;
        self.menuIdList = [].concat(self.$refs.menuListTree.getCheckedKeys(), [this.tempKey], self.$refs.menuListTree
          .getHalfCheckedKeys());
        self.$axios.post('/BaseRole/SetAuthority/' + this.roleId, qs.stringify({
          'moduleIds': self.menuIdList
        }, {
          indices: false
        })).then((res) => {
          if (res.status === 200 && res.data.code == 200) {
            self.$message.success(res.data.msg);
            self.dialogAuthorityVisible = false;
          } else {
            self.$message.error(res.data.msg);
          }
        });
      },
      handleSetUsers: function(index, row) {
        this.dialogSetUsersVisible = true;
        this.roleId = row.id;
        this.handleUserSearch();
      },
      handleUserSearch: function() {
        let self = this;
        if (self.searchUserForm.page == undefined) {
          self.searchUserForm.page = 1;
        }
        self.$axios.post('/BaseBuser/ListByPage?page=' + self.searchUserForm.page + "&limit=" + self.searchUserForm.limits,
            self.searchForm)
          .then(function(response) {
            self.tableUserData = response.data.data;
            self.totalUser = response.data.count;
          }).catch(function(error) {
            self.$message.error('数据加载失败!');
          });
      },
      handleUserRoleSearch: function() {
        let self = this;
        if (self.searchUserRoleForm.page == undefined) {
          self.searchUserRoleForm.page = 1;
        }
        self.$axios.post('/BaseBuser/ListByRoleId/' + this.roleId + '?page=' + self.searchUserRoleForm.page +
            "&limit=" + self.searchUserRoleForm.limits,
            self.searchForm)
          .then(function(response) {
            self.tableRoleUserData = response.data.data;
            self.totalRoleUser = response.data.count;
          }).catch(function(error) {
            self.$message.error('数据加载失败!');
          });
      },
      handleViewUsers: function(index, row) {
        this.dialogRoleUsersVisible = true;
        this.roleId = row.id;
        this.handleUserRoleSearch();
      },
      // 查询
      handleSearch: function() {
        let self = this;
        if (self.searchForm.page == undefined) {
          self.searchForm.page = 1;
        }
        self.$axios.post('/BaseRole/ListByPage?page=' + self.searchForm.page + "&limit=" + self.searchForm.limits,
          self.searchForm, {
            timeout: 1000 * 60 * 0.5
          }).then(function(response) {
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
            this.$axios.post('/BaseRole/Create', this.addForm).then((res) => {
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
      handleSetUsersSave: function() {
        let self = this;
        let ids = [];
        if (self.multipleSelectionUser.length == 0) {
          self.$message.warning('请选择用户');
        } else {
          self.multipleSelectionUser.map((item) => {
            ids.push(item.id);
          });
          this.$axios.post('/BaseRole/SetUsers/' + this.roleId, qs.stringify({
            'ids': ids
          }, {
            indices: false
          })).then((res) => {
            if (res.data.code == 200) {
              self.$message.success(res.data.msg);
              self.dialogSetUsersVisible = false;
            } else {
              self.$message.error(res.data.msg);
            }
          });
        }
      },
      //更新
      handleUpdate: function(formName) {
        let self = this;
        this.$axios.post('/BaseRole/Edit', this.editForm).then((res) => {
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
          self.$axios.post('/BaseRole/SetDeleted', qs.stringify({
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
          axios.post('/BaseRole/SetDeleted', qs.stringify(para))
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
        axios.post('/BaseRole/export')
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
  .tree {
    overflow-y: scrolls;
    overflow-x: scroll;
    width: 200px;
    height: 300px;
  }

  .el-tree {
    width: 200px;
    display: inline-block !important;
  }
</style>
