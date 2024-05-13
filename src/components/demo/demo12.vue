<template>
    <h1>{{ title }}</h1>
    <!-- 取得被點擊的滑鼠按鍵 -->
    <p>點擊的滑鼠按鍵為：{{clickButton}}</p>
    <!-- 可用click事件取得 -->
    <input type="button" value="點擊檢測滑鼠按鍵" 
        v-on:click.left="click" 
        v-on:click.right="click"
        v-on:click.middle="click" />
</template>

<script>
export default {
    name: 'Demo12Component',
    data() {
        return {
            title: '滑鼠修飾字',
            clickButton: ''
        }
    },
    methods: {
        click(event) {
            // 取得按下的按鍵並顯示，0:左鍵、1:中鍵、2:右鍵
            switch (event.button) {
                case 0:
                    this.clickButton = 'left';
                    break;
                case 1:
                    this.clickButton = 'middle';
                    break;
                case 2:
                    this.clickButton = 'right';
                    break;
            }
        }
    }
}
</script>