export default {
  computed: {
    oneBlogScale () {
      return this.$store.state.oneBlogScale
    },
    isPC () {
      return this.oneBlogScale >= 30
    },
    isMobile () {
      return this.oneBlogScale < 30
    }
  }
}
