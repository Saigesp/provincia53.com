<template>
  <div id="homechart" class="chart__wrap" :class="{'is-zoomed': isZoomed}" ref="chart">

    <!-- start overlay -->
    <div class="overlay">
      <div class="logo">
        <h1>Provincia53</h1>
        <img src="/static/img/logo.svg" alt="Provincia53">
      </div>
      <div class="hamburguer">
        <img src="/static/img/icons/menu.svg" alt="Menu">
      </div>
      <button class="resetzoom" @click="resetZoom()">Centrar</button>
    </div>
    <!-- end overlay -->

    <!-- start menu -->
    <div class="menu__wrap">
      <div class="menu">
        <ul>
          <li><router-link :to="{name: 'project-page'}">El proyecto</router-link></li>
          <li><router-link :to="{name: 'about-page'}">Quiénes somos</router-link></li>
          <li><router-link :to="{name: 'characters-page'}">Guía de personajes</router-link></li>
          <li><router-link :to="{name: 'referrers-page'}">Referencias</router-link></li>
        </ul>
      </div>
    </div>
    <!-- end menu -->

    <!-- start chart -->
    <parallax-container>

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
              <g v-for="item in yeargroup.items" class="item" :transform="`translate(${calcItemCenter(item.date, i)[0]},${calcItemCenter(item.date, i)[1]})`">
                <circle class="item__circle" r="10" @click="showItem(item)"></circle>
                <circle class="item__dot" r="1"></circle>
              </g>
              <text class="year__title" y="4">{{yeargroup.title}}</text>
            </g>
          </g>
        </svg>
      </parallax-element>
      <!-- end chart contents -->

    </parallax-container>
    <!-- end chart -->
  </div>
</template>


<script>
import * as d3 from "d3";

export default {
  name: 'home-app',
  data: function() {
    return {
      width: 0,
      height: 0,
      minScaleSize: 700,
      circleRadius: () => 1,
      zoom: () => {},
      datum: require('../assets/data/data.json'),
      isZoomed: false,
    }
  },
  created: function() {
    this.circleRadius = d3.scaleLinear()
      .domain([0, this.datum.years.length])
  },
  computed: {
    center() {
      if (this.width < this.minScaleSize) {
        return [this.width / 2, this.height - 100]
      } else if (this.height < this.minScaleSize) {
        return [this.width / 2, this.height / 2]
      } else return [this.width / 2, this.height / 2]
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

  },
  methods: {
    getCanvasSize() {
      this.width = parseInt(this.$refs.chart.offsetWidth);
      this.height = parseInt(this.$refs.chart.offsetHeight);
      this.calcCircleRadius();
      this.circleRadius.range([this.calcCircleRadius(), 40]);
    },
    calcCircleRadius() {
      return d3.min([this.width / 2, this.height / 2]) - 80;
    },
    calcItemCenter(strdate, i) {
      let date = new Date(strdate)
      return [
        (Math.sin(this.dateToRadians(date)) * this.circleRadius(+i)),
        (Math.cos(this.dateToRadians(date)) * this.circleRadius(+i))
      ]
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
      console.log('showItem', item);
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