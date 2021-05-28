<template>
    <div class="header_wraper">
        <h2>综合物业智慧云平台</h2>
        <div class="right">
            <el-space wrap size="large">
                <el-avatar size="large" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <el-dropdown>
                    <span class="el-dropdown-link" style="color: #fff">
                        用户米<i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-space>
        </div>
    </div>
</template>


<style lang="less" scoped>
.header_wraper {
    display: flex;
    justify-content: space-between;
    h2 {
        font-size: 24px;
        font-family: PingFangSC-Bold, PingFang SC;
        font-weight: bold;
        color: #fff;
    }
}
.right {
    display: flex;
    align-items: center;
}
</style>