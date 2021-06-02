<template>
    <div>
        <!-- 12312321
        <el-button type="primary" @click="handleClick">主要按钮</el-button> -->
        <el-button type="danger" @click="handleEelete">删除</el-button>
        <el-button type="success" @click="handleClick">新增</el-button>

        <!-- <PmAlert  /> -->

        <el-dialog
            title="提示"
            v-model="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>这是一段信息</span>
            <template #footer>
                <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
// import PmAlert from '@/components/PmAlert.vue'
import { ref } from 'vue'
export default {
    setup() {
        const dialogVisible = ref(false)
        return {
            dialogVisible
        }
    },
    mounted() {
       
    },
    methods: {
        handleClick() {
            this.dialogVisible = true
        },
        handleEelete () {
            this.$pmAlert({}).then((res) => {
                console.log(res);
                console.log('thenthenthenthenthen');
            }).catch((error) => {
                console.log(error);
                console.log('catchcatchcatchcatch');
            })
        },
        handleClose() {

        }
    },
    components: {
        // PmAlert
    }
}
</script>

<style scoped>

</style>