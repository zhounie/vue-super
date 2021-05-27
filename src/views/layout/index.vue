<template>
    <el-container>
        <el-header>Header</el-header>
        <Nav />
        <el-container class="main_wraper">
            <el-aside v-if="!hideMenu" width="200px">
                <Menu />
            </el-aside>
            <el-main>
                  <transition name="component-fade">
                    <router-view></router-view>
                  </transition>
            </el-main>
        </el-container>
    </el-container>
</template>


<script>
import Menu from './menu'
import Nav from './nav'
export default {
  name: 'App',
  components: {
      Menu,
      Nav
  },
  data() {
    return {
      hideMenu: false
    }
  },
  watch: {
    '$route': {
      handler(route) {
        this.hideMenu = !!route.meta.hideMenu
      },
      immediate: true
    }
  },
  mounted() {
    // console.log(this.$route);
  }
}
</script>

<style scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.6s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}


  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

    .main_wraper {
        height: calc(100vh - 121px);
    }
  /* .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  } */

  /* .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
</style>