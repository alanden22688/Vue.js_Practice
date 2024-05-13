<template>
    <div class="sub-component">
        <p>內部元件</p>
        <demo20-6-1-component/>
    </div>
</template>

<script>
import Demo20_6_1Component from './demo20-6-1.vue';

export default {
    name: 'Demo20_6Component',
    components: {
        'demo20-6-1-component': Demo20_6_1Component
    }    
};
</script>

<style>
.sub-component {
    border: 1px solid #000;
    background-color: gray;
}
</style>