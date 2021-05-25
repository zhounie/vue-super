<template>
    <el-menu :default-active="activeIndex" class="nav_wraper" mode="horizontal" router @select="handleSelect">
        <el-menu-item index="/layout/home">首页</el-menu-item>
        <el-menu-item index="2" disabled>设备管理</el-menu-item>
        <el-menu-item index="/layout/person">人员管理</el-menu-item>
        <el-menu-item index="/layout/settings">系统设置</el-menu-item>
    </el-menu>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1'
        }
    },
    methods: {
        handleSelect() {

        }
    }
}
</script>

<style scoped>
.nav_wraper .el-menu-item{
    height: 40px;
    line-height: 40px;
}
.nav_wraper {
    margin-bottom: 20px;
}
</style>