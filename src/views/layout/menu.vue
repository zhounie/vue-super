<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item v-for="(item, index) in menu" :key="index" :index="item.path">
        <i class="el-icon-menu"></i>
        <template #title>{{item.name}}</template>
      </el-menu-item>
    </el-menu>
</template>


<script>
import { person, settings } from '@/mock/menu'
import { SET_MENU } from '@/store/types'
export default {
  computed: {
    menu() {
      return this.$store.getters.menu
    }
  },
  watch: {
    '$route': {
      handler(route) {
        if (route.name === 'person') {
          this.$store.dispatch(SET_MENU, person)
        } else if (route.name === 'settings') {
          this.$store.dispatch(SET_MENU, settings)
        }
      },
      immediate: true
    }
  },
  mounted() {
    console.log(this.$store.getters);
  },
  methods: {
    handleOpen() {
      console.log('open');
    },
    handleClose() {
      console.log('close');
    },
  }
}
</script>