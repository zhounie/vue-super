<template>
    <transition name="fade-in-linear" @after-leave="$emit('vanish')">
        <pm-overlay
            v-show="visible"
            @click.self="handleWrapperClick"
        >
            <div class="pm-alert-box">
                <div class="pm-alert-box__header">
                    <span>删除</span>
                    <button
                        type="button"
                        @click="handleAction('close')"
                    >
                        <i class="el-icon-close"></i>
                    </button>
                </div>
                <div class="pm-alert-box__content">
                    <p>
                        <i
                            class="el-icon-warning"
                            :style="{
                                color: '#F58754',
                                fontSize: '20px',
                                verticalAlign: 'middle'
                            }"
                        ></i>
                        您确定要删除该内容吗？删除后将会导致相关数据内容丢失且无法找回，请务必谨慎操作。
                    </p>
                </div>
                <div class="pm-alert-box__btns">
                    <el-button
                        type="danger"
                        size="mini"
                        @click="handleAction('confirm')"
                    >删除</el-button>
                    <el-button
                        size="mini"
                        @click="handleAction('close')"
                    >退出</el-button>
                </div>
            </div>
        </pm-overlay>
    </transition>
</template>

<script>
import { defineComponent, nextTick, reactive, ref } from 'vue'
import PmOverlay from './PmOverlay'
import { ElButton } from 'element-plus'
export default defineComponent({
    name: 'PmAlert',
    props: {
        closeOnClickModal: {
            type: Boolean,
            default: true
        }
    },
    emits: ['vanish', 'action'],
    setup(props, { emit }) {
        const visible = ref(false)
        const state = reactive({
            action: ''
        })
        function doClose() {
            if (!visible.value) return
            visible.value = false
            nextTick(() => {
                if (state.action) {
                    emit('action', state.action)
                }
            })
        }
        const handleAction = (action) => {
            state.action = action
            doClose()
        }
        const handleWrapperClick = () => {
            if (props.closeOnClickModal) {
                handleAction('close')
            }
        }
        return {
            visible,
            handleAction,
            handleWrapperClick
        }
    },
    components: {
        PmOverlay,
        ElButton
    }
})
</script>


<style lang="less" scoped>
    .pm-alert-box {
        display: inline-block;
        width: 480px;
        background: #fff;
        border-radius: 12px;
        padding-bottom: 30px;
        overflow: hidden;
        .pm-alert-box__header {
            height: 44px;
            background: #ED3E3E;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            span {
                font-size: 18px;
                font-family: PingFangSC-Bold, PingFang SC;
                color: #fff;
                line-height: 18px;
            }
            button {
                background: transparent;
                border: none;
                cursor: pointer;
                color: #fff;
                outline: none;
                font-size: 18px;
                padding: 0;
                &:focus,
                &:hover {
                    color: rgba(255, 255, 255, .8);
                }
            }
        }
        .pm-alert-box__content {
            padding: 50px 58px 40px;
            p {
                margin: 0;
                font-size: 16px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #262626;
                line-height: 22px;
            }
        }
    }
</style>