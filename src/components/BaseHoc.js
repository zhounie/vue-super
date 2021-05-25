

import { h } from 'vue'
export default function WithConsole(Component) {
    return {
        render() {
            return h(Component)
        }
    }
}