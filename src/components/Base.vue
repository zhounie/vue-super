<template>
    <div>
        <span @click="handleClick">props：{{test}}</span>
        <slot name="scope"> default scope </slot>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        test: Number
    },
    methods: {
        handleClick() {
            console.log('click');
            this.$emit('cm-click')
        }
    }
}
</script>