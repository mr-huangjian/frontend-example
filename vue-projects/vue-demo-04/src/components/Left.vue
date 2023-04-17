<template>
    <div>
        <h1>Left</h1>
        <span>{{ count }}</span>
        <button @click="add">+1</button>
        <button @click="count -= 1">-1</button>
    </div>
</template>

<script>
export default {
    name: 'MyLeft',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        add() {
            this.count += 1
        }
    },
    created() {
        console.log(`Left Component created!`);
    },
    destroyed() {
        console.log(`Left Component destroyed!`);
    },
    deactivated() {
        console.log(`Left Component deactivated!`);
    },
    activated() {
        console.log(`Left Component activated!`);
    },
}
</script>

<style lang="less" scoped>
div {
    background-color: yellow;
    flex: 1;
    height: 200px;
}
</style>
