<template>
    <div data-name="App.vue">
        <GlobalHeader></GlobalHeader>
        <!-- 注意： -->
        <!-- v-bind:prop="statement" -->
        <!-- prop="stringValue" -->
        <Left info="enjoy" :count="200"></Left>
        <span ref="titleRef">{{ title }}</span>
        <p>可选链：{{ obj.a?.b }}</p>
    </div>
</template>

<script>
import Left from "@/components/Left.vue"

export default {
    data() {
        return {
            title: 'App.Vue',
            obj: {}
        }
    },
    components: {
        Left,
    },
    mounted() {
        console.log(this.$refs)
        /**
         * this.$nextTick(emptyCallback)
         * DOM下次重绘完成后回调
         */
        this.$nextTick?.(() => {
            this.$refs.titleRef.style.color = 'red'
        })
    },
}
</script>

<style lang="less" scoped>

</style>
