<template>
    <div class="sub-component-2">    
        {{ localBook.title }}    
        <!-- 將未定義至props屬性，手動綁定到指定標籤中 -->
        <div v-bind="$attrs">書名：<input type="text" v-model="localBook.title"/></div>
        <div>作者：<input type="text" v-model="localBook.author"/></div>
        <div>出版日：<input type="text" v-model="localBook.publishDate"/></div>
    </div>
</template> 

<script>
export default {
    name: 'demo20-3-component',
    data() {
        return {
            // ...this.bookInfo是ES6的展開運算符，相當於Object.assign({}, this.bookInfo)
            // 將props的bookInfo物件的屬性複製到localBook物件中，避免直接修改外部元件資料            
            localBook: { ...this.bookInfo }
        }
    },
    // 透過props引用外部元件資料
    props: {
        bookInfo: {
            type: Object    
        }
    },
    // 如果不需要將外部元件的資料變化，同步至內部元件，則不需要使用watch
    watch: {
        // 監聽bookInfo物件的變化，如果外部元件資料有變動，則將新的資料複製到localBook物件中
        bookInfo: {
            handler(newVal) {
                // 將改變後的bookInfo物件(newVal)，再複製到localBook物件中
                this.localBook = { ...newVal };
            },
            // 沒加deep只能監聽bookInfo物件的記憶體位置變化(傳址的關係)
            // 加上deep則可以監聽bookInfo物件的屬性變化
            deep: true
        }
    },
    // 停止將未定義在props屬性，自動綁定到根標籤
    inheritAttrs: false
}
</script>

<style>
.sub-component-2 {
    background-color: darkgray;
    border: 1px solid green;
}
</style>

