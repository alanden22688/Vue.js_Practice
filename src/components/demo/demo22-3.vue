<template>
    <button v-on:click="showModal = true">Click Me</button>
    <!-- <teleport to="body"> -->
    <div v-if="showModal" class="modal-background" v-on:click="closeModal">
        <div class="modal-content">
            <!-- 由於傳入的lang是長{ name: '繁體中文', value: 'tw' }，只需要取得value，並從helloString取得對應中文。-->
            <slot name="default" v-bind:data="helloString[lang.value]"></slot>
        </div>
    </div>
    <!-- </teleport> -->
</template>

<script>
export default {
    name: 'Demo22_3Component',
    data() {
        return {
            showModal: false,
            helloString: {
                'tw': '哈囉',
                'en': 'Hello',
                'jp': 'こんにちは'
            }
        }
    },
    methods: {
        closeModal() {
            this.showModal = false;
        }
    },
    props: {
        lang: {
            type: String,
            default: 'tw'
        }
    }
}
</script>

<style>
button {
  display: block;
  font-size: 16px;
}
.modal-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
.modal-content p {
  margin: 10px 0;
}
.modal-content a {
  color: blue;
  text-decoration: none;
}
</style>