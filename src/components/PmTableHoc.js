export default function WithPmTable(Component) {
    return {
        mounted() {

        },
        props: Component.props,
        render(h) {
            return h(Component, {
                on: this.$listeners,
                attrs: this.$attrs,
                props: this.$props
            })
        }
    }
}