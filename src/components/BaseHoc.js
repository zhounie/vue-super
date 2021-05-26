import { h } from 'vue'
export default function WithConsole(Component) {
    return {
        render() {
            // const slots = Object.keys(this.$slots).reduce((arr, key) =>  {
            //     return arr.concat(this.$slots[key])
            // }, []).map(vnode => {
            //     vnode.context = this._self
            //     return vnode
            // })
            return h(Component, {
                
            }, this.$slots)
        },
        mounted() {
            let slots = Object.keys(this.$slots).reduce((arr, key) =>  {
                return arr.concat(this.$slots[key])
            }, [])
            console.log(slots);
        },
        methods: {

        }
    }
}