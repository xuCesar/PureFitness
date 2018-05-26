<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$_wechat.getWXTicket()
  }
}
</script>
<style lang="scss">
@import 'styles/common.scss';
</style>
