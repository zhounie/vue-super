<script>
import { defineComponent, h, renderSlot } from 'vue'

export default defineComponent({
    name: 'PmOverlay',
    props: {
        zIndex: Number
    },
    emits: ['click'],
    setup(props, { slots, emit }) {
        const onMaskClick = (e) => {
            emit('click', e)
        }
        return () => {
            return h(
                'div',
                {
                    class: 'pm-overlay',
                    style: {
                        zIndex: props.zIndex
                    },
                    onClick: onMaskClick
                },
                [renderSlot(slots, 'default')]
            )
        }
    }
})
</script>

<style lang="less" scoped>
.pm-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2000;
    height: 100%;
    background: rgba(0, 0, 0, .3);
    overflow: auto;
    text-align: center;
    &::after {
        content: '';
        display: inline-block;
        height: 100%;
        width: 0;
        vertical-align: middle;
    }
}
</style>