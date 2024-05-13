<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <button v-bind:disabled="isDisabled">Click me</button>
    </div>
</template>

<script>
export default {
    name: "Demo2Component",
    data() {
        return {
            title: "v-bind 範例",
            description: "This is v-bind demo",
            isDisabled: true,
        }
    }
};
</script>
