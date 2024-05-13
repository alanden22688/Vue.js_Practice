<template>
    <h1>{{ title }}</h1>
    <div>
        大於10個字就變紅色
        <!-- 操作class屬性，透過JavaScript物件判斷是否要加入class error -->
        <p><span>操作class屬性: <input v-model.trim="inputText" :class="{'error': inputText.length > 10 }" /></span></p>
        
        <!-- 直接操作style屬性，-->
        <p><span>操作style屬性: <input v-model.trim="inputText2" :style="errorMsgStyle" /></span></p>
    </div>
</template>

<script>
export default {
    name: 'Demo6Component',
    data() {
        return {
            title: '樣式綁定',
            inputText: '',
            inputText2: ''
        }
    },
    computed: {
        // 判斷是否超過10個字
        isVaild() {
            return this.inputText2.length > 10
        },
        // 超過10個字就變紅色
        errorMsgStyle() {
            return {
                'color' : this.isVaild ? 'red' : '',
                'border' : this.isVaild ? '1px solid red' : ''                
            }
        }
    }
}
</script>

<!-- 取得demo6.css的樣式，scoped表示只在這個組件和子組件有用 -->
<style scoped src="../../style/demo6.css"></style>
