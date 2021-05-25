import { SET_MENU } from './types'

export default {
    [SET_MENU](context, menu) {
        context.commit(SET_MENU, menu)
    }
}