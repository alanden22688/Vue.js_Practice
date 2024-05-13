<template>    
    <div class="main-component">
        <h3>與後端互動</h3>
        <button v-on:click="fetchData">發送請求</button>
        {{ data }}
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Demo23Component',
    data() {
        return {
            data: ''
        }
    },
    created() {
        // 設置Axios以防止XSRF攻擊
        axios.defaults.xsrfCookieName = 'XSRF-TOKEN'; // 默認值是'XSRF-TOKEN'
        axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN'; // 默認值是'X-XSRF-TOKEN'

        // 設置請求攔截器(請求前會先處理)
        axios.interceptors.request.use(
            config => {
                console.log('請求發送前:', config);   
                // 明確設置 Content-Type 為 application/json
                if (!config.headers['Content-Type']) {
                    config.headers['Content-Type'] = 'application/json';
                }             
                return config;
            },
            error => {
                console.log('請求錯誤:', error);
                return Promise.reject(error);
            }
        );

        // 設置回應攔截器(回應之前會先處理)
        axios.interceptors.response.use(
            response => {
                console.log('回應收到:', response);                
                return response;
            },
            error => {
                console.log('回應錯誤:', error);
                return Promise.reject(error);
            }
        );
    },
    methods: {
        fetchData() {
            // 如果有發送中的請求，會去取消它
            if (this.cancelTokenSource) {
                this.cancelTokenSource.cancel('取消前一個請求');
            }

            // 建立新的CancelToken
            this.cancelTokenSource = axios.CancelToken.source();

            axios.get('http://localhost:8005/MySpringBoot/test', {
                cancelToken: this.cancelTokenSource.token
            })
            .then(response => {
                console.log(response.data);
                this.data = response.data;
            })
            .catch(error => {
                if (axios.isCancel(error)) {
                    console.log('請求被取消:', error.message);
                } else {
                    console.log('請求錯誤:', error);
                }
            });
        }
    }
}    
</script>

<style>
.main-component {
    border: 1px solid hsl(0, 0%, 0%);
}

.parent-container{
    position: relative;
}
</style>