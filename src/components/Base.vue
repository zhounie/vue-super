<template>
    <div>
        <span @click="handleClick">props：{{test}}</span>
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

        }
    }
}
</script>