<template>
  <div class="first-sight" :class="{pc: isPC, mobile: isMobile}">
    <div class="one-blog" :style="oneBlogStyle">
      <svg class="one-o" width="88px" height="100px" viewBox="-6 -12 88 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <filter id="texteffect">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur>
            <feComponentTransfer>
              <feFuncA type="linear" slope="1.5" intercept="0"></feFuncA>
            </feComponentTransfer>
            <feComposite result="outer" in2="SourceGraphic" operator="out"></feComposite>
            <feGaussianBlur result="pre-inner" in="SourceGraphic" stdDeviation="2"></feGaussianBlur>
            <feComposite in="SourceGraphic" in2="pre-inner" operator="out"></feComposite>
            <feComponentTransfer result="inner">
              <feFuncA type="linear" slope="5.5" intercept="0"></feFuncA>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="outer"></feMergeNode>
              <feMergeNode in="inner"></feMergeNode>
            </feMerge>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          </filter>
        </defs>
        <path filter="url(#texteffect)" stroke-width="3" stroke="#ef50d5" fill="none" d="M1.15770752,38.9340828 C1.15770752,16.4492596 18.7870425,0.935200335 38.8488765,0.935200335 C58.9107105,0.935200335 76.3892454,16.8724506 76.3892454,38.9340828 C76.3892454,60.995715 58.9066348,77.4777473 38.7734765,77.4777473 C18.6403181,77.4777473 1.15770752,61.418906 1.15770752,38.9340828 Z"></path>
      </svg>
      <svg class="one-n" width="100px" height="100px" viewBox="-4 -12 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <filter id="texteffect">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur>
            <feComponentTransfer>
              <feFuncA type="linear" slope="1.5" intercept="0"></feFuncA>
            </feComponentTransfer>
            <feComposite result="outer" in2="SourceGraphic" operator="out"></feComposite>
            <feGaussianBlur result="pre-inner" in="SourceGraphic" stdDeviation="2"></feGaussianBlur>
            <feComposite in="SourceGraphic" in2="pre-inner" operator="out"></feComposite>
            <feComponentTransfer result="inner">
              <feFuncA type="linear" slope="7.5" intercept="0"></feFuncA>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="outer"></feMergeNode>
              <feMergeNode in="inner"></feMergeNode>
            </feMerge>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          </filter>
        </defs>
        <path filter="url(#texteffect)" stroke-width="3" stroke="#15f0f2" fill="none" d="M23.8749226,77.4777473 L3.96117149,77.4777473 C1.98570964,77.1952252 0.997978707,76.2152774 0.997978707,74.5379041 C0.997978707,72.8605308 1.98570964,71.8849225 3.96117149,71.6110792 L11.8665083,71.6110792 L12.4364507,8.11417067 C12.5507062,6.74945174 11.9300552,6.06709228 10.5744977,6.06709228 C9.21894024,6.06709228 7.01449816,6.06709228 3.96117149,6.06709228 C1.98570964,6.19224005 0.997978707,5.36821167 0.997978707,3.59500714 C0.997978707,1.8218026 1.98570964,0.935200335 3.96117149,0.935200335 C16.9643035,0.935200335 23.4658696,0.935200335 23.4658696,0.935200335 L67.5354406,77.0079834 L87.0034156,77.0079834 C88.9743524,76.9888204 89.9598208,76.1654606 89.9598208,74.5379041 C89.9598208,72.9103476 88.9743524,72.1097948 87.0034156,72.1362457 L79.9587943,72.1362457 C78.6652304,72.0908192 78.0184485,71.391078 78.0184485,70.0370221 C78.0184485,68.6829662 78.0184485,48.0420157 78.0184485,8.11417067 C77.9560014,6.74945174 78.6027833,6.06709228 79.9587943,6.06709228 C81.3148052,6.06709228 83.6630124,6.06709228 87.0034156,6.06709228 C88.9743524,6.02483006 89.9598208,5.20080168 89.9598208,3.59500714 C89.9598208,1.98921259 88.9743524,1.10261033 87.0034156,0.935200335 L67.5354406,0.935200335"></path>
      </svg>
      <svg class="one-e" width="80px" height="100px" viewBox="-2 -12 80 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <filter id="texteffect">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur>
            <feComponentTransfer>
              <feFuncA type="linear" slope="1.5" intercept="0"></feFuncA>
            </feComponentTransfer>
            <feComposite result="outer" in2="SourceGraphic" operator="out"></feComposite>
            <feGaussianBlur result="pre-inner" in="SourceGraphic" stdDeviation="2"></feGaussianBlur>
            <feComposite in="SourceGraphic" in2="pre-inner" operator="out"></feComposite>
            <feComponentTransfer result="inner">
              <feFuncA type="linear" slope="7.5" intercept="0"></feFuncA>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="outer"></feMergeNode>
              <feMergeNode in="inner"></feMergeNode>
            </feMerge>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          </filter>
        </defs>
        <path filter="url(#texteffect)" stroke-width="3" stroke="#f2a415" fill="none" d="M67.9724799,0.122308767 L67.9724799,22.0710391 C68.0083405,24.0382665 67.0441052,25.0218802 65.0797742,25.0218802 C63.1154432,25.0218802 62.1152095,24.0382665 62.0790731,22.0710391 L62.0790731,3.05080493 C62.0883366,1.682736 61.4000296,0.998701542 60.0141522,0.998701542 C58.6282747,0.998701542 40.2736468,0.998701542 4.95026848,0.998701542 C2.99236277,1.00929292 2.01340992,1.84891757 2.01340992,3.51757549 C2.01340992,5.18623342 2.99236277,6.01536042 4.95026848,6.00495649 L11.0264403,6.00495649 C12.3811997,6.02576434 13.0585794,6.71382915 13.0585794,8.06915092 C13.0585794,9.4244727 13.0585794,18.0901902 13.0585794,34.0663033 C13.0456448,35.39988 13.6993579,36.0666683 15.0197188,36.0666683 C16.3400796,36.0666683 22.3470061,36.0666683 33.0404983,36.0666683 C34.3424509,36.0098946 34.9934271,35.3431063 34.9934271,34.0663033 C34.9934271,32.7895003 34.9934271,30.4490133 34.9934271,27.0448423 C35.0175489,25.0364689 35.8560639,24.0322822 37.5089722,24.0322822 C39.1618804,24.0322822 40.0007953,25.0364689 40.0257169,27.0448423 L40.0257169,50.0174323 C40.0249171,52.0410249 39.1860022,53.0528213 37.5089722,53.0528213 C35.8319421,53.0528213 34.9934271,52.0410249 34.9934271,50.0174323 L34.9934271,43.0513329 C35.0055637,41.6874006 34.3545875,41.0054345 33.0404983,41.0054345 C31.7264092,41.0054345 25.7194826,41.0054345 15.0197188,41.0054345 C13.7122925,41.0197977 13.0585794,41.7017638 13.0585794,43.0513329 C13.0585794,44.400902 13.0585794,53.4270252 13.0585794,70.1297024 C13.0621422,71.4098336 12.3847625,72.0498991 11.0264403,72.0498991 C9.66811809,72.0498991 7.34004379,72.0498991 4.04221743,72.0498991 C2.02737584,72.07425 1.01995504,72.9039858 1.01995504,74.5391065 C1.01995504,76.1742272 2.02737584,77.0025999 4.04221743,77.0242245 L60.5078154,77.0242245 C61.8255191,77.0369384 62.484371,76.381352 62.484371,75.0574654 C62.484371,73.7335789 62.484371,67.3958928 62.484371,56.0444073 C62.5333182,54.3597288 63.3984526,53.5173896 65.0797742,53.5173896 C66.7610958,53.5173896 67.6080346,54.3597288 67.6205905,56.0444073 L67.6205905,77.0242245"></path>
      </svg>
      <br v-if="isMobile"/>
      <span v-else class="letter-space"></span>
      <svg class="blog-b" width="80px" height="100px" viewBox="-2 -12 80 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <filter id="texteffect">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur>
            <feComponentTransfer>
              <feFuncA type="linear" slope="1.5" intercept="0"></feFuncA>
            </feComponentTransfer>
            <feComposite result="outer" in2="SourceGraphic" operator="out"></feComposite>
            <feGaussianBlur result="pre-inner" in="SourceGraphic" stdDeviation="2"></feGaussianBlur>
            <feComposite in="SourceGraphic" in2="pre-inner" operator="out"></feComposite>
            <feComponentTransfer result="inner">
              <feFuncA type="linear" slope="7.5" intercept="0"></feFuncA>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="outer"></feMergeNode>
              <feMergeNode in="inner"></feMergeNode>
            </feMerge>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          </filter>
        </defs>
        <path filter="url(#texteffect)" stroke-width="3" stroke="#00C4EE" fill="none" d="M12.0700667,8.06568007 C12.0227827,6.6092602 12.0321874,6.09382947 9.99366144,6.09382947 C8.63464415,6.09382947 6.66549921,6.09382947 4.08622663,6.09382947 C2.04267588,6.11921119 1.0209005,5.28734779 1.0209005,3.59823927 C1.0209005,1.90913074 2.04267588,1.06232176 4.08622663,1.05781231 C24.2655977,1.05781231 36.2623268,1.05781231 40.0764137,1.05781231 C50.4256655,1.05781231 59.0875814,9.93436125 59.0875814,21.0281385 C59.0875814,32.6074558 54.0037189,30.9762251 54.0037189,35.022355 C54.0037189,38.1473991 56.639688,37.7039398 59.9088346,38.1473991 C65.5582977,38.7915619 72.2881669,47.1733767 72.2881669,57.0082548 C72.2881669,70.957914 59.0875814,77.0792916 56.0209005,77.0792916 C53.9764492,77.0792916 36.6648912,77.0792916 4.08622663,77.0792916 C2.04267588,77.1051887 1.0209005,76.2842124 1.0209005,74.6163627 C1.0209005,72.948513 2.04267588,72.1000935 4.08622663,72.0711042 L9.99366144,72.0711042 C11.3779316,72.0614411 12.0700667,71.3878592 12.0700667,70.0503583 C12.0700667,68.0441071 13.0609854,38.5875246 12.0700667,8.06568007 Z"></path>
      </svg>
      <svg class="blog-l" width="82px" height="100px" viewBox="-2 -12 82 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <filter id="texteffect">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur>
            <feComponentTransfer>
              <feFuncA type="linear" slope="1.5" intercept="0"></feFuncA>
            </feComponentTransfer>
            <feComposite result="outer" in2="SourceGraphic" operator="out"></feComposite>
            <feGaussianBlur result="pre-inner" in="SourceGraphic" stdDeviation="2"></feGaussianBlur>
            <feComposite in="SourceGraphic" in2="pre-inner" operator="out"></feComposite>
            <feComponentTransfer result="inner">
              <feFuncA type="linear" slope="7.5" intercept="0"></feFuncA>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="outer"></feMergeNode>
              <feMergeNode in="inner"></feMergeNode>
            </feMerge>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          </filter>
        </defs>
        <path filter="url(#texteffect)" stroke-width="3" stroke="#F53127" fill="none" d="M23.0133658,1.05781231 L3.99783352,1.05781231 C2.03179233,1.12184987 1.04877174,1.94436802 1.04877174,3.52536679 C1.04877174,5.10636555 2.03179233,5.88633959 3.99783352,5.86528891 L9.98738875,5.86528891 C11.3498421,5.99321228 12.0310688,6.71367766 12.0310688,8.02668505 C12.0310688,9.33969244 12.0310688,30.023954 12.0310688,70.0794696 C12.0185193,71.3663371 11.3372927,72.0097709 9.98738875,72.0097709 C8.63748484,72.0097709 6.64096643,72.0097709 3.99783352,72.0097709 C2.03179233,72.0126871 1.04877174,72.8585313 1.04877174,74.5473034 C1.04877174,76.2360756 2.03179233,77.0804616 3.99783352,77.0804616 L69.4741877,77.0804616 C70.8546266,77.0697296 71.5448461,76.4045635 71.5448461,75.0849633 C71.5448461,73.7653631 71.5448461,67.4186403 71.5448461,56.0447947 C71.5618486,54.05458 72.3979771,53.0594726 74.0532315,53.0594726 C75.708486,53.0594726 76.543053,54.05458 76.5569326,56.0447947 L76.5569326,77.0804616"></path>
      </svg>
      <svg class="blog-o" width="82px" height="100px" viewBox="-2 -12 82 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <filter id="texteffect">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur>
            <feComponentTransfer>
              <feFuncA type="linear" slope="1.5" intercept="0"></feFuncA>
            </feComponentTransfer>
            <feComposite result="outer" in2="SourceGraphic" operator="out"></feComposite>
            <feGaussianBlur result="pre-inner" in="SourceGraphic" stdDeviation="2"></feGaussianBlur>
            <feComposite in="SourceGraphic" in2="pre-inner" operator="out"></feComposite>
            <feComponentTransfer result="inner">
              <feFuncA type="linear" slope="7.5" intercept="0"></feFuncA>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="outer"></feMergeNode>
              <feMergeNode in="inner"></feMergeNode>
            </feMerge>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          </filter>
        </defs>
        <path filter="url(#texteffect)" stroke-width="3" stroke="#00D9F6" fill="none" d="M1.15770752,38.9340828 C1.15770752,16.4492596 18.7870425,0.935200335 38.8488765,0.935200335 C58.9107105,0.935200335 76.3892454,16.8724506 76.3892454,38.9340828 C76.3892454,60.995715 58.9066348,77.4777473 38.7734765,77.4777473 C18.6403181,77.4777473 1.15770752,61.418906 1.15770752,38.9340828 Z"></path>
      </svg>
      <svg class="blog-g" width="82px" height="100px" viewBox="-2 -12 82 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <filter id="texteffect">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur>
            <feComponentTransfer>
              <feFuncA type="linear" slope="1.5" intercept="0"></feFuncA>
            </feComponentTransfer>
            <feComposite result="outer" in2="SourceGraphic" operator="out"></feComposite>
            <feGaussianBlur result="pre-inner" in="SourceGraphic" stdDeviation="2"></feGaussianBlur>
            <feComposite in="SourceGraphic" in2="pre-inner" operator="out"></feComposite>
            <feComponentTransfer result="inner">
              <feFuncA type="linear" slope="7.5" intercept="0"></feFuncA>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="outer"></feMergeNode>
              <feMergeNode in="inner"></feMergeNode>
            </feMerge>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          </filter>
        </defs>
        <path filter="url(#texteffect)" stroke-width="3" stroke="#F3D43F" fill="none" d="M54.9950047,36.0420716 L74.0017502,36.0420716 C75.9531158,36.0438734 76.9287986,36.8737593 76.9287986,38.5317294 C76.9287986,40.1896995 75.9531158,41.0077235 74.0017502,40.9858014 L68.0086133,40.9858014 C66.6441388,41.0163321 65.9619016,41.7083792 65.9619016,43.0619427 C65.9619016,45.0922878 65.9619016,63.994528 65.9619016,66.0133116 C65.9619016,68.0320951 55.6524536,76.9751034 38.9776204,76.9751034 C34.0907979,76.9751034 42.7455722,76.9751034 38.0006426,76.9751034 C20.1357621,76.9751034 1.02644223,62.1359267 1.02644223,39.0578594 C1.02644223,17.5730435 16.5494759,1.0167406 38.9776204,1.0167406 C55.3938854,1.0167406 64.6654916,10.3182718 65.9619016,12.0430974"></path>
      </svg>
    </div>
    <!--            <div class="by">by <span class="lishu">鬼斧</span></div>-->
  </div>
</template>

<script>
import scale from '@/mixins/scale'

export default {
  mixins: [scale],
  computed: {
    oneBlogStyle () {
      return {
        transform: `scale(${this.oneBlogScale / 45})`
      }
    }
  },
  watch: {
    oneBlogScale(val) {
      console.log(val, 'scale....')
    }
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
  .first-sight {
    height: 100vh;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @keyframes offset {
    to {
      stroke-dashoffset: 0;
    }
  }
  .one-blog {
    text-align: center;
    transition: all 1s;
    svg {
      margin: 10px 1px;
      path {
        animation: offset 7s linear forwards;
        stroke-linecap: round;
        stroke-dashoffset: 1000;
        stroke-dasharray: 1000;
      }
      .by {
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .letter-space {
      display: inline-block;
      width: 1.8rem;
    }
  }
</style>
