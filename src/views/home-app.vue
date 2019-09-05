<template>
  <div id="homechart" class="chart__wrap" ref="chart">
    <parallax-container>
      <parallax-element :parallaxStrength="100" :type="'translation'">
        <div class="background"></div>
      </parallax-element>
      <parallax-element :parallaxStrength="-10" :type="'translation'">
        <svg class="chart" :viewBox="`0 0 ${width} ${height}`" :width="width+400" :height="height+100">
          <g ref="gengroup">
            <g v-for="(yeargroup, i) in datum.years" class="chart__ygroup">
              <circle class="year-hover" :cx="center[0]" :cy="center[1]" :r="circleRadius(yeargroup.year)" @click="resetZoom()"></circle>
              <circle class="year" :cx="center[0]" :cy="center[1]" :r="circleRadius(yeargroup.year)"></circle>
            </g>
          </g>
        </svg>
      </parallax-element>
    </parallax-container>
  </div>
</template>




<script>
import * as d3 from "d3";

export default {
    name: 'home-app',
    data: function(){
        return {
            width: 0,
            height: 0,
            minScaleSize: 700,
            circleRadius: ()=>1,
            zoom: ()=>{},
            datum: require('../assets/data/data.json'),
        }
    },
    created: function(){
        this.circleRadius = d3.scaleLinear()
            .domain(d3.extent(this.datum.years, d=>+d.year).reverse())
    },
    computed: {
        center(){
            if(this.width < this.minScaleSize){
                return [this.width/2, this.height-100]
            }else if(this.height < this.minScaleSize){
                return [this.width/2, this.height/2]
            }else return [this.width/2, this.height/2]
        }
    },
    mounted: function(){
        this.getCanvasSize();
        window.addEventListener("resize", ()=>{ this.getCanvasSize(); });

        this.zoom = d3.zoom()
            .scaleExtent([1 / 4, 30])
            .on("zoom", d => {
                d3.select(this.$refs.gengroup).attr("transform", d3.event.transform);
            });

        this.svg = d3.select(this.$refs.chart)
            .call(this.zoom);

    },
    methods: {
        getCanvasSize(){
            this.width = parseInt(this.$refs.chart.offsetWidth);
            this.height = parseInt(this.$refs.chart.offsetHeight);
            this.calcCircleRadius();
            this.circleRadius.range([this.calcCircleRadius(),50]);
        },
        calcCircleRadius(){
            if(this.width < this.minScaleSize){
                return this.height-200;
            }else if(this.height < this.minScaleSize){
                return d3.min([this.width, this.height])-50;
            }else{
                return d3.min([this.width/2, this.height/2])-80;
            }
        },
        resetZoom(){
            this.svg.transition()
                .duration(1000)
                .call(this.zoom.transform, d3.zoomIdentity.scale(1));
        }
    },
    beforeDestroy(){
        window.removeEventListener("resize", ()=>{ this.getCanvasSize(); });
    }
}
</script>


<style lang="scss">
.parallax-container {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
}
.parallax-element {
    position: absolute;
}
.background {
    pointer-events: none;
    position: relative;
    top: -100px;
    left: -200px;
    width: calc(100vw + 400px);
    height: calc(100vh + 200px);
    background-image: url('/static/img/background.jpg');
    background-size: cover;
    background-position: 0 0;

}
.chart {
    display: block;
    margin: 0 auto;
    min-width: 100px;
    min-height: 100px;
    margin-left: -200px;
    &__wrap {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
    &__ygroup {
        .year {
            stroke: #1b1b1b;
            stroke-width: 1px;
            fill: transparent;
            pointer-events: none;
            transition: cy 1000ms ease-in-out, r 1000ms 300ms ease-in-out;
            animation: rotation 5s ease-out 500ms 1 forwards;
            stroke-dasharray: 6000px;
            stroke-dashoffset: 100%;
            opacity: 0.6;
        }
        .year-hover {
            stroke: transparent;
            stroke-width: 10px;
            fill: transparent;
            cursor: pointer;
            pointer-events: stroke;
            transition: cy 1000ms ease-in-out, r 1000ms 300ms ease-in-out;
        }
        &:hover {
            .year-hover {
                stroke: blue;
            }
        }
    }
}



@keyframes rotation {
  0% {
    stroke-dasharray: 0;
    stroke-dashoffset: 100%;
  }
  100% {
    stroke-dasharray: 6000px;
    stroke-dashoffset: 0;
  }
}

</style>