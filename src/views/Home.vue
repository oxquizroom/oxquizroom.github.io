<template>
  <div class="home">
    <div class="box">
      <div class="page">
        <first-sight />
        <time-line />
      </div>
    </div>
  </div>
</template>

<script>
import FirstSight from "@/components/FirstSight"
import TimeLine from "@/components/TimeLine"

export default {
  components: {
    FirstSight,
    TimeLine
  }
}
</script>

<style lang="less" scoped>
  .box {
    .page {
      height: 300vh;
    }
  }
</style>
