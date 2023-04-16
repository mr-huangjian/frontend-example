<template>
    <div>
        <h1>Right</h1>
    </div>
</template>

<script>
export default {
    created() {
        console.log(`Right Component created!`);
    },
    destroyed() {
        console.log(`Right Component destroyed!`);
    },
    deactivated() {
        console.log(`Right Component deactivated!`);
    },
    activated() {
        console.log(`Right Component activated!`);
    }
}
</script>

<style lang="less" scoped>
div {
    background-color: green;
    flex: 1;
    height: 200px;
}
</style>
