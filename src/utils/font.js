import store from '@/store'

/* eslint-disable */
export default function () {
  var html = document.documentElement
  var setFontSize = function () {
    var width = html.offsetWidth
    var font = 20 * (width / 375) + 'px'
    var scale = 20 * (width / 375)
    if (width >= 640) {
      font = '35px'
      scale = 35
    }
    store.commit('setObScale', scale)
    if (parseFloat(font).toFixed(4) != parseFloat(Number(html.style.fontSize).toFixed(4))) {
      width && (html.style.fontSize = font)
    }
  }
  var timer
  var setDelay = function() {
    return clearTimeout(timer), (timer = setTimeout(setFontSize, 150))
  }
  window.addEventListener('pageshow', function(evt) {
    return evt.persisted && setDelay()
  })
  window.addEventListener('resize', setDelay)
  setFontSize()
}
