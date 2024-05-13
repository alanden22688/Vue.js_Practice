<template>
    <button v-on:click="showModal = true">Click Me</button>

    <div v-if="showModal" class="modal-background" v-on:click="closeModal">
        <div class="modal-content">
            <header>
                <slot name="header">
                    Default Header
                </slot>
            </header>
            <hr>
            <main>
                <slot>
                    Default Body
                </slot>
            </main>
            <hr>
            <footer>
                <slot name="footer">
                    Default Footer
                </slot>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Demo22_2Component',
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        closeModal() {
            this.showModal = false;
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