
export default {
    getMenu: (state) => (type) => {
        return state.menu[type] || []
    },
    currentApp: (state) => state.currentApp
}