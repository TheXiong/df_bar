<template>
	<div class="sidebar">
		<el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
		 text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
			<template v-for="item in menuList">
				<template v-if="item.menuDtoList">
					<el-submenu :index="item.index+''" :key="item.id">
						<template slot="title">
							<i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
						</template>
						<template v-for="subItem in item.menuDtoList">
							<el-submenu v-if="subItem.menuDtoList" :index="subItem.index+''" :key="subItem.id">
								<template slot="title">{{ subItem.title }}</template>
								<el-menu-item v-for="(threeItem,i) in subItem.menuDtoList" :key="i" :index="threeItem.index">
									<i :class="threeItem.icon"></i><span slot="title">{{ threeItem.title }}</span>
								</el-menu-item>
							</el-submenu>
							<el-menu-item v-else :index="subItem.link+''" :key="subItem.id">
								<i :class="subItem.icon"></i><span slot="title">{{ subItem.title }}</span>
							</el-menu-item>
						</template>
					</el-submenu>
				</template>
				<template v-else>
					<el-menu-item :index="item.index+''" :key="item.id">
						<i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script>
  import qs from 'qs';
export default {
  data () {
    return {
      menuList: {},
      collapse: false
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  },
  created () {
    this.getMenus()
  },
  methods: {
    getMenus: function () {
      let self = this
      let data = JSON.parse(localStorage.getItem('token'));
      self.$axios.post('/BaseModule/GetMenus', qs.stringify({"userId":data.id})).then(function (res) {
        if (res.status === 200&&res.data.code==200) {
          self.menuList = res.data.data
        } else {
          self.$message.error(res.data.msg)
        }
      }).catch(function (error) {
        self.$message.error('数据加载失败!')
      })
    }
  }
}
</script>

<style scoped>
	.sidebar {
		display: block;
		position: absolute;
		left: 0;
		top: 0px;
		bottom: 0;
		overflow-y: scroll;
	}

	.sidebar::-webkit-scrollbar {
		width: 0;
	}

	.sidebar-el-menu:not(.el-menu--collapse) {
		width: 250px;
	}

	.sidebar>ul {
		height: 100%;
	}
</style>
