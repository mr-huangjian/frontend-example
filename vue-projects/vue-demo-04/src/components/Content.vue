<template>
    <div class="content-container">
        <h1>Content</h1>

        <!-- name默认值default -->
        <slot name="default">这是 default 插槽的默认内容</slot>
        
        <div id="header-box">
            <slot name="header" msg="TheHeaderSlot">这是 header 插槽的默认内容</slot>
        </div>

        <slot name="footer">这个小提示！</slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.content-container {
    > div {
        background-color: pink;
        min-height: 150px;
    }
}

</style>