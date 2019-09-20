<template>
  <div class="component component--slider">
    <div class="component__controls">
      <img src="/static/img/icons/close.svg" alt="Cerrar" @click="closeComponent()">
    </div>
    <div class="component__content">
      <h3>{{datum.title}}</h3>
      <p v-if="datum.desc">{{datum.desc}}</p>
    </div>
    <div class="component__slider">
      <div class="slider__item" v-for="file in datum.files" :style="{backgroundImage: `url(/static${file})`}"></div>
    </div>
  </div>
</template>

<script>
import EventBus from '../plugins/bus'
import Flickity from 'flickity'

export default {
  name: 'slider-component',
  props: ['datum'],
  mounted: function(){
    var flkty = new Flickity( '.component__slider', {
      // options
      cellAlign: 'left',
      contain: true,
      pageDots: false,
      freeScroll: true,
      wrapAround: true
    });
  },
  methods: {
    closeComponent() {
      EventBus.$emit('close-component')
    }
  },
}

</script>

<style lang="scss">
.component--slider {
  .component__controls {
    right: 0;
    img {
      background: #000000;
      border-radius: 100%;
      margin: 10px;
    }
  }
  .component__content {
    pointer-events: none;
    position: absolute;
    z-index: 9;
    top: 0;
    left: 0;
    width: calc(100% - 40px);
    color: black;
  }

  .component__slider {
    .slider__item {
      width: 100%;
      height: 100vh;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
}

</style>
