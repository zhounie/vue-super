import { SET_MENU, SET_CURRENT_APP } from './types'

export default {
    [SET_MENU](state, { key, menu }) {
        state.menu[key] = menu
    },
    [SET_CURRENT_APP](state, app) {
        state.currentApp = app
    }
}