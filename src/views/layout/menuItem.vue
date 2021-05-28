<script>
export default {
    setup() {
        
    },
    render() {
        return (
            this.createMenu()
        )
    },
    props: {
        menu: Array
    },
    data() {
        return {
            menuData: [
                {
                    name: "应用管理",
                    path: "/app"
                },
                {
                    name: "设置管理",
                    path: "/settings",
                    children: [
                        {
                            name: '哈哈哈',
                            path: '/hh',
                            children: [
                                { name: '呵呵呵', path: '/ieii' }
                            ]
                        },
                        {
                            name: '你你你',
                            path: '/nn'
                        }
                    ]
                },
                {
                    name: "菜单管理",
                    path: "/menu"
                },
            ]
        }
    },
    methods: {
        createMenu() {
            const genMenu = (menu) => menu.map(item => genMenuItem(item))
            const genMenuItem = ({ path, name, children }) => {
                if (children && Array.isArray(children)) {
                    return <el-submenu index={path} v-slots={{
                            title: () => (
                                <el-space wrap size="large">
                                    <i class="el-icon-location"></i>
                                    <span>{name}</span>
                                </el-space>
                            )
                        }}>
                        { genMenu(children) }
                    </el-submenu>
                }
                return (
                    <el-menu-item key={path} index={path} v-slots={{
                            title: () => (
                                <el-space wrap size="large">
                                    <i class="el-icon-menu"></i>
                                    <span>{name}</span>
                                </el-space>
                            )
                        }}>
                    </el-menu-item>
                )
            }
            return genMenu(this.menu)
        },
    }
}
</script>


<style lang="less" scoped>
.el-menu-item {
    height: 48px;
    line-height: 48px;
    font-family: PingFangSC-Bold, PingFang SC;
    font-weight: bold;
    letter-spacing: 1px;
}
.el-menu-item.is-active {
    background-image: url('~@/assets/images/menu/menu_item.png');
    background-repeat: no-repeat;
    background-size: contain;
}
</style>