<template>
    <div data-name="App.vue">
        <GlobalHeader></GlobalHeader>
        <!-- 注意： -->
        <!-- v-bind:prop="statement" -->
        <!-- prop="stringValue" -->
        <Left info="enjoy" :count="200"></Left>
        <span>{{ title }}</span>
    </div>
</template>

<script>
import Left from "@/components/Left.vue"

export default {
    data() {
        return {
            title: 'App.Vue'
        }
    },
    components: {
        Left,
    }
}
</script>

<style lang="less" scoped>

</style>
