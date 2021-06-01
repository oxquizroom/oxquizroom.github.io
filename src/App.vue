<template>
  <div id="app" :class="{pc: isPC, mobile: isMobile}">
    <router-view/>
  </div>
</template>

<script>
import scale from '@/mixins/scale'

export default {
  mixins: [scale]
}
</script>

<style lang="less">
  html {
    background: #000;
  }
  body {
    margin: 0;
  }
  @font-face {
    font-family: LiShu;
    src: url('~@/assets/font/lishu.ttf') format('truetype');
  }
  .lishu {
    font-family: LiShu;
    font-size: 1.6em;
  }
</style>
<style lang="less" scoped>
  .pc {
    height: 100vh;
    overflow: auto;
    &::-webkit-scrollbar {
      background: #000;
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      width: 8px;
      border-radius: 4px;
      background: #202124;
    }
  }
</style>
