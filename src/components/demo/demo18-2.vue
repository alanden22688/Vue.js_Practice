<template>
    <div>
        <!-- 提供輸入框，觀察更新時的生命週期 -->
        <input v-model="inputValue" />
    </div>
</template>

<script>

export default {
    name: 'Demo18_2Component',
    data() {
        return {
            // 輸入框預設值
            inputValue: 'Hello LifeCycle!'
        }
    },
    beforeCreate() {
        // emit是Vue的方法，用來自定義事件，第一個參數是事件名稱，第二個參數之後是要傳遞的資料
        this.$emit('lifecycleEvent', 'beforeCreate', this.inputValue);
    },
    created() {
        this.$emit('lifecycleEvent', 'created', this.inputValue);
    },
    beforeMount() {
        this.$emit('lifecycleEvent', 'beforeMount', this.inputValue);
    },
    mounted() {
        this.$emit('lifecycleEvent', 'mounted', this.inputValue);
    },
    beforeUpdate() {
        this.$emit('lifecycleEvent', 'beforeUpdate', this.inputValue);
    },
    updated() {
        this.$emit('lifecycleEvent', 'updated', this.inputValue);
    },
    beforeUnmount() {
        this.$emit('lifecycleEvent', 'beforeUnmount', this.inputValue);
    },
    unmounted() {
        this.$emit('lifecycleEvent', 'unmounted', this.inputValue);
    }
};
</script>