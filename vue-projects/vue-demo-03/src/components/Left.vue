<template>
    <div>
        <h2>Left Component</h2>
        <p>info: {{ info }}</p>
        <p>desc: {{ desc }}</p>
        <p>count: {{ count }}</p>
    </div>
</template>

<script>
export default {
    /**
     * props
     *      1. 对外属性
     *      2. 在组件内部，属性值只读
     *      3. 对外属性不能包含 data 中的内部属性
     */
    // props: [ 'info' ],
    props: {
        info: {},
        count: {
            type: Number,
            default: 100,
            required: true,
        },
    },
    data() {
        return {
            desc: this.$props.info || 'this is left component.'
        }
    }
}
</script>

<style lang="less" scoped>

</style>