<template>
    <div class="sub-component">        
        <div>parentMsg: {{ parentMsg }}</div>
        <div>msg: {{ msg }}</div>
        <div>propMsg: {{ propMsg }}</div>
    </div>
</template>

<script>
export default {
    name: 'demo20-2-component',
    data() {
        return {
            msg: '內部元件Msg'
        }
    },
    // 透過props引用外部元件資料
    props: {
        'parentMsg':{},
        'propMsg':{
            type: [String,Boolean], 
            required: true,
            default: '預設值',
            validator: function (value) {
                if (typeof value === 'string') {
                    // 檢查字符串是否符合特定格式，例如長度大於3
                    return value.length > 3;
                } else if (typeof value === 'boolean') {
                    // boolean則不需檢查，直接返回true
                    return true;
                }
                return false;
            }           
        }
    }
}
</script>

<style>
.sub-component {
    background-color: gray;
    border: 1px solid red;
}
</style>