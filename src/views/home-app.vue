<template>
  <div id="homechart" class="chart__wrap" :class="{'is-zoomed': isZoomed}" ref="chart">
    <div class="overlay">
        <button class="resetzoom" @click="resetZoom()">Centrar</button>
    </div>
    <parallax-container>
      <parallax-element :parallaxStrength="100" :type="'translation'">
        <div class="background"></div>
      </parallax-element>
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
            isZoomed: false,
        }
    },
    created: function(){
        this.circleRadius = d3.scaleLinear()
            .domain([0, this.datum.years.length])
    },
    computed: {
        center(){
            if(this.width < this.minScaleSize){
                return [this.width/2, this.height-100]
            }else if(this.height < this.minScaleSize){
                return [this.width/2, this.height/2]
            }else return [this.width/2, this.height/2]
        },
    },
    mounted: function(){
        this.getCanvasSize();
        window.addEventListener("resize", ()=>{ this.getCanvasSize(); });

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
        getCanvasSize(){
            this.width = parseInt(this.$refs.chart.offsetWidth);
            this.height = parseInt(this.$refs.chart.offsetHeight);
            this.calcCircleRadius();
            this.circleRadius.range([this.calcCircleRadius(),60]);
        },
        calcCircleRadius(){
            if(this.width < this.minScaleSize){
                return 0;
            }else if(this.height < this.minScaleSize){
                return 0;
            }else{
                return d3.min([this.width/2, this.height/2])-80;
            }
        },
        calcItemCenter(strdate, i){
            let date = new Date(strdate)
            return [
                (Math.sin(this.dateToRadians(date))*this.circleRadius(+i)),
                (Math.cos(this.dateToRadians(date))*this.circleRadius(+i))
            ]
        },
        dateToRadians(date){
            if(this.width < this.minScaleSize){
                return Math.PI;
            }else{
                let start = new Date(date.getFullYear(), 0, 0);
                return Math.floor((date-start)/(1000*60*60*24))/(183/Math.PI);
            }
        },
        showItem(item){
            console.log('showItem', item);
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
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    * {
        pointer-events: all;
    }
    .resetzoom {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 20px;
        opacity: 0;
        transition: opacity 200ms ease, background 250ms ease;
    }
}
.background {
    pointer-events: none;
    position: relative;
    top: -100px;
    left: -200px;
    width: calc(100vw + 400px);
    height: calc(100vh + 200px);
    background-image: url('/static/img/piscina-black.png');
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
        &.is-zoomed .resetzoom {
            opacity: 1;
        }
    }
    &__ygroup {
        .year {
            stroke: #fff;
            stroke-width: 1px;
            fill: transparent;
            pointer-events: none;
            transition: r 1000ms 300ms ease-in-out, opacity 200ms ease;
            animation: rotation 5s ease-out 500ms 1 forwards;
            stroke-dasharray: 6000px;
            stroke-dashoffset: 100%;
            opacity: 0.4;
            &__hover {
                stroke: transparent;
                stroke-width: 16px;
                fill: transparent;
                pointer-events: stroke;
                transition: r 1000ms 300ms ease-in-out;
            }
            &__title {
                display: none;
                fill: white;
                text-anchor: middle;
            }
        }
        .item {
            cursor: pointer;
            transition: opacity 200ms ease 100ms;
            circle {
                transition: cy 1000ms ease-in-out, cx 1000ms ease-in-out;
                stroke: white;
                stroke-width: 1px;
            }
            &__dot {
                opacity: 0.7;
                fill: white;
            }
            &__circle {
                opacity: 0;
                fill: #050505;
            }
        }
        &:hover {
            .year {
                opacity: 1;
                &__title {
                    display: block;
                }
            }
            .item {
                &__dot {
                    opacity: 0;
                }
                &__circle {
                    opacity: 1;
                }
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