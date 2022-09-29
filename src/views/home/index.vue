<template>
  <div>
    <div>
      <router-link to="/canvas-1">canvas-1</router-link>
    </div>
    <div>
      <router-link to="/request">reuqest</router-link>
    </div>
    <template v-if="imgs.length">
      <img style="width: 60px" v-for="img in imgs" :src="img" :key="img" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'views-home',
  data() {
    return {
      imgs: []
    }
  },
  mounted() {
    const imgs = require.context('@/assets')
    this.imgs = imgs.keys().map((i) => imgs(i))
  }
}
</script>

<style lang="scss" scoped></style>
