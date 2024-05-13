<template>    
    <div class="sub-component">
        <slot>預設內容，{{msg}}</slot>
    </div>
</template>

<script>
export default {
    name: 'Demo22_1Component',   
    data() {
        return {
            msg: '內部元件訊息!'
        }
    }
}
</script>


<style>
.sub-component {
    background-color: gray;
    border: 1px solid;
}
</style>