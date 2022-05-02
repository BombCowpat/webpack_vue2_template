<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="handleClick" value="xxx">BTN</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    handleClick() {
      this.$destroy()
    },
  },
  beforeCreate() {
    console.log('father beforeCreated')
  },
  created() {
    console.log('father created')
  },
  beforeMount() {
    console.log('father beforeMounte')
  },
  mounted() {
    console.log('father mounted')
  },
  beforeDestroy() {
    console.log('father beforeDestroy')
  },
  destroyed() {
    console.log('father destroyed')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
