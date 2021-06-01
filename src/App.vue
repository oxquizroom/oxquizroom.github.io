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
    background: #191919;
  }
  body {
    margin: 0;
  }
  @font-face {
    font-family: 'Fira Code';
    src: url('~@/assets/font/fira-code.woff2') format('woff');
  }
  .fira-code {
    font-family: 'Fira Code';
  }
  //@font-face {
  //  font-family: LiShu;
  //  src: url('~@/assets/font/lishu.ttf') format('truetype');
  //}
  //.lishu {
  //  font-family: LiShu;
  //  font-size: 1.6em;
  //}
</style>
<style lang="less" scoped>
  //.pc {
  //  height: 100vh;
  //  overflow: auto;
  //  &::-webkit-scrollbar {
  //    background: transparent;
  //    width: 8px;
  //  }
  //  &::-webkit-scrollbar-thumb {
  //    width: 8px;
  //    border-radius: 4px;
  //    background: #202124;
  //  }
  //}
</style>
