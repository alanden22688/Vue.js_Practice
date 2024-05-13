<template>
    <h1>{{ title }}</h1>
    <div>
        input demo:
        <input v-model="inputValue" type="text">
        <p>{{ inputValue }}</p>

        textarea demo:
        <textarea v-model="textareaValue"></textarea>
        <p>{{ textareaValue }}</p>

        select demo:
        <!-- Select的v-model是寫在select，而不是option中 -->
        <select v-model="selectValue">
            <option value="黃燜雞">黃燜雞</option>
            <option value="黃燜牛">黃燜牛</option>
        </select>
        <p>{{ selectValue }}</p>

        radio demo:
        <input v-model="radioValue" type="radio" value="套餐">
        <input v-model="radioValue" type="radio" value="單點">
        <p>{{ radioValue }}</p>

        <p>checkbox demo:</p>
        <input v-model="checkboxValue" type="checkbox" value="肉多多">肉多多
        <input v-model="checkboxValue" type="checkbox" value="菜多多">菜多多
        <p>{{ checkboxValue }}</p>

    </div>
</template>

<script>
export default {
    name: 'Demo3Component',
    data() {
        return {
            title: 'v-model範例',
            inputValue: '姓名',
            textareaValue: '備註',
            selectValue: '黃燜雞',
            radioValue: '套餐',
            checkboxValue: ['肉多多']            
        }
    }
}
</script>
