<script>
import { ref, } from 'vue'
export default {
    props: {
        column: {
            type: Object
        },
        tableData: {
            type: Array
        }
    },
    setup() {
        const count = ref(0)
        return {
            count
        }
    },
    methods: {
        createTableColumn() {
            return Object.keys(this.column).map((key) => (
                <el-table-column prop={key} label={this.column[key]}>
                    {
                        (scope) => {
                            return <div> {scope.row[key]} </div>
                        }
                    }
                </el-table-column>
            ))
        },
        handleEdit(scope) {
            console.log(scope.row);
        }
    },
    render() {
        return <div>
            <el-table data={this.tableData}
                style="width: 100%">
                { this.createTableColumn() }
                <el-table-column label="操作">
                    {{
                        default: (scope) => (
                            <div>
                                <el-button size="mini" onClick={() => this.handleEdit(scope)}>编辑</el-button>
                                <el-button size="mini" type="danger">删除</el-button>
                            </div>
                        )
                    }}
                </el-table-column>
            </el-table>
        </div>
    }
}
</script>
