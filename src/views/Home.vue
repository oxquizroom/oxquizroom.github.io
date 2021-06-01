<template>
  <div class="home">
    <div class="box">
      <div class="page">
        <first-sight />
      </div>
    </div>
  </div>
</template>

<script>
import FirstSight from "@/components/FirstSight"

export default {
  components: {
    FirstSight
  }
}
</script>

<style lang="less">
  .box {
    background: #000;
    .page {
      height: 300vh;
    }
  }
</style>
