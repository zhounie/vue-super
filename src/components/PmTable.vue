<script>
import { ref, h } from 'vue'
import { ElTableColumn } from 'element-plus'
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
        console.log(this.$slots);
        return <div>
            <el-table data={this.tableData}
                style="width: 100%">
                { this.createTableColumn() }
                {
                    h(
                        ElTableColumn,
                        {
                            label: "操作"
                        }, 
                        this.$slots
                    )
                }
                
            </el-table>
        </div>
    }
}
</script>
// <el-table-column label="操作">
//                     {{
//                         default: (scope) => (
//                             <div>
//                                 <el-button size="mini" onClick={() => this.handleEdit(scope)}>编辑</el-button>
//                                 <el-button size="mini" type="danger">删除</el-button>
//                             </div>
//                         )
//                     }}
//                 </el-table-column>

// h(ElButton, {
//                             size: 'mini',
//                             type: 'danger',
//                             onClick: $event => this.$emit('click', $event)
//                         }, '删除')



{
                        default: (props) => {
                            return h('div', {}, [
                                h(ElButton, {
                                    size: 'mini',
                                    onClick: () => this.$emit('click', props)
                                }, '编辑'),
                                h(ElButton, {
                                    size: 'mini',
                                    type: 'danger',
                                    onClick: $event => this.$emit('click', $event)
                                }, '删除')
                            ])
                            
                        }
                    }


                    // default: (props) => {
                    //             return h('div', {}, [
                    //                 h(ElButton, {
                    //                     size: 'mini',
                    //                     onClick: () => this.$emit('editClick', props)
                    //                 }, '编辑'),
                    //                 h(ElButton, {
                    //                     size: 'mini',
                    //                     type: 'danger',
                    //                     onClick: $event => this.$emit('deleteClick', props.row, $event)
                    //                 }, '删除')
                    //             ])
                                
                    //         }