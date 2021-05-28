<template>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      router
      unique-opened
      text-color="#31415E"
      active-text-color="#fff"
      @select="handleSelect"
      @open="handleOpen"
      @close="handleClose">
      <MenuItem :menu="menu" />
    </el-menu>
</template>


<script>
import { person, settings } from '@/mock/menu'
import { SET_MENU, SET_CURRENT_APP } from '@/store/types'
import { getCurrentApp } from '@/utils'
import MenuItem from './menuItem'
export default {
  computed: {
    currentApp() {
      let app = this.$store.getters.currentApp
      return app
    },
    menu() {
      return this.$store.getters.getMenu(this.currentApp)
    },
  },
  data() {
    return {
      defaultActive: ''
    }
  },
  watch: {
    '$route': {
      handler(route) {
        let app = getCurrentApp(route.path)
        this.$store.dispatch(SET_CURRENT_APP, app)
        switch(app) {
          case 'person':
            this.$store.dispatch(SET_MENU, {
              key: 'person',
              menu: person
            })
            break;
          case 'settings':
            this.$store.dispatch(SET_MENU, {
              key: 'settings',
              menu: settings
            })
            break;
        }
      },
      immediate: true
    },
    'currentApp': {
      handler() {
        let { path } = this.$store.getters.getMenu(this.currentApp)[0] || {}
        this.$nextTick(() => {
          this.defaultActive = path
        })
      },
      immediate: true
    }
  },
  methods: {
    handleOpen() {
      console.log('open');
    },
    handleClose() {
      console.log('close');
    },
    handleSelect(index, indexPath) {
      console.log('seelct');
      console.log(index, indexPath);
    }
  },
  components: {
    MenuItem
  }
}
</script>

<style scoped>
.el-menu {
  border: none;
}
</style>