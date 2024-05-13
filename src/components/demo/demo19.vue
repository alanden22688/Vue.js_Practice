<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ remain }}</p>
        訊息: <p id="message">{{ message }}</p>
        <input type="text" v-model="message">
    </div>
</template>

<script>
export default {
    name: 'Demo19Component',    
    data() {
        return {
            title: '畫面更新與同步',
            message: '原始訊息',
            remain: '請打開console觀察'
        }
    },
    watch: {
        // 監聽message的變化，當message改變時觸發
        message(newVal, oldVal) {            
            console.log('watch: ', oldVal, ' -> ', newVal, ', length: ');            

            // nextTick，當message觸發後，會等待到updated後才執行
            this.$nextTick(() => {
                console.log('watch(nextTick): ', oldVal, ' -> ', newVal, ', length: ');
            });
        }
    },
    beforeUpdate() {
        console.log('====================== beforeUpdate ======================');
        console.log('beforeUpdate(虛擬DOM): ', this.message);
        console.log('beforeUpdate(真實DOM): ', document.querySelector('#message').textContent);
    },
    updated() {
        console.log('====================== updated ======================');
        console.log('updated(虛擬DOM): ', this.message);
        console.log('updated(真實DOM): ', document.querySelector('#message').textContent);
        console.log('============================================');
    }
  }
</script>