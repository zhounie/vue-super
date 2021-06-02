<template>
    <el-container>
        <el-header height="68px">
          <Header />
        </el-header>
        <Nav />
        <el-container class="main_wraper">
            <el-aside v-if="!hideMenu" width="213px">
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
import Header from './header'
export default {
  name: 'App',
  components: {
      Menu,
      Nav,
      Header
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

<style lang="less" scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.6s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}


  .el-header {
    background: linear-gradient(180deg, #89D2FE 0%, #4A96FF 100%);
    color: #333;
    text-align: center;
    height: 68px;
  }

  .el-aside {
    background-color: #FDFEFF;
    text-align: center;
    padding-top: 20px;
  }

  .el-main {
    background-color: #FAFBFC;
    padding-top: 20px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

    .main_wraper {
        height: calc(100vh - 68px - 41px);
    }
  /* .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  } */

  /* .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
</style>