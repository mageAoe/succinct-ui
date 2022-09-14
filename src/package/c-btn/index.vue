<template>
    <div>
        <button>测试组件</button>
    </div>
</template>

<script>
    export default {
        name: 'c-btn'
    }
</script>

<style lang="less" scoped>
button{
    width: 100px;
    height: 50px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 10px;
    background: teal;
    color:#fff;
}
</style>