<template>
    <div>
        person/person
        <PmTable :column="column" :tableData="tableData" @deleteClick="handleDelete">
            <template #button>
                <el-button size="mini">编辑</el-button>
                <el-button size="mini" type="danger">删除</el-button>
            </template>
        </PmTable>
    </div>
</template>

<script>
import PmTable from '@/components/PmTable'
export default {
    data() {
        return {
            column: {
                id: 'ID',
                name: '姓名',
                market: '所属市场',
                mobile: '电话',
            },
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                market: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                market: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                market: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                market: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    setup() {
        
    },
    components: {
        PmTable
    },
    methods: {
        handleDelete(scope) {
            console.log(scope);
        }
    }
}
</script>