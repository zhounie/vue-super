import { h, render } from 'vue'

import PmAlertComponent from './PmAlert.vue'

// 存放实例
const messageInstance = new Map()

// 初始化实例
const initInstance = (props, container) => {
    const vnode = h(PmAlertComponent, props)
    render(vnode, container)
    document.body.appendChild(container.firstElementChild)
    return vnode.component
}

const genContainer = () => {
    return document.createElement('div')    
}

// 显示Alert
const showAlert = (options) => {
    const container = genContainer()
    options.onVanish = () => {
        render(null, container)
        messageInstance.delete(vm)
    }
    options.onAction = (action) => {
        const currentMsg = messageInstance.get(vm)
        let resolve
        resolve = action
        if (options.callback) {
            options.callback(resolve, instance.proxy)
        } else {
            if (action === 'cancel' || action === 'close') {
                currentMsg.reject('close')
            } else {
                currentMsg.resolve(resolve)
            }
        }
    }
    const instance = initInstance(options, container)
    
    const vm = instance.proxy


    vm.visible = true
    return vm
}


function AlertBox(options) {
    return new Promise((resolve, reject) => {
        const vm = showAlert(options)
        messageInstance.set(vm, {
            options,
            resolve,
            reject
        })
    })
}


AlertBox.install = (app) => {
    app.config.globalProperties.$pmAlert = AlertBox
}


export default AlertBox