import { SET_MENU, SET_CURRENT_APP } from './types'

export default {
    [SET_MENU](context, menu) {
        context.commit(SET_MENU, menu)
    },
    [SET_CURRENT_APP](context, app) {
        context.commit(SET_CURRENT_APP, app)
    }
}