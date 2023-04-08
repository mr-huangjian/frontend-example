<template>
    <div>
        <h1>{{ title }}</h1>
        <Left></Left>
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

<style lang="less">

</style>
