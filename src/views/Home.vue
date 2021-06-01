<template>
  <div class="home">
    <div class="box">
      <div class="page">
        <FirstSight />
        <TimeLine />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import FirstSight from "@/components/FirstSight"
import TimeLine from "@/components/TimeLine"
import Footer from "@/components/Footer"

export default {
  components: {
    FirstSight,
    TimeLine,
    Footer
  }
}
</script>

<style lang="less" scoped>
  .box {
    .page {
    }
  }
</style>
