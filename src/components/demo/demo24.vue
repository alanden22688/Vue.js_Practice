<template>
    <div>
        <div>
            <h4>State範例</h4>
            <p>Count: {{ count }}</p>
            <p>name: {{ name }}</p>
            <p>email: {{ email }}</p>
            <p>productName: {{ firstProductName }}</p>
            <p>productId: {{ firstProductId }}</p>
            <p>Double Count: {{ doubleCount }}</p>
            <p>Count Plus Local State: {{ countPlusLocalState }}</p>
            <button v-on:click="increment">+</button>
            <button v-on:click="decrement">-</button>
        </div>
        <div>
            <h4>Getters範例</h4>
            <p>filterProductsPrice: {{ filterProductsPrice }}</p>
            <p>filterProductsPriceCount: {{ filterProductsPriceCount }}</p>
            <p>getAllProductsInfo: {{ getAllProductsInfo }}</p>
        </div>
        <div>
            <h4>Mutation範例</h4>
            <p>Products: {{ $store.state.products }}</p>
            <span>請輸入要新增/移除產品的產品</span><br>
            產品ID:<input type="text" v-model="productId" placeholder="產品ID"><br>
            產品名稱:<input type="text" v-model="productName" placeholder="產品名稱"><br>
            產品價格:<input type="text" v-model="productPrice" placeholder="產品價格"><br>
            <button v-on:click="addProduct({ product: { id: productId, name: productName, price: productPrice } })">Add
                Product</button>
            <button v-on:click="removeProduct({ id: productId })">Remove Product</button>
        </div>

        <div>
            <h4>Action範例</h4>
            <div v-if="$store.state.loading">載入中...</div>
            <div v-if="$store.state.error" style="color: red">錯誤: {{ $store.state.error }}</div>

            <button @click="fetchProducts">從API獲取產品列表</button>
            <button @click="refreshProductsData">刷新產品數據</button>

            <h5>新增產品(API模擬)</h5>
            新產品名稱:<input type="text" v-model="newProduct.name"><br>
            新產品價格:<input type="number" v-model.number="newProduct.price"><br>
            <button @click="handleAddProduct">新增產品(模擬API)</button>
        </div>
    </div>
</template>

<script>
// 要用mapState，要先import mapState
import { mapState } from 'vuex';
// 要用mapGetters，要先import mapGetters
import { mapGetters } from 'vuex';
// 要用mapActions，要先import mapActions
import { mapActions } from 'vuex';


export default {
    name: 'Demo24Component',
    data() {
        return {
            localCount: 20,
            productId: 1,
            productName: '產品名稱',
            productPrice: 100,
            newProduct: {
                name: '',
                price: 0
            }
        }
    },
    computed: {
        count() {
            // 顯示state的count的資料狀態
            return this.$store.state.count;
        },
        firstProductName() {
            // 顯示state的product的第一筆資料的name
            return this.$store.state.products.length > 0 ? this.$store.state.products[0].name : '';
        },        
        // mapState           
        ...mapState({
            // 顯示state的name並反映到計算屬性name，如果data()中有同樣名稱，則會覆蓋
            name: state => state.name,

            // 顯示state的product的第一筆資料的name並反映到計算屬性productName
            firstProductId: state => state.products.length > 0 ? state.products[0].id : null,
            
            // 將state的count加上data()中的localCount，並反映到計算屬性countPlusLocalState
            countPlusLocalState(state) {
                return state.count + this.localCount;
            },
        }),
        ...mapState([
            // 透過陣列的方式，顯示state的email並反映到計算屬性email
            'email', 
            'count', 
            'name', 
            'products', 
            'loading', 
            'error'
        ]),
        // getters範例
        doubleCount() {
            return this.$store.getters.doubleCount;
        },
        filterProductsPrice(){
            return this.$store.getters.filterProductsPrice(11);
        },
        filterProductsPriceCount(){
            return this.$store.getters.filterProductsPriceCount(11);
        },
        // mapGetters
        ...mapGetters([
            // 顯示Products的資料，並反映到計算屬性getAllProductsInfo
            'getAllProductsInfo'
        ])
    },
    methods: {
        increment() {
            // 使用store.commit觸發mutation改變state
            this.$store.commit('INCREMENT')
        },
        decrement() {
            // 使用store.commit觸發mutation改變state
            this.$store.commit('DECREMENT')
        },
        addProduct() {
            this.$store.commit('ADDPRODUCT', {
                id: 2,
                name: 'Product B',
                price: 9.99
            });
        },
        removeProduct(id) {
            if (id) {
                this.$store.commit('REMOVEPRODUCT', { id });
                this.$forceUpdate();
            } else {
                console.error('沒有傳遞 id 參數');
            }
        },
        async handleAddProduct() {
            if (!this.newProduct.name || !this.newProduct.price) {
                alert('請填寫產品名稱和價格')
                return
            }

            try {
                const addedProduct = await this.addNewProduct(this.newProduct)
                alert(`產品添加成功: ${addedProduct.name} ($${addedProduct.price})`)
                this.newProduct = { name: '', price: 0 } // 清空表單
            } catch (error) {
                alert(this.error || '添加產品時發生錯誤')
            }
        },
        fetchProducts() {
            this.$store.dispatch('fetchProducts')
                .then(() => {
                    console.log('產品列表獲取成功')
                })
                .catch(error => {
                    console.error('獲取產品列表失敗:', error)
                })
        },
        // ...mapActions({
        //     add: 'addProduct', // 將 `this.add()` 映射為 `this.$store.dispatch('addProduct')`
        //     remove: 'removeProduct'
        // })
        ...mapActions([
            'addNewProduct',
            'removeProduct'
        ])
    },
    created() {
        // 使用store.state來取得state的物件
        console.log(this.$store.state.count);
    }
}
</script>