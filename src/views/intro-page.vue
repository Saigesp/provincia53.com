<template>
  <div class="intro">
    <div class="intro__back intro__back--0"></div>
    <div class="intro__back intro__back--1" :class="{'is-active': isActive1}"></div>
    <div class="intro__wrap" :class="`intro__wrap--${currentSlide}`">
      <div class="intro__block">
        <div class="text__wrap">
          <div></div>
          <p>Imagínate que naciste a principios de los años 70...</p>
        </div>
      </div>
      <div class="intro__block intro__block--empty">
      </div>
      <div class="intro__block">
        <div class="text__wrap">
          <div></div>
          <p>...en una capital española de provincias.</p>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import * as d3Base from 'd3'
import { graphScroll } from "graph-scroll";
const d3 = Object.assign(d3Base, { graphScroll });

export default {
  name: 'intro-page',
  data: function(){
    return {
      currentSlide: 0,
      isActive1: false,
    }
  },
  mounted: function() {
    d3.graphScroll()
      .container(d3.select('.intro__wrap'))
      .sections(d3.selectAll('.intro__block'))
      .on('active', (i) => {
        this.currentSlide = i;
      })
  },
  watch: {
    currentSlide(to, from){
      console.log(to, from);
      if(to == 1 && from == 0){
        this.isActive1 = true;
      }
      if(to == 0 && from == 1){
        this.isActive1 = false;
      }
    }
  }
}
</script>



<style lang="scss">
.intro {
  position: relative;
  color: white;
  font-size: 24px;
  &__back {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    &--0 {
      background-image: url('/static/img/barrio.jpg');
    }
    &--1 {
      background-image: url('/static/img/iglesia.jpg');
      left: 100%;
      transition: left 1000ms ease;
      &.is-active {
        left: 0;
      }
    }
  }
  &__block {
    position: relative;
    z-index: 9;
    &--empty {
      height: 100vh;
    }
    .text__wrap {
      padding: 20px;
      height: calc(100vh - 40px);
      display: flex;
      flex-direction: column;
      > div {
        flex: 1 1 auto;
      }
      > p {
        flex: 0 1 auto;
        margin-bottom: 80px;
      }
    }
  }
}
</style>
