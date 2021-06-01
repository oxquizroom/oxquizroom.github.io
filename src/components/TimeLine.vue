<template>
  <div class="box">
    <div class="latest">Latest Blog</div>
    <div class="list">
      <div class="item" v-for="i in 10" :key="i">
        <div class="time">2021.06.01</div>
        <div class="title">第一篇博客</div>
        <div class="des">
          2021年的六一，第一篇博客。
        </div>
      </div>
    </div>
    <div class="list-footer">
      <span class="more">MORE</span>
    </div>
    <div class="list-footer">START</div>
  </div>
</template>

<script>
export default {
  name: "TimeLine"
}
</script>

<style lang="less" scoped>
  .box {
    padding: 40px 20px;
    font-family: 'Fira Code', monospace;
  }
  .latest {
    text-align: center;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Fira Code', monospace;
    margin-bottom: 2rem;
  }
  .list {
    width: 17rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .item {
      width: 8.5rem;
      min-height: 4rem;
      box-sizing: border-box;
      align-self: flex-start;
      transform: translate(2px, 0);
      text-align: right;
      position: relative;
      padding-right: .5rem;
      border-right: 4px dashed @theme-color;
      margin-bottom: 4px;
      .title {
        color: @theme-color;
        font-size: .8rem;
        word-break: break-all;
        cursor: pointer;
        margin-bottom: .3rem;
        &:hover {
          text-decoration: underline;
        }
      }
      .time {
        color: @des-color;
        font-size: .5rem;
      }
      .des {
        color: @des-color;
        font-size: .6rem;
        word-break: break-all;
      }
      //&::after {
      //  content: '';
      //  width: 4px;
      //  height: 100%;
      //  position: absolute;
      //  top: 0;
      //  right: 0;
      //  background: #fff;
      //}
      &:nth-of-type(odd) {
        align-self: flex-end;
        border-right: none;
        transform: translate(-2px, 0);
        text-align: left;
        position: relative;
        padding-left: .5rem;
        border-right: 0;
        border-left: 4px dashed @theme-color;
        //&::after {
        //  content: '';
        //  width: 4px;
        //  height: 100%;
        //  position: absolute;
        //  top: 0;
        //  left: 0;
        //  right: auto;
        //  background: #fff;
        //}
      }
      &:nth-of-type(1) {
        &::after {
          border-radius: 2px 2px 0 0;
        }
      }
      &:nth-last-of-type(1) {
        &::after {
          border-radius: 0 0 2px 2px;
        }
      }
    }
  }
  .list-footer {
    color: @theme-color;
    font-size: .6rem;
    text-align: center;
    margin-top: 1rem;
    .more {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
