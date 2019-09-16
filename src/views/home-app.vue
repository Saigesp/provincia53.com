<template>
  <div id="home">
    <div  class="chart__wrap" :class="{'is-zoomed': isZoomed}" ref="chart">

      <!-- start overlay -->
      <div class="overlay">
        <div class="logo">
          <h1>Provincia53</h1>
          <img src="/static/img/logo.svg" alt="Provincia53">
        </div>
        <div class="hamburguer" v-show="!isMenuActive">
          <img src="/static/img/icons/menu.svg" alt="Menu" @click="isMenuActive = true; currentComponent = false; currentComponentData = {}">
        </div>
        <button class="resetzoom" @click="resetZoom()">Centrar</button>
      </div>
      <!-- end overlay -->

      <!-- start menu -->
      <div class="menu__wrap" :class="{'is-active': isMenuActive}">
        <div class="menu__close">
          <img src="/static/img/icons/close.svg" alt="Cerrar" @click="isMenuActive = false">
        </div>
        <div class="menu">
          <ul>
            <li><router-link :to="{name: 'project-page'}">El proyecto</router-link></li>
            <li><router-link :to="{name: 'about-page'}">Quiénes somos</router-link></li>
            <li><router-link :to="{name: 'characters-page'}">Guía de personajes</router-link></li>
            <li><router-link :to="{name: 'referrers-page'}">Referencias</router-link></li>
            <li class="rrss">
              <a href="https://www.facebook.com/Provincia-53-103922694326409/" target="_blank">
                <img src="/static/img/icons/facebook.svg" alt="Provincia53 en Facebook">
              </a>
              <a href="https://twitter.com/provincia_53" target="_blank">
                <img src="/static/img/icons/twitter.svg" alt="Provincia53 en Twitter">
              </a>
              <a href="https://www.instagram.com/provincia_53/" target="_blank">
                <img src="/static/img/icons/instagram.svg" alt="Provincia53 en Instagram">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- end menu -->

      <!-- start chart -->
      <parallax-container class="chart__metawrap" v-if="width > minScaleSize">

        <!-- start chart background -->
        <parallax-element :parallaxStrength="100" :type="'translation'">
          <div class="background"></div>
        </parallax-element>
        <!-- end chart background -->
        
        <!-- start chart contents -->
        <parallax-element :parallaxStrength="-10" :type="'translation'">
          <svg class="chart" :viewBox="`0 0 ${width} ${height}`" :width="width+400" :height="height+100">
            <g ref="gengroup">
              <g v-for="(yeargroup, i) in datum.years" class="chart__ygroup" :transform="`translate(${center[0]},${center[1]})`">
                <circle class="year__hover" :r="circleRadius(i)"></circle>
                <circle class="year" :r="circleRadius(i)"></circle>
                <g v-for="item in yeargroup.items" :class="`item item--${item.type}`" :transform="`translate(${calcItemCenter(item.date, i)[0]},${calcItemCenter(item.date, i)[1]})`">
                  <polyline class="item__line" :points="calcLinePoints(item.date, i)" v-if="item.title"></polyline>
                  <circle class="item__circle" :r="item.rext" @click="showItem(item)"></circle>

                  <circle class="item__dot" :r="item.rint"></circle>
                  <text
                    class="item__text"
                    :x="calcTextPosition(item.date, i)[0]"
                    :y="calcTextPosition(item.date, i)[1]"
                    :text-anchor="calcTextAnchor(item.date, i)"
                    v-if="item.title"
                    dy="5">{{item.title}}</text>
                </g>
                <text class="year__title" y="10">{{yeargroup.title}}</text>
              </g>
              <g :transform="`translate(${center[0]},${center[1]})`">
                <svg-wave v-if="isPlayingAudio"></svg-wave>
              </g>
            </g>
          </svg>
        </parallax-element>
        <!-- end chart contents -->

      </parallax-container>
      <!-- end chart -->

    </div>

    <!-- start mobile content -->
    <div class="mobilick" v-if="width <= minScaleSize">
      <div v-for="(yeargroup, i) in datum.years">
        <h3>{{yeargroup.title}}</h3>
        <div v-for="item in yeargroup.items">
          <h4>{{item.title}}</h4>
        </div>
      </div>
    </div>
    <!-- end mobile content -->

    <!-- start components -->
    <component v-if="currentComponent" v-bind:is="currentComponent" :key="currentComponent" :datum="currentComponentData"></component>
    <!-- end components -->

  </div>
</template>


<script>
import EventBus from '../plugins/bus'
import * as d3 from "d3";

export default {
  name: 'home-app',
  data: function() {
    return {
      width: 0,
      height: 0,
      minScaleSize: 700, // Check CSS media queries
      circleRadius: () => 1,
      zoom: () => {},
      datum: require('../assets/data/data.json'),
      isZoomed: false,
      isMenuActive: false,
      currentComponent: false,
      currentComponentData: {},
      currentAudio: new Audio(),
      isPlayingAudio: false,
    }
  },
  created: function() {
    this.circleRadius = d3.scaleLinear()
      .domain([0, this.datum.years.length])
  },
  computed: {
    center() {
      return [this.width/2, this.height/2]
    },
  },
  mounted: function() {
    this.getCanvasSize();
    window.addEventListener("resize", () => { this.getCanvasSize(); });

    this.zoom = d3.zoom()
      .scaleExtent([1 / 4, 30])
      .on("zoom", d => {
        this.isZoomed = d3.event.transform.k === 1 && d3.event.transform.x === 0 ? false : true;
        d3.select(this.$refs.gengroup).attr("transform", d3.event.transform);
      });

    this.svg = d3.select(this.$refs.chart)
      .call(this.zoom);

    EventBus.$on('close-component', data => {
      this.currentComponent = false;
      this.currentComponentData = {};
    })

    EventBus.$on('stop-audio', data => {
      this.stopAudio();
    })

  },
  methods: {
    getCanvasSize() {
      this.width = parseInt(this.$refs.chart.offsetWidth);
      this.height = parseInt(this.$refs.chart.offsetHeight);
      this.calcCircleRadius();
      this.circleRadius.range([this.calcCircleRadius(), 40]);
    },
    calcCircleRadius() {
      return d3.min([d3.min([this.width / 2, this.height / 2]) - 150, 350]);
    },
    calcItemCenter(strdate, i) {
      let date = new Date(strdate)
      return [
        (Math.sin(this.dateToRadians(date)) * this.circleRadius(+i)),
        (Math.cos(this.dateToRadians(date)) * this.circleRadius(+i))
      ]
    },
    calcLinePoints(strdate, i){
      let date = new Date(strdate);
      let rads = this.dateToRadians(date);
      let xtrsp = rads <= Math.PI ? 20 : -20;
      return [
        [0,0],
        [
          Math.sin(rads) * this.circleRadius(this.datum.years.length-(i-2)),
          Math.cos(rads) * this.circleRadius(this.datum.years.length-(i-2))
        ],
        [
          (Math.sin(rads) * this.circleRadius(this.datum.years.length-(i-2)))+xtrsp,
          (Math.cos(rads) * this.circleRadius(this.datum.years.length-(i-2)))
        ]
      ]
    },
    calcTextPosition(strdate, i){
      let date = new Date(strdate);
      let rads = this.dateToRadians(date);
      let xtrsp = rads <= Math.PI ? 26 : -26;
      return [
        (Math.sin(rads) * this.circleRadius(this.datum.years.length-(i-2)))+xtrsp,
        (Math.cos(rads) * this.circleRadius(this.datum.years.length-(i-2)))
      ]
    },
    calcTextAnchor(strdate, i){
      return this.dateToRadians(new Date(strdate)) <= Math.PI ? 'start' : 'end'
    },
    dateToRadians(date) {
      if (this.width < this.minScaleSize) {
        return Math.PI;
      } else {
        let start = new Date(date.getFullYear(), 0, 0);
        return Math.floor((date - start) / (1000 * 60 * 60 * 24)) / (183 / Math.PI);
      }
    },
    showItem(item) {
      if(item.type == 'shortaudio' || item.type == 'goodaudio'){
        this.playAudio('/static/'+item.file)
      }else{
        this.currentComponent = item.component;
        this.currentComponentData = item;
      }
    },
    playAudio(source){
      this.currentAudio.pause();
      this.currentAudio = new Audio(source);
      this.currentAudio.onended = (event) => {
        this.stopAudio()
      };
      this.currentAudio.play();
      this.isPlayingAudio = true;
    },
    stopAudio(){
      this.currentAudio.pause();
      this.isPlayingAudio = false;
    },
    resetZoom() {
      this.svg.transition()
        .duration(1000)
        .call(this.zoom.transform, d3.zoomIdentity.scale(1));
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", () => { this.getCanvasSize(); });
  }
}

</script>