import { defineComponent, openBlock, createBlock, Transition, createCommentVNode } from 'vue'

const script = defineComponent({
    name: 'PmAlert',
    setup() {

    }
})

const render = () => {
    return (openBlock(), createBlock(Transition, {

    }))
}

script.render = render


script.install = (app) => {
    app.component(script.name, script)
}

export default script