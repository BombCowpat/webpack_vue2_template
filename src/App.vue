<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="handleClick" value="xxx">BTN1</button>
    <img src="@/assets/404.png" alt="" />
    <router-link to="/p1">p1</router-link>
    <router-link to="/p2">p2</router-link>
    <router-view></router-view>
    <!-- <div class="wrap">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div> -->
    <div class="box1"></div>
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
    }
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.wrap {
  width: 375px;
  height: 375px;
  background-color: #bfa;
  white-space: normal;
  word-break: break-all;
}

.box1 {
  width: 100px;
  height: 100px;
  background-color: #bfa;
  margin: 20px auto;
  @include thinBorder((bottom, left, right, top));
}
</style>
