<template>
  <div>
    <button @click="handleClick">发送请求</button>
  </div>
</template>

<script>
import { getUserAPI } from '@/api/request'

export default {
  name: 'reuqest-view',
  methods: {
    handleClick() {
      getUserAPI()
        .then((res) => {
          console.log(res)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
